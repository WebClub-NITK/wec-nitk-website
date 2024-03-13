'use client'

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function HorizontalScrollCarousel({ children }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative w-screen h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
            {children}
        </motion.div>
      </div>
    </section>
  );
}
