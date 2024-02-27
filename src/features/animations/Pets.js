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
  const { nodes } = useGLTF("/ring/model.gltf");

  useEffect(() => {
    // Когда модель загружена, устанавливаем состояние загрузки в false
    setIsLoading(false);
  }, [nodes]);

  const texture = useLoader(RGBELoader, "env.hdr");
  return (
    <>
      {isLoading ? (
        <Html zIndexRange={[999, 1000]}>
          <div>Model loading...</div>
        </Html>
      ) : (
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
      )}
    </>
  );
}

const keyframes = [
  {
    pixel: 0,
    position: new THREE.Vector3(2, -2.2, -6),
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
  const scroll = useScroll();

  const [scrollWithPage, setScrollWithPage] = useState(true);
  const scrollScaleFactor = 0.009; // скорость по которой положение диаманта будет двигаться вместе со скроллбаром

  let currentIndex = 0;

  useFrame((state, delta) => {
    const totalScrollHeight = 6739; // фактическая высота страницы
    const scrollPixels = scroll.offset * totalScrollHeight;
    let currentKeyframe = keyframes[0];

    // поиск ближайшего ключ кадра

    for (let i = 0; i < keyframes.length; i++) {
      if (scrollPixels < keyframes[i].pixel) {
        break;
      }
      currentKeyframe = keyframes[i];
      currentIndex = i;
    }

    // скроллим диамант вместе со страницей

    if (currentKeyframe.scrollWithPage) {
      const scrollOffset =
        scroll.offset * totalScrollHeight - currentKeyframe.scrollStart;
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

    // вращение модели и ручное вращение диаманта на третьем ключе

    if (currentIndex === 0) {
      ringRef.current.rotation.y += currentKeyframe.rotationSpeed * delta;
      invalidate();
    } else if (currentIndex === 1) {
      ringRef.current.rotation.y = 0;
      invalidate();
    }

    // depth of field
    props.onKeyframeChange(currentKeyframe);

    // интерполяция

    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      currentKeyframe.position.x,
      0.07
    );
    // groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, currentKeyframe.position.y, 0.07);
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

const PetsFront = () => {
  return (
    <Html zIndexRange={[9, 10]}>
      <div className="pets_front"></div>
    </Html>
  );
};

const PetsBack = () => {
  return (
    <Html zIndexRange={[-2, -1]}>
      <div className="pets_back"></div>
    </Html>
  );
};

function Pets() {
  const [focusDistance, setFocusDistance] = useState(0.001);
  const [focalLength, setFocalLength] = useState(0.003);

  const handleKeyframeChange = (keyframe) => {
    setFocusDistance(keyframe.focusDistance);
    setFocalLength(keyframe.focalLength);
  };

  return (
    <Canvas
      colorManagement
      // gl={{ antialias: true, alpha: true }}
      frameloop="demand"
      camera={{
        position: [3, -2, -3],
        fov: 40,
      }}
      style={{ height: "900px" }}
    >
      <Environment files="env.hdr" />
      <PerspectiveCamera makeDefault />

      <EffectComposer multisampling={1}>
        <BrightnessContrast brightness={0} contrast={0.1} />
        {/* <DepthOfField focusDistance={focusDistance} focalLength={focalLength} bokehScale={8} height={720} /> */}
        <Bloom luminanceThreshold={1} intensity={2} levels={16} mipmapBlur />
        <SMAA />
      </EffectComposer>

      <ScrollControls pages={1} damping={0}>
        <SceneWrapper onKeyframeChange={handleKeyframeChange}>
          <Suspense fallback={<Loader />}>
            <Ring scale={[1.4, 1.4, 1.4]} />
          </Suspense>
        </SceneWrapper>

        <Scroll>
          <PetsFront />
          <PetsBack />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default Pets;
