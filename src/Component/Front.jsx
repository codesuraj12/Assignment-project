import React from 'react'
import { motion } from 'framer-motion'

const Front = () => {
  return (
    <div>
           <motion.h1
        className="hero-text text-[6vw] md:text-[5vw] lg:text-[4vw]  text-center text-green-400 font-bold whitespace-nowrap"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }} 
      >
        Next-Gen <motion.span
          className="inline-block text-white" 
          animate={{ y: [0, -5, 0, -5, 0] }} 
          transition={{
            repeat: Infinity, 
            repeatType: "reverse", 
            duration: 1.9,
            ease: "easeOut",
          }}
        >
          Technology
        </motion.span>{" "} Solutions
      </motion.h1>
      <motion.p
        className="hero-text text-white text-[4vw] md:text-[1.2rem] lg:text-[1.5rem] mx-auto whitespace-normal max-w-[50vw]"
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} 
      >
        Pushing the boundaries of what's possible with cutting-edge innovation and
        future-forward technology solutions.
      </motion.p>
    </div>
  )
}

export default Front