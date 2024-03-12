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
    transition: { delay: 0.5, type: "spring", stiffness: 600, damping: 42 },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
