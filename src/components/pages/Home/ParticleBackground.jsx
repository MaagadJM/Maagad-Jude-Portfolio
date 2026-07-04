import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 700;
const CONNECTION_DISTANCE = 1.5;
const MAX_CONNECTIONS = 800;
const IDLE_THRESHOLD = 1.5;

const globalMouse = { x: 0, y: 0, lastMoveTime: 0 };
if (typeof window !== "undefined") {
  window.addEventListener("mousemove", (e) => {
    globalMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    globalMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    globalMouse.lastMoveTime = performance.now();
  });
}

function hslToRgb(h, s, l) {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r, g, b;
  if (h < 60) { r = c; g = x; b = 0; }
  else if (h < 120) { r = x; g = c; b = 0; }
  else if (h < 180) { r = 0; g = c; b = x; }
  else if (h < 240) { r = 0; g = x; b = c; }
  else if (h < 300) { r = x; g = 0; b = c; }
  else { r = c; g = 0; b = x; }
  return [r + m, g + m, b + m];
}

function ParticleNetwork() {
  const pointsRef = useRef();
  const linesRef = useRef();
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const rainbowBlend = useRef(0);
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

  const shaderRef = useRef();

  useFrame(({ clock }, delta) => {
    if (!pointsRef.current || !linesRef.current) return;

    const mouseX = (globalMouse.x * viewport.width) / 2;
    const mouseY = (globalMouse.y * viewport.height) / 2;

    mouseRef.current.x += (mouseX - mouseRef.current.x) * 0.05;
    mouseRef.current.y += (mouseY - mouseRef.current.y) * 0.05;

    const idleSeconds = (performance.now() - globalMouse.lastMoveTime) / 1000;
    const isIdle = idleSeconds > IDLE_THRESHOLD;
    const targetBlend = isIdle ? 1 : 0;
    rainbowBlend.current += (targetBlend - rainbowBlend.current) * delta * 2;

    if (shaderRef.current) {
      shaderRef.current.uniforms.uRainbow.value = rainbowBlend.current;
      shaderRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }

    const posArr = pointsRef.current.geometry.attributes.position.array;
    const time = clock.getElapsedTime();
    const dt = Math.min(delta, 0.05);
    const blend = rainbowBlend.current;

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

          const hueI = ((time * 60 + i * 7) % 360);
          const hueJ = ((time * 60 + j * 7) % 360);
          const [rI, gI, bI] = hslToRgb(hueI, 0.9, 0.6);
          const [rJ, gJ, bJ] = hslToRgb(hueJ, 0.9, 0.6);

          const goldR = 0.79, goldG = 0.55, goldB = 0.02;

          lineColArr[cc] = goldR + (rI - goldR) * blend;
          lineColArr[cc + 1] = goldG + (gI - goldG) * blend;
          lineColArr[cc + 2] = goldB + (bI - goldB) * blend;
          lineColArr[cc + 3] = alpha * 0.4;

          lineColArr[cc + 4] = goldR + (rJ - goldR) * blend;
          lineColArr[cc + 5] = goldG + (gJ - goldG) * blend;
          lineColArr[cc + 6] = goldB + (bJ - goldB) * blend;
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

  const uniforms = useMemo(
    () => ({
      uRainbow: { value: 0 },
      uTime: { value: 0 },
    }),
    []
  );

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
          ref={shaderRef}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          uniforms={uniforms}
          vertexShader={`
            attribute float aOpacity;
            varying float vOpacity;
            varying vec2 vPos;
            void main() {
              vOpacity = aOpacity;
              vPos = position.xy;
              vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
              gl_PointSize = 4.0 * (1.0 / -mvPosition.z);
              gl_Position = projectionMatrix * mvPosition;
            }
          `}
          fragmentShader={`
            uniform float uRainbow;
            uniform float uTime;
            varying float vOpacity;
            varying vec2 vPos;

            vec3 hsl2rgb(float h, float s, float l) {
              float c = (1.0 - abs(2.0 * l - 1.0)) * s;
              float x = c * (1.0 - abs(mod(h / 60.0, 2.0) - 1.0));
              float m = l - c / 2.0;
              vec3 rgb;
              if (h < 60.0) rgb = vec3(c, x, 0.0);
              else if (h < 120.0) rgb = vec3(x, c, 0.0);
              else if (h < 180.0) rgb = vec3(0.0, c, x);
              else if (h < 240.0) rgb = vec3(0.0, x, c);
              else if (h < 300.0) rgb = vec3(x, 0.0, c);
              else rgb = vec3(c, 0.0, x);
              return rgb + m;
            }

            void main() {
              float d = length(gl_PointCoord - vec2(0.5));
              if (d > 0.5) discard;
              float alpha = smoothstep(0.5, 0.1, d) * vOpacity * 0.6;
              vec3 gold = vec3(0.79, 0.55, 0.02);
              float hue = mod(uTime * 60.0 + vPos.x * 30.0 + vPos.y * 30.0, 360.0);
              vec3 rainbow = hsl2rgb(hue, 0.9, 0.6);
              vec3 color = mix(gold, rainbow, uRainbow);
              gl_FragColor = vec4(color, alpha);
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
        zIndex: 3,
        pointerEvents: "none",
        mixBlendMode: "difference",
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
