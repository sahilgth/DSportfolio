import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y:-100}}
          transition={{duration: 0.5 }}
          whileHover={{ scale: 1.2 }}whileTap={{ scale: 1.1 }}drag="x" dragConstraints={{ left: -100, right: 100 }}
          className="my-10 text-center text-4xl">Get in Touch</motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p 
               whileInView={{opacity:1, x:0}}
               initial={{opacity:0, x: -100}}
               transition={{duration:0.8 }}
              className="my-4">{CONTACT.address}</motion.p>
            <motion.p 
             whileInView={{opacity:1, x:0}}
             initial={{opacity:0, x: 100}}
             transition={{duration:1}}
             className="my-4">{CONTACT.phoneNo}</motion.p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shahil91287@gmail.com" className="border-b">
                {CONTACT.email}
            </a> 
        </div>
    </div>
  )
}

export default Contacts