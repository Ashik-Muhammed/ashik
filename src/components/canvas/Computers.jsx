import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("/desktop_pc/scene.gltf"); // Ensure path is correct
  const computerRef = useRef();

  useFrame(({ clock }) => {
    if (computerRef.current) {
      const t = clock.getElapsedTime();

      // Floating up and down (Y-axis)
      computerRef.current.position.y = -3.25 + Math.sin(t) * 0.1;

      // Slow rotation around Y-axis
      computerRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        ref={computerRef}
        object={computer.scene}
        scale={0.6} // Reduced scale to make the computer smaller
        position={[0, -3.25, -1.5]} // base Y position, adjusted by animation
        rotation={[-0.01, -0.2, -0.1]} // initial rotation
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    !isMobile && (
      <Canvas
        frameloop="always"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers />
        </Suspense>
        <Preload all />
      </Canvas>
    )
  );
};

export default ComputersCanvas;
