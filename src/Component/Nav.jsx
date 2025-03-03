import React from 'react'
import { useState } from 'react';
import { motion } from "framer-motion";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const text = "Helperimmerse".split("");
  return (
    <nav className="bg-transparent  top-0 z-50 text-white p-4 flex  items-center justify-between  relative w-full">

        <h1 className="text-2xl md:text-3xl font-bold text-green-500 ">
          {text.map((leter, index)=>(
            <motion.span key={index} 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.2 }}
            >
            {leter}
            </motion.span>
          ))}
          </h1>

        <motion.button
        className="md:hidden text-white text-3xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        animate={{ rotate: menuOpen ? 180 : 0 }} 
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {menuOpen ? "✖" : "☰"}
      </motion.button>

        <ul
       
        className={`md:flex space-x-4 absolute md:static top-16 left-0  bg-slate-950  gap-12 md:bg-transparent flex-col md:flex-row p-4 md:p-0 transition-transform duration-300 ${
          menuOpen ? "flex" : "hidden"
        }` } >
           {["Home", "Services", "Expertise", "About", "Contact"].map((item, index) => (
    <motion.li
      key={index}
      className="relative group text-white text-lg cursor-pointer transition-transform duration-300"
      whileHover={{ scale: 1.1 }} 
      transition={{ duration: 0.2 }}
    >
      <a href={`#${item.toLowerCase()}`} className="hover:text-green-400 transition-colors duration-300">
        {item}
      </a>

     
      <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
    </motion.li>
  ))}
        </ul>
      </nav>
  )
}

export default Nav