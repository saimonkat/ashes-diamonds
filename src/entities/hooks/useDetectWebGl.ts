import { useEffect, useState } from "react";

export const useDetectWebGl = () => {
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    const supportsWebGL = !!(
      window.WebGLRenderingContext &&
      (document.createElement("canvas").getContext("webgl") ||
        document.createElement("canvas").getContext("experimental-webgl"))
    );
    setIsSupported(supportsWebGL);
  }, []);

  return { isSupported };
};
