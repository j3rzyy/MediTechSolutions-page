"use clinet";
import { useEffect, useState } from "react";

export const getWindowSize = () => {
  const [size, setSize] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSize([window.innerWidth, window.innerHeight]);

      const resizeHandler = () =>
        setSize([window.innerWidth, window.innerHeight]);
      window.addEventListener("resize", resizeHandler);
      return () => window.removeEventListener("resize", resizeHandler);
    }
  }, []);

  return size;
};
