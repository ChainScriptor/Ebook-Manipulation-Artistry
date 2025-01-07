'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Home, Gamepad, Skull, Award } from 'lucide-react';

export default function TopMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation for each letter in the title
  const letterVariants = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 30,
        staggerChildren: 0.05, // Stagger the animations of each letter
      },
    },
  };

  const letterChildVariants = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative">
        
      {/* Hamburger Icon */}
      <motion.h1
        className="pb-10 bg-black text-center text-3xl pt-10"
        variants={letterVariants}
        initial="initial"
        animate="animate"
      >
        {'Artistry Of Manipulation'.split('').map((letter, index) => (
          <motion.span
            key={index}
            variants={letterChildVariants}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      <div className="fixed top-5 right-5 z-50">
        <motion.div
          onClick={toggleMenu}
          className="cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Menu className="text-white text-3xl" />
        </motion.div>
      </div>

      {/* Side Menu */}
      <motion.div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white p-6 transition-transform ${isMenuOpen ? 'transform-none' : 'transform translate-x-full'}`}
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="flex flex-col items-start space-y-8">
          <motion.div
            className="flex items-center space-x-4 cursor-pointer"
            whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgba(255, 255, 255, 0.7)' }}
          >
            <Home className="text-4xl" />
            <p className="text-lg">Αρχική</p>
          </motion.div>
          
          <motion.div
            className="flex items-center space-x-4 cursor-pointer"
            whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgba(255, 255, 255, 0.7)' }}
          >
            <Gamepad className="text-4xl" />
            <p className="text-lg">Παιχνίδι</p>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4 cursor-pointer"
            whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgba(255, 255, 255, 0.7)' }}
          >
            <Skull className="text-4xl" />
            <p className="text-lg">Χειραγώγηση</p>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4 cursor-pointer"
            whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgba(255, 255, 255, 0.7)' }}
          >
            <Award className="text-4xl" />
            <p className="text-lg">Βραβεία</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
