import { useEffect, useRef } from "react";

export default function useControlWindow() {
  const screenSize = useRef();

  useEffect(() => {
    window?.addEventListener("resize", () => {
      screenSize.current = window.innerWidth;
    });
    return () => {
      window?.removeEventListener("resize", () => {
        screenSize.current = window.innerWidth;
      });
    };
  }, []);

  return { screenSize: screenSize.current >= 768 };
}
