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

const defaultModelColor = "#B7B7B7";

function Loader() {
  const { active, progress } = useProgress();
  return (
    <Html zIndexRange={[999, 1000]} center>
      <svg
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -125%)",
        }}
        className="active"
        viewBox="0 0 82 66"
        width={200}
        height={200}
      >
        <style>
          {
            "@keyframes animate-svg-stroke-1{0%,to{stroke-dashoffset:205.29959106445312px;stroke-dasharray:205.29959106445312px}35%,65%{stroke-dashoffset:410.59918212890625px;stroke-dasharray:205.29959106445312px}}@keyframes animate-svg-stroke-2{0%,to{stroke-dashoffset:43.231056213378906px;stroke-dasharray:43.231056213378906px}35%,65%{stroke-dashoffset:86.46211242675781px;stroke-dasharray:43.231056213378906px}}@keyframes animate-svg-stroke-3{0%,to{stroke-dashoffset:54px;stroke-dasharray:54px}35%,65%{stroke-dashoffset:108px;stroke-dasharray:54px}}@keyframes animate-svg-stroke-4{0%,to{stroke-dashoffset:80px;stroke-dasharray:80px}35%,65%{stroke-dashoffset:160px;stroke-dasharray:80px}}@keyframes animate-svg-stroke-5{0%,to{stroke-dashoffset:49.801673889160156px;stroke-dasharray:49.801673889160156px}15%,60%{stroke-dashoffset:99.60334777832031px;stroke-dasharray:49.801673889160156px}}@keyframes animate-svg-stroke-6{0%,to{stroke-dashoffset:49.801673889160156px;stroke-dasharray:49.801673889160156px}15%,60%{stroke-dashoffset:99.60334777832031px;stroke-dasharray:49.801673889160156px}}"
          }
        </style>
        <g
          id="Kit"
          fill="none"
          fillRule="evenodd"
          stroke="none"
          strokeWidth={1}
        >
          <g
            id="Artboard"
            stroke="#fff"
            strokeWidth={2}
            opacity={0.5}
            transform="translate(-39 -47)"
          >
            <g id="Group-13" transform="translate(41 48)">
              <path
                id="Stroke-1"
                d="M26 17.14 13 1 0 17.14 39 63l39-45.86L65 1 52 17.14"
                style={{
                  animation: "animate-svg-stroke-1 3s ease infinite",
                }}
              />
              <path
                id="Stroke-3"
                d="M52 17 39 1 26 17"
                style={{
                  animation: "animate-svg-stroke-2 3s ease infinite",
                }}
              />
              <path
                id="Stroke-5"
                d="M13 .5h52"
                style={{
                  animation: "animate-svg-stroke-3 3s ease infinite",
                }}
              />
              <path
                id="Stroke-7"
                d="M78 16.5H0"
                style={{
                  animation: "animate-svg-stroke-4 3s ease infinite",
                }}
              />
              <path
                id="Stroke-9"
                d="m26 17 13 46"
                style={{
                  animation: "animate-svg-stroke-5 3s ease infinite",
                }}
              />
              <path
                id="Stroke-11"
                d="M52 17 39 63"
                style={{
                  animation: "animate-svg-stroke-6 3s ease infinite",
                }}
              />
            </g>
          </g>
        </g>
      </svg>
    </Html>
  );
}

function Diamond(props) {
  const [isLoading, setIsLoading] = useState(true);
  const { modelPath } = props;
  const { nodes } = useGLTF("/diamond.gltf");

  useEffect(() => {
    // Когда модель загружена, устанавливаем состояние загрузки в false
    setIsLoading(false);
  }, [nodes]);

  const texture = useLoader(RGBELoader, "/env.hdr");

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <group position={props.position}>
          <CubeCamera resolution={64} frames={1} envMap={texture}>
            {(texture) => (
              <Caustics worldRadius={0.1} intensity={0}>
                <mesh
                  receiveShadow
                  castShadow={false}
                  geometry={nodes.Cylinder.geometry}
                  {...props}
                >
                  <MeshRefractionMaterial
                    color={defaultModelColor}
                    aberrationStrength={0.01}
                    bounces={3}
                    fresnel={0}
                    fastChroma={true}
                    envMap={texture}
                    toneMapped={false}
                  />
                </mesh>
              </Caustics>
            )}
          </CubeCamera>
          <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, 0.01, 0]}>
            <planeGeometry args={[32, 32]} />
            <shadowMaterial transparent opacity={0.4} />
          </mesh>
        </group>
      )}
    </>
  );
}

function SceneWrapper(props) {
  const groupRef = useRef();
  const diamondRef = useRef();

  const { gl, invalidate } = useThree();

  // useFrame((state, delta) => {
  //   diamondRef.current.rotation.y += 0.1 * delta;
  // if (store.scrollPosition <= 600) {
  //   if (diamondRef.current.rotation.x > 0) {
  //     diamondRef.current.rotation.x -= 1 * delta;
  //   }
  // }
  // if (store.scrollPosition >= 520) {
  //   if (diamondRef.current.rotation.x < 0.5) {
  //     diamondRef.current.rotation.x += 1 * delta;
  //   }
  // }
  //   invalidate(); // принудительно вызывать рендер на каждом кадре
  //   gl.setPixelRatio(0.8); // разрешение рендера
  // });

  const fps = 17;
  const fpsInterval = 1000 / fps;
  let then = Date.now();

  useEffect(() => {
    startAnimating(fps);
  }, []);

  function startAnimating(fps) {
    const animate = () => {
      const now = Date.now();
      const elapsed = now - then;

      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        // draw stuff here
        if (diamondRef.current) {
          diamondRef.current.rotation.y += 0.1 / fps;
        }
        invalidate();
        gl.setPixelRatio(0.9); //понижаем разрешение с 1 до 0.9 ( за счет оптимизации кадров можно чуть улучшить по сравнению с предыдущей версией)
      }

      requestAnimationFrame(animate);
    };

    animate();
  }

  return (
    <group ref={groupRef} position={[0, -2, -6]} zIndexRange={[1, 2]}>
      <group ref={diamondRef}>{props.children}</group>
    </group>
  );
}

function FirstScreen() {
  const [scale, setScale] = useState(0);
  const [windowSize, setWindowSize] = useState(undefined);

  useGLTF.preload("/diamond.gltf");

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowSize(newWidth);

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
    <Canvas frameloop="demand" style={{ height: "100%", position: "relative" }}>
      <Environment files="/env.hdr" />
      <PerspectiveCamera makeDefault />

      <EffectComposer multisampling={1}>
        <BrightnessContrast brightness={0} contrast={0.1} />
        <Bloom luminanceThreshold={1} intensity={1} levels={16} mipmapBlur />
        <SMAA />
      </EffectComposer>

      <SceneWrapper>
        <Suspense fallback={<Loader />}>
          <Diamond rotation={[0, 0, 0]} scale={[scale, scale, scale]} />
        </Suspense>
      </SceneWrapper>
    </Canvas>
  );
}

export default FirstScreen;
