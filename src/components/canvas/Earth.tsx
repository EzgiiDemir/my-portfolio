import React, { Suspense, useMemo, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

const Earth: React.FC = () => {
  const { scene } = useGLTF("./planet/scene.gltf");
  return <primitive object={scene} scale={2.5} position-y={0} rotation-y={0} />;
};

const EarthCanvas: React.FC = () => {
  const controls = useMemo(
    () => (
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    ),
    []
  );

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={Math.min(window.devicePixelRatio, 2)}
      gl={{ preserveDrawingBuffer: true, antialias: true, powerPreference: "high-performance" }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {controls}
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
