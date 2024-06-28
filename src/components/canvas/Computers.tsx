import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import styled from "styled-components";
import { useFrame } from "@react-three/fiber";

const StyledCanvasContainer = styled.div`
  border-radius: 20px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    height: 300px;
  }
`;

const Computers: React.FC<{ isMobile: boolean }> = React.memo(({ isMobile }) => {
  const { scene: computer } = useGLTF("./desktop_pc/scene.gltf");

  // Rotation state
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

  // Rotate the mesh
  useFrame(() => {
    // Rotate around the Y axis
    setRotation((prevRotation) => [0, prevRotation[1] + 0.01, 0]);
  });

  return (
    <mesh rotation={rotation}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <hemisphereLight
        groundColor={"#808080"}
        intensity={0.5}
        position={[0, 50, 0]}
      />

      {/* GLTF Model */}
      <primitive
        object={computer}
        scale={isMobile ? 0.7 : 1.2}
        position={isMobile ? [0, -1.5, -2.2] : [0, -4.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        receiveShadow
        castShadow
      />
    </mesh>
  );
});

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <StyledCanvasContainer>
      <Canvas
        frameloop="demand"
        shadows
        dpr={Math.min(window.devicePixelRatio, 2)}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <Preload all />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Canvas>
    </StyledCanvasContainer>
  );
};

export default ComputersCanvas;
