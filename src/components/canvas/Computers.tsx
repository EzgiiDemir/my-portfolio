import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import styled from "styled-components";
import { Environment } from "@react-three/drei";
import CanvasLoader from "../layout/Loader";
import { useFrame } from "@react-three/fiber"; // useFrame'ı import ediyoruz

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

const Computers: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Rotation state
  const [rotation, setRotation] = useState([0, 0, 0]);

  // Rotate the mesh
  useFrame(() => {
    // Rotate around the Y axis
    setRotation([0, rotation[1] + 0.01, 0]);
  });

  return (
    <mesh rotation={rotation}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <hemisphereLight
        skyColor={"#ffffff"}
        groundColor={"#808080"}
        intensity={0.5}
        position={[0, 50, 0]}
      />

      {/* Environment */}
      <Environment preset="night" backgroundBlurriness={0.6} />

      {/* GLTF Model */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 1.2}
        position={isMobile ? [0, -1.5, -2.2] : [0, -4.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        receiveShadow
        castShadow
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <StyledCanvasContainer>
      <Canvas
        frameloop="always"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </StyledCanvasContainer>
  );
};

export default ComputersCanvas;
