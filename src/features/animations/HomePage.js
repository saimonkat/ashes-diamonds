//Worked 5 + switching models

import * as THREE from "three";
import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
import { PresentationControls } from "custom-drei";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
  SMAA,
  BrightnessContrast,
} from "@react-three/postprocessing";

// import Banner from "../../app/routes/Test";
import { RGBELoader } from "three-stdlib";
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
} from "@react-three/drei";
/* import gl from "./diamond.gltf" */

const defaultModelColor = "#B7B7B7";

// const defaultDiamondModel = "./d1/diamond.gltf";

/*  const defaultDiamondModel = gl  */

function Loader() {
  const { active, progress } = useProgress();
  return (
    <Html zIndexRange={[999, 1000]} center>
      Scene {progress} % loaded
    </Html>
  );
}

function Diamond(props) {
  const [isLoading, setIsLoading] = useState(true);
  const { modelPath } = props;
  const { nodes } = useGLTF(modelPath);

  const texture = useLoader(RGBELoader, "/env.hdr");
  useEffect(() => {
    // Когда модель загружена, устанавливаем состояние загрузки в false
    setIsLoading(false);
  }, [nodes]);

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

// pixel - положение скроллбара
// position - x y z (ось Y работает как Z ¯\_(ツ)_/¯ такие правила threejs)
// rotationSpeed - скорость вращения
// tilt - наклон модели
// scale
// pixelRatio - условно разрешение, чем меньше - тем быстрее рендер
// focus
// scrollWithPage - если true, то модель крутится вместе со скроллбаром, при этом игнорирутеся положение Y в переменной position
// scrollStart - фактически и есть положение Y, но относительно положения скроллбара. работает корректно, если правиьльно указывать высоту страницы

const keyframes = [
  {
    pixel: 0,
    position: new THREE.Vector3(0, 0, -6),
    rotationSpeed: 0.1,
    tilt: new THREE.Euler(Math.PI / -20, 1.6, Math.PI / 10),
    scale: new THREE.Vector3(1.2, 1.2, 1.2),
    pixelRatio: 0.8,
    focusDistance: 0.004,
    focalLength: 0.009,
    scrollWithPage: true,
    scrollStart: 700,
  },
  {
    pixel: 1000,
    position: new THREE.Vector3(5, -0.5, -7),
    rotationSpeed: -0.1,
    tilt: new THREE.Euler(Math.PI / 2, 0, Math.PI / 8),
    scale: new THREE.Vector3(1, 1, 1),
    pixelRatio: 0.45,
    focusDistance: 0.0008,
    focalLength: 0.007,
    scrollWithPage: false,
    scrollStart: 1000,
  },
  {
    pixel: 2900,
    position: new THREE.Vector3(2.1, -1.4, -6),
    rotationSpeed: 0,
    tilt: new THREE.Euler(Math.PI / 15, 0, Math.PI / 90),
    scale: new THREE.Vector3(1.1, 1.1, 1.1),
    pixelRatio: 0.9,
    focusDistance: 0.002,
    focalLength: 0.009,
    scrollWithPage: true,
    scrollStart: 4300,
  },
];

function SceneWrapper(props) {
  const { setDiamondColor } = props;
  const [presentationControlsState, setPresentationControlsState] =
    useState(false);
  const groupRef = useRef();
  const diamondRef = useRef();

  const { gl, invalidate } = useThree();
  const scroll = useScroll();

  const [scrollWithPage, setScrollWithPage] = useState(true);
  const scrollScaleFactor = 0.009; // скорость по которой положение диаманта будет двигаться вместе со скроллбаром

  let currentIndex = 0;

  useFrame((state, delta) => {
    const totalScrollHeight = 5395; // фактическая высота страницы
    // но тут есть баг, по какой-то причине при первой загрузки страницы высота не считается, не знаю, и тогда ключи pixel в keyframes срабатывают в неправильных местах пока я проскроллить полностью странницу до самого низа
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
    // если true, то позиция Y, указана в keyframes никак не влияет на положение

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

    // условия по ключам

    if (currentIndex === 0 || currentIndex === 1) {
      setDiamondColor(defaultModelColor); // сбрасываю цвет диаманта если его поменяли
      diamondRef.current.rotation.y += currentKeyframe.rotationSpeed * delta;
      setPresentationControlsState(false);
      invalidate();
    } else if (currentIndex === 2) {
      setPresentationControlsState(true);
      diamondRef.current.rotation.set(0, -0.2, 0); // сбрасываю все вращение что было до этого , но по Y -0.2 для того, чтобы диамант был чуть повернут к центру
      groupRef.current.rotation.y = 0;
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
      <group ref={diamondRef}>{props.children}</group>
    </group>
  );
}

// для создания глубины это верх

const FrontContent = () => {
  return (
    <Html zIndexRange={[9, 10]}>
      <div className="frontcontent">
        <div className="navigation">
          <a href="/lovedones"></a>
          <a href="/pets"></a>
        </div>
      </div>
    </Html>
  );
};

// это соответсвенно фон

const BackContent = () => {
  return (
    <Html zIndexRange={[-2, -1]}>
      <div className="backcontent">
        {/*<Banner />*/}
        No Content
      </div>
    </Html>
  );
};

const StickyContent = ({ onColorChange, onModelChange, models }) => {
  const handleColorClick = (color) => {
    onColorChange(color);
  };
  const handleModelChange = (model) => {
    onModelChange(model);
  };

  const ref = useRef();

  return (
    <group ref={ref}>
      <Html zIndexRange={[9, 10]}>
        <div className="stickycontent">
          <div className="model-btn">
            <button onClick={() => handleModelChange("d1/diamond.gltf")}>
              Model 1
            </button>
            <button onClick={() => handleModelChange("d2/diamond.gltf")}>
              Model 2
            </button>
            <button onClick={() => handleModelChange("d3/diamond.gltf")}>
              Model 3
            </button>
            <button onClick={() => handleModelChange("d4/diamond.gltf")}>
              Model 4
            </button>
            <button onClick={() => handleModelChange("d5/diamond.gltf")}>
              Model 5
            </button>
          </div>
          <div className="color-btn">
            <button onClick={() => handleColorClick("#BC5757")}>Red</button>
            <button onClick={() => handleColorClick("#BCA857")}>Yellow</button>
            <button onClick={() => handleColorClick("#77A258")}>Green</button>
            <button onClick={() => handleColorClick(defaultModelColor)}>
              White
            </button>
            <button onClick={() => handleColorClick("#54B2CD")}>Blue</button>
          </div>
        </div>
      </Html>
    </group>
  );
};

const Homepage = () => {
  const [currentModel, setCurrentModel] = useState("/d1/diamond.gltf");
  const [diamondColor, setDiamondColor] = useState(defaultModelColor);
  const handleColorChange = (color) => {
    setDiamondColor(color);
  };

  const [focusDistance, setFocusDistance] = useState(0.001);
  const [focalLength, setFocalLength] = useState(0.003);

  const handleKeyframeChange = (keyframe) => {
    setFocusDistance(keyframe.focusDistance);
    setFocalLength(keyframe.focalLength);
  };

  return (
    <>
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
        <Environment files="/env.hdr" />
        <PerspectiveCamera makeDefault />

        <EffectComposer multisampling={0}>
          <BrightnessContrast brightness={0} contrast={0.2} />
          <DepthOfField
            focusDistance={focusDistance}
            focalLength={focalLength}
            bokehScale={8}
            height={720}
          />
          <SMAA />
          <Bloom
            luminanceThreshold={1}
            intensity={0.3}
            luminanceSmoothing={0}
            levels={16}
            mipmapBlur={true}
          />
        </EffectComposer>

        <ScrollControls pages={1} damping={0}>
          <SceneWrapper
            setDiamondColor={setDiamondColor}
            onColorChange={setDiamondColor}
            setCurrentModel={setCurrentModel}
            onKeyframeChange={handleKeyframeChange}
          >
            <Suspense fallback={<Loader />}>
              <PresentationControls
                snap={true}
                zoom={0.7}
                polar={[0, Math.PI / 3]}
              >
                <Diamond
                  key={currentModel}
                  modelPath={currentModel}
                  color={diamondColor}
                  rotation={[0, 0, 0]}
                  scale={[1.4, 1.5, 1.4]}
                />
              </PresentationControls>
            </Suspense>
          </SceneWrapper>
          <Scroll>
            <FrontContent />
            <BackContent />
            <StickyContent
              onColorChange={handleColorChange}
              onModelChange={setCurrentModel}
            />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
};

export default Homepage;
