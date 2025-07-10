import logo from "../assets/slogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
// import { FaSquareXTwitter} from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
   <nav className="mb-20 flex items-centre justify-between py-6">
      <div className="flex flex-shrink-0 items-centre">
         <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shahil91287@gmail.com">
           <motion.img whileHover={{ scale: 1.2 }}whileTap={{ scale: 1.1 }}drag="x" dragConstraints={{ left: -100, right: 100 }} className="mx-2 w-12 h-10" src={logo} alt="logo" />
         </a> 
       </div>
       <div className="m-8 flex items-centre justify-centre gap-4 text-2xl" >
        <a href="https://www.linkedin.com/in/sahil928?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkZGhuszbSAy%2B1vImKOytmQ%3D%3D">
        <FaLinkedin />
        </a>
        <a href="https://github.com/sahilgth">
        <FaGithub />
        </a>
        <a href="https://leetcode.com/u/sahillfg/" >
        <SiLeetcode />
        </a>
        <a href="https://www.geeksforgeeks.org/user/sahillfg/">
        <SiGeeksforgeeks />
        </a>
       </div>
    </nav>
  ); 
};

export default Navbar
