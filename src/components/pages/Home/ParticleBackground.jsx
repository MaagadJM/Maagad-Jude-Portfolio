import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 500;
const CONNECTION_DISTANCE = 1.5;
const MAX_CONNECTIONS = 600;

const globalMouse = { x: 0, y: 0 };
if (typeof window !== "undefined") {
  window.addEventListener("mousemove", (e) => {
    globalMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    globalMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });
}

function ParticleNetwork() {
  const pointsRef = useRef();
  const linesRef = useRef();
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const { viewport } = useThree();

  const { positions, velocities, sizes, opacities, blinkSpeeds, blinkOffsets, linePositions, lineColors } =
    useMemo(() => {
      const positions = new Float32Array(PARTICLE_COUNT * 3);
      const velocities = new Float32Array(PARTICLE_COUNT * 3);
      const sizes = new Float32Array(PARTICLE_COUNT);
      const opacities = new Float32Array(PARTICLE_COUNT);
      const blinkSpeeds = new Float32Array(PARTICLE_COUNT);
      const blinkOffsets = new Float32Array(PARTICLE_COUNT);
      const linePositions = new Float32Array(MAX_CONNECTIONS * 2 * 3);
      const lineColors = new Float32Array(MAX_CONNECTIONS * 2 * 4);

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 6;

        const speed = 0.3 + Math.random() * 0.4;
        const angle = Math.random() * Math.PI * 2;
        const angleZ = (Math.random() - 0.5) * Math.PI * 0.5;
        velocities[i * 3] = Math.cos(angle) * Math.cos(angleZ) * speed;
        velocities[i * 3 + 1] = Math.sin(angle) * Math.cos(angleZ) * speed;
        velocities[i * 3 + 2] = Math.sin(angleZ) * speed * 0.3;

        sizes[i] = Math.random() * 3 + 1;
        opacities[i] = 1.0;
        blinkSpeeds[i] = 0.3 + Math.random() * 1.2;
        blinkOffsets[i] = Math.random() * Math.PI * 2;
      }

      return { positions, velocities, sizes, opacities, blinkSpeeds, blinkOffsets, linePositions, lineColors };
    }, []);

  useFrame(({ clock }, delta) => {
    if (!pointsRef.current || !linesRef.current) return;

    const mouseX = (globalMouse.x * viewport.width) / 2;
    const mouseY = (globalMouse.y * viewport.height) / 2;

    mouseRef.current.x += (mouseX - mouseRef.current.x) * 0.05;
    mouseRef.current.y += (mouseY - mouseRef.current.y) * 0.05;

    const posArr = pointsRef.current.geometry.attributes.position.array;
    const time = clock.getElapsedTime();
    const dt = Math.min(delta, 0.05);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      const wanderX = Math.sin(time * 0.2 + i * 1.7) * 0.1;
      const wanderY = Math.cos(time * 0.15 + i * 2.3) * 0.1;

      posArr[i3] += (velocities[i3] + wanderX) * dt;
      posArr[i3 + 1] += (velocities[i3 + 1] + wanderY) * dt;
      posArr[i3 + 2] += velocities[i3 + 2] * dt;

      if (posArr[i3] > 12) posArr[i3] = -12;
      if (posArr[i3] < -12) posArr[i3] = 12;
      if (posArr[i3 + 1] > 12) posArr[i3 + 1] = -12;
      if (posArr[i3 + 1] < -12) posArr[i3 + 1] = 12;
      if (posArr[i3 + 2] > 4) posArr[i3 + 2] = -4;
      if (posArr[i3 + 2] < -4) posArr[i3 + 2] = 4;

      const dx = mouseRef.current.x - posArr[i3];
      const dy = mouseRef.current.y - posArr[i3 + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      const influence = Math.max(0, 1 - dist / 4);
      posArr[i3] += dx * influence * 0.008;
      posArr[i3 + 1] += dy * influence * 0.008;

      if (Math.random() < 0.01) {
        const rotAngle = (Math.random() - 0.5) * 0.5;
        const vx = velocities[i3];
        const vy = velocities[i3 + 1];
        velocities[i3] = vx * Math.cos(rotAngle) - vy * Math.sin(rotAngle);
        velocities[i3 + 1] = vx * Math.sin(rotAngle) + vy * Math.cos(rotAngle);
      }
    }

    const opArr = pointsRef.current.geometry.attributes.aOpacity.array;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      opArr[i] = 0.2 + 0.8 * ((Math.sin(time * blinkSpeeds[i] + blinkOffsets[i]) + 1) / 2);
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.geometry.attributes.aOpacity.needsUpdate = true;

    const linePosArr = linesRef.current.geometry.attributes.position.array;
    const lineColArr = linesRef.current.geometry.attributes.color.array;
    let connectionCount = 0;

    for (let i = 0; i < PARTICLE_COUNT && connectionCount < MAX_CONNECTIONS; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT && connectionCount < MAX_CONNECTIONS; j++) {
        const i3 = i * 3;
        const j3 = j * 3;

        const ddx = posArr[i3] - posArr[j3];
        const ddy = posArr[i3 + 1] - posArr[j3 + 1];
        const ddz = posArr[i3 + 2] - posArr[j3 + 2];
        const d = Math.sqrt(ddx * ddx + ddy * ddy + ddz * ddz);

        if (d < CONNECTION_DISTANCE) {
          const alpha = 1 - d / CONNECTION_DISTANCE;
          const ci = connectionCount * 6;
          const cc = connectionCount * 8;

          linePosArr[ci] = posArr[i3];
          linePosArr[ci + 1] = posArr[i3 + 1];
          linePosArr[ci + 2] = posArr[i3 + 2];
          linePosArr[ci + 3] = posArr[j3];
          linePosArr[ci + 4] = posArr[j3 + 1];
          linePosArr[ci + 5] = posArr[j3 + 2];

          lineColArr[cc] = 0.79;
          lineColArr[cc + 1] = 0.55;
          lineColArr[cc + 2] = 0.02;
          lineColArr[cc + 3] = alpha * 0.4;

          lineColArr[cc + 4] = 0.79;
          lineColArr[cc + 5] = 0.55;
          lineColArr[cc + 6] = 0.02;
          lineColArr[cc + 7] = alpha * 0.4;

          connectionCount++;
        }
      }
    }

    for (let i = connectionCount * 6; i < linePosArr.length; i++) {
      linePosArr[i] = 0;
    }
    for (let i = connectionCount * 8; i < lineColArr.length; i++) {
      lineColArr[i] = 0;
    }

    linesRef.current.geometry.attributes.position.needsUpdate = true;
    linesRef.current.geometry.attributes.color.needsUpdate = true;
    linesRef.current.geometry.setDrawRange(0, connectionCount * 2);
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={PARTICLE_COUNT}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={PARTICLE_COUNT}
            array={sizes}
            itemSize={1}
          />
          <bufferAttribute
            attach="attributes-aOpacity"
            count={PARTICLE_COUNT}
            array={opacities}
            itemSize={1}
          />
        </bufferGeometry>
        <shaderMaterial
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          vertexShader={`
            attribute float aOpacity;
            varying float vOpacity;
            void main() {
              vOpacity = aOpacity;
              vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
              gl_PointSize = 4.0 * (1.0 / -mvPosition.z);
              gl_Position = projectionMatrix * mvPosition;
            }
          `}
          fragmentShader={`
            varying float vOpacity;
            void main() {
              float d = length(gl_PointCoord - vec2(0.5));
              if (d > 0.5) discard;
              float alpha = smoothstep(0.5, 0.1, d) * vOpacity * 0.6;
              gl_FragColor = vec4(0.79, 0.55, 0.02, alpha);
            }
          `}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={MAX_CONNECTIONS * 2}
            array={linePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={MAX_CONNECTIONS * 2}
            array={lineColors}
            itemSize={4}
          />
        </bufferGeometry>
        <lineBasicMaterial
          transparent
          vertexColors
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.5}
        />
      </lineSegments>
    </>
  );
}

export default function ParticleBackground() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ pointerEvents: "none", background: "transparent" }}
        gl={{ alpha: true }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <ParticleNetwork />
      </Canvas>
    </div>
  );
}
