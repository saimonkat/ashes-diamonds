import * as THREE from "three";
import React, { useRef, useState } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import {
  useGLTF,
  Caustics,
  CubeCamera,
  Environment,
  useScroll,
  MeshRefractionMaterial,
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

import HdrFile from "./env.hdr"; //по какой-то причине здесь перестали работать пути в папку /public/ , потому я поместил env.hdr в src и импортировал

function Ring(props) {
  const { nodes } = useGLTF("/pricing/model.gltf");
  const texture = useLoader(RGBELoader, HdrFile);
  return (
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
                color={"#54B2CD"}
                aberrationStrength={0.01}
                bounces={3}
                fresnel={0}
                fastChroma={true}
                envMap={texture}
                toneMapped={false}
              />
            </mesh>
            <mesh castShadow={false} geometry={nodes.Ring.geometry} {...props}>
              <meshStandardMaterial
                color={"#cbc0a9"}
                roughness={0.2}
                metalness={1}
                smooth={true}
              />
            </mesh>
            <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, 2, 0]}>
              <planeGeometry args={[128, 128]} />
              <shadowMaterial transparent opacity={0.4} />
            </mesh>
          </Caustics>
        )}
      </CubeCamera>
    </group>
  );
}

const keyframes = [
  {
    pixel: 0,
    position: new THREE.Vector3(2, -2.2, -6),
    rotationSpeed: 0,
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

function Pricing() {
  return (
    <Canvas
      // gl={{ antialias: true, alpha: true }}
      frameloop="demand"
      camera={{
        position: [0, 7, 2],
        fov: 20,
      }}
      style={{ height: "900px" }}
    >
      <Environment files={HdrFile} />
      {/* <PerspectiveCamera makeDefault /> */}

      <EffectComposer multisampling={1}>
        <BrightnessContrast brightness={0} contrast={0.1} />
        {/* <DepthOfField focusDistance={focusDistance} focalLength={focalLength} bokehScale={8} height={720} /> */}
        <Bloom luminanceThreshold={1} intensity={1} levels={16} mipmapBlur />
        <SMAA />
      </EffectComposer>

      <PresentationControls>
        <SceneWrapper>
          <Ring scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 0, 0]} />
        </SceneWrapper>
      </PresentationControls>
    </Canvas>
  );
}

export default Pricing;
