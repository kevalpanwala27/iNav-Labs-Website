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
    rest: { scale: 1, borderColor: "transparent" },
    hover: { scale: 1.1, borderColor: "" },
  };
  return (
    <header className="flex justify-between p-6 m-5">
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="company logo"
          className="md:w-10 md:h-10 w-6 h-6 rounded-2xl"
        />
        <div>
          <span className="font-semibold md:text-3xl text-xl text-green-500 tracking-wider font-LexendDeca">
            i
          </span>
        </div>
        <span className="font-semibold md:text-3xl text-xl tracking-widest font-LexendDeca">
          NAV LABS
        </span>
      </div>
      <div className="md:flex hidden md:visible gap-10 border border-gray-400 px-10 rounded-full shadow-md shadow-gray-200 items-center bg-stone-100">
        <motion.div
          variants={navItemVariants}
          whileHover="hover"
          initial="rest"
          className="hover:bg-gray-200 border hover:border-gray-500 rounded-full cursor-pointer transition-all duration-300 px-4 font-LexendDeca tracking-widest"
        >
          <a className="text-sm" href="#home">
            HOME
          </a>
        </motion.div>
        <motion.div
          variants={navItemVariants}
          whileHover="hover"
          initial="rest"
          className="hover:bg-gray-200 border hover:border-gray-500 rounded-full cursor-pointer transition-all duration-300 px-4 font-LexendDeca tracking-widest"
        >
          <a href="#service" className="text-sm">
            SERVICES
          </a>
        </motion.div>
        <motion.div
          variants={navItemVariants}
          whileHover="hover"
          initial="rest"
          className="hover:bg-gray-200 border hover:border-gray-500 rounded-full cursor-pointer transition-all duration-300 px-4 font-LexendDeca tracking-widest"
        >
          <a href="#Whatwedo" className="text-sm">
            ABOUT US
          </a>
        </motion.div>
        <motion.div
          variants={navItemVariants}
          whileHover="hover"
          initial="rest"
          className="hover:bg-gray-200 border hover:border-gray-500 rounded-full cursor-pointer transition-all duration-300 px-4 font-LexendDeca tracking-widest"
        >
          <a className="text-sm" href="#team">
            OUR TEAM
          </a>
        </motion.div>
        <motion.div
          variants={navItemVariants}
          whileHover="hover"
          initial="rest"
          className="hover:bg-gray-200 border hover:border-gray-500 rounded-full cursor-pointer transition-all duration-300 px-4 font-LexendDeca tracking-widest"
        >
          <a className="text-sm" href="#contactus">
            CONTACT US
          </a>
        </motion.div>
      </div>
      <div className="md:hidden">
        <button onClick={toggleNav} className="cursor-pointer px-4">
          <FiAlignJustify />
        </button>
      </div>
    </header>
  );
};

export default Nav;
