import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [windowSize, setWindowSize] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
