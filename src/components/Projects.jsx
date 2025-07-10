import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
           whileInView={{opacity:1, y:0}}
           initial={{opacity:0, y:-100}}
           transition={{duration: 0.5 }}
           whileHover={{ scale: 1.2 }}whileTap={{ scale: 1.1 }}drag="x" dragConstraints={{ left: -100, right: 100 }}
           className="my-20 text-center text-4xl">Projects</motion.h2>
        {PROJECTS.map ((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div 
                   whileInView={{opacity:1, x:0}}
                   initial={{opacity:0, x: -100}}
                   transition={{duration:0.6 }}
                   className="w-full lg:w-1/4">
                   <img src={project.image} 
                   width={150}
                   height={150}
                    alt={project.title} 
                    className="mb-6 rounded"
                    />  
            
                </motion.div>
                <motion.div 
                     whileInView={{opacity:1, x:0}}
                     initial={{opacity:0, x: 100}}
                     transition={{duration:0.8}}
                     className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <a href="https://sahilgth.github.io/Portfolio/"> 
                    < h6 className="mb-2 font-semibold">{project.title3}</h6> 
                    </a>
                    <a href="https://ai-image-generator-shahil.netlify.app/">
                    < h6 className="mb-2 font-semibold">{project.title4}</h6>
                    </a> 
                    <a href="https://weather-shahil.netlify.app/">
                    < h6 className="mb-2 font-semibold">{project.title2}</h6>
                    </a>
                    <a href="https://outfit-check.netlify.app/">
                    < h6 className="mb-2 font-semibold">{project.title1}</h6>
                    </a> 
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medim text-purple-700">{tech}</span>
                    ))}
                </motion.div>
            </div>
        ))}
    </div>
  )
}

export default Projects