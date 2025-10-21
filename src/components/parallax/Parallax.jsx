import "./parallax.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["-500%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);

  return (
    <div
      className="parallax h-full w-full relative flex items-center justify-center overflow-hidden"
      ref={ref}
      style={{
        background: type == "About" ? "linear-gradient(180deg, #2A2F4F, #917FB3)" : "linear-gradient(180deg, #917FB3, #E5BEEC)",
      }}
    >
      <motion.h1 className="text-[100px] font-bold text-[#fde2f3] leading-24 bg-cover bg-bottom" style={{ y: yText }}>{type == "About" ? "Hi, I'm Aldrin" : "What We Did?"}</motion.h1>
      <motion.div className="mountains w-full h-full absolute z-3 bg-cover bg-bottom"></motion.div>
      <motion.div className="planets w-full h-full absolute z-2 bg-cover bg-bottom" style={{ y: yBg, backgroundImage: `url(${type === "About" ? "/images/planets.png" : "/images/sun.png"})` }} ></motion.div>
      <motion.div className="stars w-full h-full absolute z-1 bg-cover bg-bottom" style={{ y: yBg, x: yBg }} ></motion.div>
    </div>
  );
};

export default Parallax;
