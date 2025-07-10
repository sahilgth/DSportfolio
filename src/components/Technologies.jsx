import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiNumpy } from "react-icons/si";
import { SiKaggle } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10},
  animate: {
      y: [10, -10],
      transition: {
         duration: duration,
         ease: "linear",
         repeat: Infinity,
         repeatType: "reverse",
       }, 
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
         whileInView={{opacity:1, y:0}}
         initial={{opacity:0, y:-100}}
         transition={{duration: 0.5 }}
         whileHover={{ scale: 1.2 }}whileTap={{ scale: 1.1 }}drag="x" dragConstraints={{ left: -100, right: 100 }} className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:1.5 }}
          className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 text-orange-500 border-neutral-800 p-4 mt-4"
                > Jupyter
                <SiJupyter className="text-7xl mt-4" />
            </motion.div>
            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
                > Pandas
                
                <SiPandas className="text-7xl text-sky-700 mt-4" />
            </motion.div>
            <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
                > Numpy
                <SiNumpy className="text-7xl text-blue-500 mt-4" />
            </motion.div>
            <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
                > Scikit learn
                <SiScikitlearn className="text-7xl text-yellow-500 mt-4" />
            </motion.div>
            
            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
                > Kaggle
                <SiKaggle className="text-7xl text-red-700 mt-4" />
            </motion.div>
            <motion.div 
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
              > React-js
                <RiReactjsLine className="text-7xl text-cyan-400 mt-4" />
            </motion.div>
            <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
                > JavaScript
                <SiJavascript className="text-7xl text-yellow-500 mt-4" />
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Technologies