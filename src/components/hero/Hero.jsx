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
    <div className="overflow-hidden relative h-full bg-gradient-to-b from-[#2a2f4f] to-[#242844] pt-10">
      <div className="wrapper max-w-[1280px] h-full mx-auto select-none">
        <motion.div className="w-1/2 h-full flex flex-col justify-center gap-10 relative z-2" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 className="text-3xl tracking-[10px] text-neutral-200" variants={textVariants}>ALDRIN DE LEON</motion.h2>
          <motion.h1 className="text-[88px] font-bold text-[#fde2f3]" variants={textVariants}>Full Stack Web Developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.a className="text-white py-3 px-5 border border-white rounded-xl cursor-pointer" href="#Contact">Contact Me</motion.a>
          </motion.div>
          <motion.img className="w-12" variants={textVariants} animate="scrollButton" src="/images/scroll.png" alt=""></motion.img>
        </motion.div>
      </div>
      <motion.div className="absolute text-[50vh] bottom-[-120px] text-[#ffffff09] whitespace-nowrap font-bold w-1/2 z-1 select-none" variants={sliderVariants} initial="initial" animate="animate">
        Angular ReactJS Tailwind JavaScript Frontend Backend
      </motion.div>
      <div className="h-full absolute top-0 right-0"></div>
    </div>
  );
};

export default Hero;
