import React from 'react'
import { motion } from "framer-motion";

const Button = ({title}) => {
  return (
    <>
 <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "#ffffff", color: "#16a34a" }} // Scale up and change color on hover
      whileTap={{ scale: 0.95 }} // Slight shrink on click
      transition={{ type: "spring", stiffness: 300 }}
      className=" text-lg font-semibold sm:text-base md:text-sm bg-green-500 mt-9 px-8 py-2 rounded-lg transition-colors duration-300 ease-in-out"
    >
      {title}
    </motion.button>
 
    </>
  )
}

export default Button