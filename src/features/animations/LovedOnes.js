import * as THREE from "three";
import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Caustics,
  CubeCamera,
  Environment,
  useScroll,
  MeshRefractionMaterial,
  PerspectiveCamera,
  Html,
  Scroll,
  useProgress,
  ScrollControls,
  OrbitControls,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
  SMAA,
  BrightnessContrast,
} from "@react-three/postprocessing";
import { RGBELoader } from "three-stdlib";

import { PresentationControls } from "custom-drei";
import store from "./store";

// import { SceneWrapper } from './App';

function Loader() {
  const { active, progress } = useProgress();
  return (
    <Html zIndexRange={[999, 1000]} center>
      Scene {progress} % loaded
    </Html>
  );
}

function Ring(props) {
  const [isLoading, setIsLoading] = useState(true);
  const { modelPath } = props;
  const { nodes } = useGLTF("/ring/model.gltf");

  useEffect(() => {
    // Когда модель загружена, устанавливаем состояние загрузки в false
    setIsLoading(false);
  }, [nodes]);

  const texture = useLoader(RGBELoader, "env.hdr");
  return (
    <>
      <group position={props.position}>
        <CubeCamera resolution={64} frames={1} envMap={texture}>
          {(texture) => (
            <Caustics worldRadius={0.1} intensity={0}>
              <mesh
                receiveShadow
                castShadow={false}
                geometry={nodes.Diamond.geometry}
                {...props}
              >
                <MeshRefractionMaterial
                  color={"white"}
                  aberrationStrength={0.01}
                  bounces={3}
                  fresnel={0}
                  fastChroma={true}
                  envMap={texture}
                  toneMapped={false}
                />
              </mesh>
              <mesh
                castShadow={false}
                geometry={nodes.Ring.geometry}
                {...props}
              >
                <meshStandardMaterial
                  color={"#cbc0a9"}
                  roughness={0.2}
                  metalness={1}
                  smooth={true}
                />
              </mesh>
              <mesh
                receiveShadow
                rotation-x={-Math.PI / 2}
                position={[0, 2, 0]}
              >
                <planeGeometry args={[128, 128]} />
                <shadowMaterial transparent opacity={0.4} />
              </mesh>
            </Caustics>
          )}
        </CubeCamera>
      </group>
    </>
  );
}

const keyframes = [
  {
    pixel: 0,
    position: new THREE.Vector3(2.5, -2.8, -6),
    rotationSpeed: 0.1,
    tilt: new THREE.Euler(0.1, 0.1, 0),
    scale: new THREE.Vector3(1.3, 1.4, 1.3),
    pixelRatio: 0.8,
    focusDistance: 0.1,
    focalLength: 0.8,
    scrollWithPage: false,
    scrollStart: 200,
  },
  {
    pixel: 600,
    position: new THREE.Vector3(7, -0.5, -8),
    rotationSpeed: 0,
    tilt: new THREE.Euler(1.5, 0, 2),
    scale: new THREE.Vector3(1.8, 1.9, 1.8),
    pixelRatio: 0.8,
    focusDistance: 0.0008,
    focalLength: 0.007,
    scrollWithPage: false,
    scrollStart: 1300,
  },
  {
    pixel: 1450,
    position: new THREE.Vector3(7, -0.5, -8),
    rotationSpeed: 0,
    tilt: new THREE.Euler(1.5, 0, 2),
    scale: new THREE.Vector3(1.8, 1.9, 1.8),
    pixelRatio: 0.8,
    focusDistance: 0.0008,
    focalLength: 0.007,
    scrollWithPage: true,
    scrollStart: 1500,
  }, //чтобы модель оставалась на том месте, без скачка, то лучше плюсовать +50px к scrollStart
];

function SceneWrapper(props) {
  const groupRef = useRef();
  const ringRef = useRef();
  const { gl, invalidate } = useThree();
  const [scrollWithPage, setScrollWithPage] = useState(true);
  const scrollScaleFactor = 0.009; // скорость по которой положение диаманта будет двигаться вместе со скроллбаром
  let currentIndex = 0;

  useFrame((state, delta) => {
    const scrollPixels = store.scrollPosition;
    let currentKeyframe = keyframes[0];

    if (scrollPixels <= 600) {
      currentKeyframe = keyframes[0];
    } else if (scrollPixels > 600 && scrollPixels < 1300) {
      currentKeyframe = keyframes[1];
    } else {
      currentKeyframe = keyframes[2];
    }

    if (currentKeyframe.scrollWithPage) {
      const scrollOffset = store.scrollPosition - currentKeyframe.scrollStart;
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        scrollOffset * scrollScaleFactor,
        1
      );
    } else {
      // если scrollWithPage false, диамант возвращаем на место
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        keyframes[currentIndex].position.y,
        0.07
      );
    }

    // вращение модели
    if (scrollPixels < 800) {
      ringRef.current.rotation.y += 0.1 * delta; // Вращаем только по оси X
      invalidate();
    } else {
      ringRef.current.rotation.y = 0;
    }

    // интерполяция

    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      currentKeyframe.position.x,
      0.07
    );
    groupRef.current.position.z = THREE.MathUtils.lerp(
      groupRef.current.position.z,
      currentKeyframe.position.z,
      0.07
    );

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      currentKeyframe.tilt.x,
      0.07
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      currentKeyframe.tilt.y,
      0.07
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      currentKeyframe.tilt.z,
      0.07
    );

    groupRef.current.scale.x = THREE.MathUtils.lerp(
      groupRef.current.scale.x,
      currentKeyframe.scale.x,
      0.07
    );
    groupRef.current.scale.y = THREE.MathUtils.lerp(
      groupRef.current.scale.y,
      currentKeyframe.scale.y,
      0.07
    );
    groupRef.current.scale.z = THREE.MathUtils.lerp(
      groupRef.current.scale.z,
      currentKeyframe.scale.z,
      0.07
    );

    gl.setPixelRatio(currentKeyframe.pixelRatio);
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} zIndexRange={[1, 2]}>
      <group ref={ringRef}>
        {props.children}
        <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, 1, 0]}>
          <planeGeometry args={[128, 128]} />
          <shadowMaterial transparent opacity={0.4} />
        </mesh>
      </group>
    </group>
  );
}

function LovedOnes() {
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;

      if (newWidth >= 1000) {
        setScale(1.7);
      } else if (newWidth < 400) {
        setScale(0.9);
      } else if (newWidth < 500) {
        setScale(1.1);
      }
    };

    // Вызываем handleResize() один раз при монтировании компонента
    handleResize();

    // Добавляем обработчик события для изменения размера окна
    window.addEventListener("resize", handleResize);

    // Удаляем обработчик события при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Canvas
      colorManagement
      // gl={{ antialias: true, alpha: true }}
      frameloop="demand"
      camera={{
        position: [3, -2, -3],
        fov: 40,
      }}
      style={{ height: "100%" }}
    >
      <Environment files="/env.hdr" />
      <PerspectiveCamera makeDefault />

      <EffectComposer multisampling={1}>
        <BrightnessContrast brightness={0} contrast={0.1} />
        {/* <DepthOfField focusDistance={focusDistance} focalLength={focalLength} bokehScale={8} height={720} /> */}
        <Bloom luminanceThreshold={1} intensity={2} levels={16} mipmapBlur />
        <SMAA />
      </EffectComposer>

      <SceneWrapper>
        <Suspense>
          <Ring scale={[scale, scale, scale]} />
        </Suspense>
      </SceneWrapper>
    </Canvas>
  );
}

export default LovedOnes;
