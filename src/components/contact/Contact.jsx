import "./contact.scss"
import { motion } from "framer-motion";

const variants = {
    initial: {
        y:500,
        opacity: 0,
    },
    animate: {
        y:0,
        opacity: 1,
        transition:{
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
}

const Contact = () => {
  return (
    <motion.div className="contact" variants={variants} initial="initial" animate="animate">
        <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Let's Work Together</motion.h1>
            <motion.div variants={variants} className="item">
                <h2>Mail</h2>
                <span>aldrinius@gmail.com</span>
            </motion.div>
            <motion.div variants={variants} className="item">
                <h2>Address</h2>
                <span>Malolos, Bulacan</span>
            </motion.div>
            <motion.div variants={variants} className="item">
                <h2>Phone</h2>
                <span>+63 936 721 6221</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <form>
                <input type="text" required placeholder="Name"></input>
                <input type="email" required placeholder="Email"></input>
                <textarea rows={8} placeholder="Message" />
                <button type="submit">Submit</button>
            </form>
        </div>
    </motion.div>
  )
}

export default Contact