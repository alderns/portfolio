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
    <motion.div className="max-w-[1280px] h-full mx-auto select-none flex items-center justify-center gap-[50px]" variants={variants} initial="initial" animate="animate">
        <motion.div className="flex-1 flex flex-col gap-[40px]" variants={variants}>
            <motion.h1 className="text-[100px] font-bold text-[#e5beec] leading-24" variants={variants}>Let's Work Together</motion.h1>
            <motion.div variants={variants} className="item">
                <h2>Mail</h2>
                <span className="text-md font-light text-[#fde2f3]">aldrinius@gmail.com</span>
            </motion.div>
            <motion.div variants={variants} className="item">
                <h2>Address</h2>
                <span className="text-md font-light text-[#fde2f3]">Malolos, Bulacan</span>
            </motion.div>
            <motion.div variants={variants} className="item">
                <h2>Phone</h2>
                <span className="text-md font-light text-[#fde2f3]">+63 936 721 6221</span>
            </motion.div>
        </motion.div>
        <div className="flex-1">
            <form className="flex flex-col gap-5">
                <input className="w-full p-5 border bg-transparent border-white rounded-md" type="text" required placeholder="Name"></input>
                <input className="w-full p-5 border bg-transparent border-white rounded-md" type="email" required placeholder="Email"></input>
                <textarea className="w-full p-5 border bg-transparent border-white rounded-md" rows={8} placeholder="Message" />
                <button className="w-full p-5 bg-[#ff4500] cursor-pointer font-medium text-white rounded-md" type="submit">Submit</button>
            </form>
        </div>
    </motion.div>
  )
}

export default Contact