import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar absolute top-0 left-0 w-full z-10 h-[100px]">
      <Sidebar />
      <div className="max-w-[1280px] h-full mx-auto select-none flex items-center justify-between">
        <motion.span className="font-bold text-[#fde2f3]" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          drinius
        </motion.span>
        <div className="flex gap-5">
          <a href="#">
            <img className="w-7 h-7" src="/images/facebook.png" alt=""></img>
          </a>
          <a href="#">
            <img className="w-7 h-7" src="/images/instagram.png" alt=""></img>
          </a>
          <a href="#">
            <img className="w-7 h-7" src="/images/linkedin.png" alt=""></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
