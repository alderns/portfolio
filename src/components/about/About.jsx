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
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
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
    <div className="about" ref={ref}>
      <div className="progress1">
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
      <div className="progress2">
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
    </div>
  );
};

export default About;
