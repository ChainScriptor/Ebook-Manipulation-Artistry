'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Skull, Target, AlertCircle } from 'lucide-react';

export default function SquidGameAnimation() {
  const [isStarted, setIsStarted] = useState(false);

  const startGame = () => {
    setIsStarted(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-red-700 to-black text-white">
      {/* Start Button */}
      {!isStarted && (
        <motion.button
          onClick={startGame}
          className="bg-red-600 text-xl p-4 rounded-md mb-8 cursor-pointer hover:bg-red-700 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Αρχίστε το Παιχνίδι
        </motion.button>
      )}

      {/* Animation Section */}
      {isStarted && (
        <div className="relative flex flex-col items-center">
          <motion.div
            className="absolute top-0 left-0 right-0 flex justify-center items-center text-4xl mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <AlertCircle className="text-red-500" />
            <p className="ml-2">Προσοχή, το παιχνίδι ξεκινάει!</p>
          </motion.div>

          <motion.div
            className="flex items-center justify-center space-x-4 text-3xl"
            animate={{ x: [0, 20, -20, 0], rotate: [0, 360, 0], scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <motion.div
              className="p-4 rounded-full border-4 border-white"
              animate={{
                rotate: [0, 180, 0],
                scale: [1, 1.3, 1],
                borderColor: ['#ffffff', '#ff0000', '#ffffff'],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: 'easeInOut',
              }}
            >
              <Skull className="text-4xl" />
            </motion.div>
            <motion.div
              className="p-4 rounded-full border-4 border-white"
              animate={{
                rotate: [0, -180, 0],
                scale: [1, 1.3, 1],
                borderColor: ['#ffffff', '#00ff00', '#ffffff'],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: 'easeInOut',
              }}
            >
              <Target className="text-4xl" />
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-8 text-xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <p>Αντέξτε, η ένταση ανεβαίνει!</p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
