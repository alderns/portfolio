import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          drinius
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/images/facebook.png" alt=""></img>
          </a>
          <a href="#">
            <img src="/images/instagram.png" alt=""></img>
          </a>
          <a href="#">
            <img src="/images/linkedin.png" alt=""></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
