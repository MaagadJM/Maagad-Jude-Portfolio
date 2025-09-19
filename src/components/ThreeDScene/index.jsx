/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

function SpinningBox(props) {
  // Create a reference to the 3D object
  const meshRef = useRef();

  // useFrame is a hook that runs on every rendered frame
  // useFrame((state, delta) => {
  //   // Animate the rotation
  //   if (meshRef.current) {
  //     meshRef.current.rotation.y += delta * 0.5;
  //   }
  // });

  const { rotation } = useSpring({
    from: { rotation: [0, 0, 0] },
    to: async (next) => {
      while (1) {
        await next({ rotation: [0, Math.PI * 2, 0], config: { duration: 8000 } });
        await next({ rotation: [0, 0, 0], config: { duration: 8000 } });
      }
    },
    loop: true, // Keep the animation looping indefinitely
  });

  return (
    // <mesh {...props} ref={meshRef}>
    //     {/* quick fix for this error */}
    //     {/* eslint-disable-next-line react/no-unknown-property  */}
    //   <boxGeometry args={[2, 2, 2]} />
    //   <meshStandardMaterial color={'mediumpurple'} />
    // </mesh>

    <animated.mesh {...props} ref={meshRef} rotation={rotation} scale={[1.5, 1.5, 1.5]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      {/* Changed to MeshPhysicalMaterial for more realistic metal/gloss effects */}
      <meshPhysicalMaterial 
        color={'#6A0DAD'} // A slightly darker purple
        metalness={0.9}   // Make it very metallic
        roughness={0.1}   // Make it quite glossy
        clearcoat={1}     // Add a clear coat for extra shine
        clearcoatRoughness={0.1}
      />
    </animated.mesh>

  );
}

export default function My3DScene() {
  return (
    // <div style={{ width: 'auto', height: '500px' }}>
    //   <Canvas>
    //     {/* Add lighting so you can see the cube's color */}

    //       {/* eslint-disable-next-line react/no-unknown-property */}
    //     <ambientLight intensity={0.5} />

    //       {/* eslint-disable-next-line react/no-unknown-property */}
    //     <directionalLight position={[10, 10, 5]} />

    //     {/* Place the spinning box in the scene */}
    //     <SpinningBox position={[0, 0, 0]} />
        
    //     {/* Add mouse controls to rotate and zoom */}
    //     <OrbitControls />
    //   </Canvas>
    // </div>


    <div style={{ width: '100%', height: '400px', background: 'transparent' }}> {/* Ensure div background is transparent */}
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }} // Adjusted camera position for a better view
        shadows // Enable shadows for the scene
      >
        {/* Lights for better scene illumination */}
        
        <ambientLight intensity={0.6} />

        {/* eslint-disable-next-line react/no-unknown-property */}
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow intensity={0.8} />

        {/* eslint-disable-next-line react/no-unknown-property */}
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        {/* Use Environment for realistic lighting and reflections from an HDRI */}
        <Environment preset="city" background /> 

        {/* Add a subtle floor with contact shadows */}
        <ContactShadows position={[0, -1.8, 0]} scale={10} blur={2} far={2} opacity={0.5} />

        {/* The spinning box */}
        <SpinningBox position={[0, 0.5, 0]} /> {/* Lift the box slightly above the floor */}
        
        {/* Add mouse controls to rotate and zoom */}
        <OrbitControls enableZoom={false} enablePan={false} /> {/* Disable zoom/pan for a cleaner look */}
      </Canvas>
    </div>


  );
}