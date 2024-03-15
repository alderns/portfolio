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
      className="parallax"
      ref={ref}
      style={{
        background: type == "About" ? "linear-gradient(180deg, #2A2F4F, #917FB3)" : "linear-gradient(180deg, #917FB3, #E5BEEC)",
      }}
    >
      <motion.h1 style={{ y: yText }}>{type == "About" ? "Hi, I'm Aldrin" : "What We Did?"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{ y: yBg, backgroundImage: `url(${type === "About" ? "/images/planets.png" : "/images/sun.png"})` }} className="planets"></motion.div>
      <motion.div style={{ y: yBg, x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
