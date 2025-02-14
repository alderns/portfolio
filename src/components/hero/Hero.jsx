import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 12,
    transition: { duration: 3, repeat: Infinity },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>ALDRIN DE LEON</motion.h2>
          <motion.h1 variants={textVariants}>Full Stack Web Developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.a href="#Contact">Contact Me</motion.a>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/images/scroll.png" alt=""></motion.img>
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Angular ReactJS ASP.Net NodeJS Tailwind C#
      </motion.div>
      <div className="imageContainer"></div>
    </div>
  );
};

export default Hero;
