import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  useGLTF,
  Caustics,
  CubeCamera,
  Environment,
  MeshRefractionMaterial,
  PerspectiveCamera,
  Html,
  useProgress,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  SMAA,
  BrightnessContrast,
} from "@react-three/postprocessing";
import { RGBELoader } from "three-stdlib";

import { PresentationControls } from "custom-drei";

const defaultModelColor = "#B7B7B7";
const defaultDiamondModel = "/d1/diamond.gltf";

function Loader({ isMobile }) {
  const { active, progress } = useProgress();
  return (
    <Html zIndexRange={[999, 1000]} center>
      <svg
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(${isMobile ? "-50%" : "-25%"}, -125%)`,
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
  const { nodes } = useGLTF(modelPath);

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
                    color={props.color}
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
  const diamondRef = useRef();
  return (
    <group position={[0, -1.4, -6]} rotation={[0, 0, 0]} zIndexRange={[1, 2]}>
      <group ref={diamondRef}>{props.children}</group>
    </group>
  );
}

function Constructor({ selectedColor, selectedItem, link, isMobile = false }) {
  const [currentModel, setCurrentModel] = useState(defaultDiamondModel);
  const [diamondColor, setDiamondColor] = useState(defaultModelColor);
  const handleColorChange = (color) => {
    setDiamondColor(color);
  };
  const colorString =
    typeof selectedColor === "object" ? selectedColor.color : selectedColor;

  return (
    <Canvas frameloop="demand" style={{ height: "100%", position: "relative" }}>
      <Environment files="/env.hdr" />
      <PerspectiveCamera makeDefault />

      <EffectComposer multisampling={1}>
        <BrightnessContrast brightness={0} contrast={0.1} />

        <Bloom luminanceThreshold={1} intensity={1} levels={16} mipmapBlur />
        <SMAA />
      </EffectComposer>

      <SceneWrapper
        setDiamondColor={setDiamondColor}
        onColorChange={setDiamondColor}
        setCurrentModel={setCurrentModel}
      >
        <Suspense fallback={<Loader isMobile={isMobile} />}>
          <PresentationControls snap={true} zoom={0.7} polar={[0, Math.PI / 3]}>
            <Diamond
              key={currentModel}
              modelPath={link}
              color={colorString}
              rotation={[0, 0, 0]}
              scale={[1.4, 1.5, 1.4]}
              position={isMobile ? [0, 0.5, 0] : [0, 0, 0]}
            />
          </PresentationControls>
        </Suspense>
      </SceneWrapper>
    </Canvas>
  );
}

export default Constructor;
