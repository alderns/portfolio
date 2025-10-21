import "./parallax.scss";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();
  const [isLightOn, setIsLightOn] = useState(true);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["-500%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);
  const xBg = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };

  return (
    <div
      className="parallax h-full w-full relative flex items-center justify-center overflow-hidden"
      ref={ref}
      style={{
        background: type == "About" ? "linear-gradient(180deg, #2A2F4F, #917FB3)" : "linear-gradient(180deg, #917FB3, #E5BEEC)",
      }}
    >
      <motion.h1 className="text-6xl font-bold text-[#fde2f3] leading-24 bg-cover bg-bottom z-4 pt-20" style={{ y: yText }}>{type == "About" ? "Hi, I'm Aldrin" : "What We Did?"}</motion.h1>
      <motion.div 
        className="foreground w-full h-full absolute z-5 bg-cover bg-bottom cursor-pointer" 
        onClick={toggleLight}
      ></motion.div>
      <motion.div className="computer w-full h-full absolute z-2 bg-cover bg-bottom" style={{ y: yBg, backgroundImage: `url(${type === "About" ? "/images/computer.png" : "/images/computer.png"})` }} ></motion.div>
      {/* <motion.div className="background w-full h-full absolute z-1 bg-cover bg-bottom" style={{ y: yBg, x: yBg }} ></motion.div> */}
      <motion.div 
        className="light w-full h-full absolute z-4 bg-cover bg-bottom"
        style={{ opacity: isLightOn ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      ></motion.div>
      <motion.div className="clock w-full h-full absolute z-1 bg-cover bg-bottom" style={{ y: yBg, x: yBg }} ></motion.div>
      <motion.div className="shelf-1 w-full h-full absolute z-1 bg-cover bg-bottom" style={{ y: yBg, backgroundImage: `url("/images/shelf-1.png"})` }} ></motion.div>
      <motion.div className="shelf-2 w-full h-full absolute z-1 bg-cover bg-bottom" style={{ y: yBg, x: xBg }} ></motion.div>
      <motion.div className="calendar w-full h-full absolute z-1 bg-cover bg-bottom" style={{ x: xBg }} ></motion.div>
    </div>
  );
};

export default Parallax;
