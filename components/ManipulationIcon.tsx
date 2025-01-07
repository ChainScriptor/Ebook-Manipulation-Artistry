"use client";

import { motion } from "framer-motion";

export const ManipulationIcon = () => {
  return (
    <motion.div 
      className="relative w-48 h-48"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="absolute inset-0"
        animate={{ 
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative">
            {/* First figure */}
            <motion.div 
              className="w-16 h-32 bg-white/20 rounded-full relative"
              animate={{ x: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-full absolute -top-2 left-1/2 transform -translate-x-1/2" />
              <div className="w-8 h-4 bg-white/30 rounded-full absolute top-3 left-1/2 transform -translate-x-1/2" />
            </motion.div>
            {/* Second figure with arrow */}
            <motion.div 
              className="w-16 h-32 bg-white/20 rounded-full absolute left-20 top-0"
              animate={{ x: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-full absolute -top-2 left-1/2 transform -translate-x-1/2" />
              <motion.div 
                className="w-8 h-4 bg-white/30 rounded-full absolute top-3 left-1/2 transform -translate-x-1/2"
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};