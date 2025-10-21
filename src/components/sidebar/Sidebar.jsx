import "./sidebar.scss";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  open: {
    clipPath: "circle(1000px at 50px 50px)",
    transition: { type: "spring", stiffness: 50 },
  },
  closed: {
    clipPath: "circle(25px at 50px 50px)",
    transition: { delay: 0.5, type: "spring", stiffness: 600, damping: 40 },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar flex flex-col items-center justify-center bg-[#fde2f3] text-black" animate={open ? "open" : "closed"}>
      <motion.div className="z-10 fixed top-0 left-0 bottom-0 w-[350px] bg-[#fde2f3]" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
