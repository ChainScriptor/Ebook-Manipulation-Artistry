import React from 'react';
import { motion } from 'framer-motion';

const messages = [
    "Εσύ φταις για όλα",
    "Αν δεν με ακούς, θα αποτύχεις",
    "Δεν έχεις ιδέα τι κάνεις",
    "Όλοι σε βλέπουν σαν αποτυχία",
    "Δεν αξίζεις τίποτα",
    "Είναι όλα δικό σου λάθος",
    "Εγώ ξέρω καλύτερα",
  ];

const FloatingMessages = () => {
  return (
    <div className="relative w-[400px] h-[200px] mb-4 overflow-hidden">
      {messages.map((message, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{ 
            x: -100,
            y: Math.random() * 150,
            opacity: 0 
          }}
          animate={{
            x: 400,
            y: Math.random() * 150,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: index * 3,
            ease: "linear"
          }}
        >
          <motion.div
            className="relative px-4 py-2 rounded-3xl text-white/80 text-sm font-medium whitespace-nowrap"
            style={{
              background: "linear-gradient(45deg, rgba(0,0,0,0.8), rgba(128,0,0,0.8))"
            }}
            animate={{
              background: [
                "linear-gradient(45deg, rgba(0,0,0,0.8), rgba(128,0,0,0.8))",
                "linear-gradient(45deg, rgba(128,0,0,0.8), rgba(0,0,0,0.8))",
                "linear-gradient(45deg, rgba(0,0,0,0.8), rgba(128,0,0,0.8))"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Cloud shape using pseudo-elements */}
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-inherit" />
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-inherit" />
            {message}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingMessages;