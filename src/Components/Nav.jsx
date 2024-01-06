import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo1.png";
import { FiAlignJustify } from "react-icons/fi";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navItemVariants = {
    hover: { scale: 1.1 },
  };

  return (
    <header className="flex justify-between p-6 m-5">
      <div className="flex items-center gap-2">
        {" "}
        
        <img src={logo} alt="company logo" className="w-14 h-14 rounded-2xl" />
        <div>
          <span className="font-bold text-3xl text-green-500 tracking-widest">
            i
          </span>
        </div>
        <span className="font-bold text-3xl tracking-widest">NAV LABS</span>
      </div>
      <div className="md:flex hidden md:visible gap-16 border border-gray-300 px-10 rounded-full shadow-md shadow-gray-200 items-center bg-stone-100">
        <motion.div
          variants={navItemVariants}
          whileHover="hover"
          className="hover:bg-gray-100 p-2 rounded-full cursor-pointer"
        >
          <a className="text-md" href="#home">Home</a>
        </motion.div>
        <motion.div
          variants={navItemVariants}
          whileHover="hover"
          className="hover:bg-gray-100 p-2 rounded-full cursor-pointer"
        >
          <a href="#service" className="text-md">Services</a>
        </motion.div>
        <motion.div
          variants={navItemVariants}
          whileHover="hover"
          className="hover:bg-gray-100 p-2 rounded-full cursor-pointer"
        >
          <a href="#Whatwedo" className="text-md">About Us</a>
        </motion.div>
        <motion.div
          variants={navItemVariants}
          whileHover="hover"
          className="hover:bg-gray-100 p-2 rounded-full cursor-pointer"
        >
          <a className="text-md" href="#team">Our Team</a>
        </motion.div>
        <motion.div
          variants={navItemVariants}
          whileHover="hover"
          className="hover:bg-gray-100 p-2 rounded-full cursor-pointer"
        >
          <a className="text-md" href="#contactus">Contact Us</a>
        </motion.div>
      </div>
      <div className="md:hidden">
        <button onClick={toggleNav} className="cursor-pointer">
          <FiAlignJustify />
        </button>
      </div>
    </header>
  );
};

export default Nav;
