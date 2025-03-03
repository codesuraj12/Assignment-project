import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const Background = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [-5, 5]); // Slight rotation on Y-axis
  const rotateY = useTransform(x, [-50, 50], [-5, 5]); // Slight rotation on X-axis

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (e.clientX / innerWidth) * 100 - 50; 
      const offsetY = (e.clientY / innerHeight) * 100 - 50;

      x.set(offsetX);
      y.set(offsetY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <motion.video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="/src/assets/vid.mp4"
        style={{
          rotateX,
          rotateY,
        }}
      />
    </div>
  );
};

export default Background;
