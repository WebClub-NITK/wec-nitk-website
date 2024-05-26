import { useState, useEffect } from "react";

const useViewportWidth = () => {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const handleResize = () => {
        setViewportWidth(window.innerWidth);
      };

      // Set initial width
      handleResize();

      window.addEventListener("resize", handleResize);

      // Cleanup listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isClient]);

  return viewportWidth;
};

export default useViewportWidth;
