import { useRef } from "react";
import "./about.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const textVariants = {
  initial: {
    x: -300,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const items = [
  {
    id: 1,
    title: "Profile",
    img: "/images/frontend.png",
    desc: "Competent web developer with over four years of experience working on various projects. Knowledgeable in a variety of front-end and back-end programming languages, with the ability to carry out projects from design to conclusion. Searching for new possibilities to broaden my skill set and support the growth of the company.",
  },
  {
    id: 2,
    title: "Frontend",
    img: "/images/frontend.png",
    desc: "Competent web developer with over four years of experience working on various projects. Knowledgeable in a variety of front-end and back-end programming languages, with the ability to carry out projects from design to conclusion. Searching for new possibilities to broaden my skill set and support the growth of the company.",
  },
  {
    id: 3,
    title: "Backend",
    img: "/images/backend.png",
    desc: "Competent web developer with over four years of experience working on various projects. Knowledgeable in a variety of front-end and back-end programming languages, with the ability to carry out projects from design to conclusion. Searching for new possibilities to broaden my skill set and support the growth of the company.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  return (
    <section>
      <div className="container flex items-center justify-center w-full h-full">
        <div className="wrapper max-w-[1280px] h-full mx-auto select-none flex items-center justify-center gap-[50px]">
          <div className="imageContainer flex-5 h-[40%]" ref={ref}>
            <img className="rounded-3xl w-full h-full object-cover" src={item.img} alt="" />
          </div>
          <motion.div className="textContainer flex-7 flex flex-col gap-4" style={{ y }}>
            <h2 className="text-7xl font-bold text-[#e5beec]">{item.title}</h2>
            <p className="text-lg text-[#fde2f3]">{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 40,
  });
  return (
    <div className="relative bg-gradient-to-b from-[#2a2f4f] to-[#242844] " ref={ref}>
      <div className="sticky top-0 py-[25px] flex items-center justify-center">
        <motion.div style={{ scaleX }} className="h-[1px] bg-[#fde2f3] w-[90%]"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
      <div className="sticky bottom-0 py-[25px] flex items-center justify-center">
        <motion.div style={{ scaleX }} className="h-[1px] bg-[#fde2f3] w-[90%]"></motion.div>
      </div>
    </div>
  );
};

export default About;
