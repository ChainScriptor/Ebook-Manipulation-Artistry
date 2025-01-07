import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook } from 'lucide-react';

const ManipulationFooter = () => {
  return (
    <footer className="relative bg-black text-white py-16 overflow-hidden border-t border-red-900/30">
      

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center space-y-12">
          {/* Pulsing manipulation text */}
          <motion.div
            className="text-3xl font-bold bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent"
            animate={{
              textShadow: [
                "0 0 20px rgba(255,0,0,0.5)",
                "0 0 40px rgba(255,0,0,0.3)",
                "0 0 20px rgba(255,0,0,0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Κάνε Master Την Τέχνη Της Χειραγώγησης!
          </motion.div>

          {/* Social links */}
          <div className="flex space-x-12">
            {[
              { 
                Icon: Instagram, 
                label: 'Instagram',
                href: '#',
                gradient: 'from-purple-500 to-pink-500'
              },
              { 
                Icon: Facebook, 
                label: 'Facebook',
                href: '#',
                gradient: 'from-blue-500 to-blue-600'
              },
              { 
                label: 'TikTok',
                href: '#',
                gradient: 'from-black to-gray-800',
                customIcon: (
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 014.07-4.07v-3.5a6.37 6.37 0 00-3.35.9 6.34 6.34 0 00-3.36 5.58A6.34 6.34 0 0011.35 22a6.34 6.34 0 006.34-6.34v-5.23a8.16 8.16 0 004.77 1.52v-3.45a4.85 4.85 0 01-2.87-1.81z"/>
                  </svg>
                )
              }
            ].map(({ Icon, customIcon, label, href, gradient }) => (
              <motion.a
                key={label}
                href={href}
                className={`relative p-4 rounded-lg bg-gradient-to-r ${gradient} group`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {Icon ? <Icon className="w-6 h-6" /> : customIcon}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-white/20"
                  initial={{ scale: 1 }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.a>
            ))}
          </div>

          {/* Chess pieces as psychological warfare symbols */}
          <div className="flex justify-center space-x-8">
            {['♟', '♞', '♝', '♜', '♛', '♚'].map((piece, index) => (
              <motion.div
                key={index}
                className="text-4xl opacity-50"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              >
                {piece}
              </motion.div>
            ))}
          </div>

          {/* Mysterious message */}
          <motion.p 
            className="text-sm text-white/60 italic"
            animate={{
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Κάθε κίνηση είναι υπολογισμένη!
          </motion.p>

          {/* Copyright with glitch effect */}
          <motion.div 
            className="text-sm text-white/40"
            animate={{
              x: [-1, 1, -1, 1, 0],
              transition: {
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 5
              }
            }}
          >
            © 2024 Art of Manipulation. All rights reserved.
          </motion.div>
        </div>
      </div>

      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
        animate={{
          backgroundPosition: ['200% 0', '-200% 0']
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </footer>
  );
};

export default ManipulationFooter;