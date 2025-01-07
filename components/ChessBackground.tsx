"use client";

import { motion } from "framer-motion";

const ChessBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Chessboard Grid */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
        {[...Array(64)].map((_, i) => {
          const row = Math.floor(i / 8);
          const col = i % 8;
          const isWhite = (row + col) % 2 === 0;
          
          return (
            <div
              key={i}
              className={`${
                isWhite ? 'bg-white/[0.02]' : 'bg-white/[0.05]'
              } border border-white/[0.02]`}
            />
          );
        })}
      </div>

      {/* Animated Chess Pieces */}
      <motion.div
        className="absolute w-16 h-16"
        initial={{ x: "0%", y: "0%" }}
        animate={{
          x: ["0%", "100%", "100%", "0%", "0%"],
          y: ["0%", "0%", "100%", "100%", "0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full text-white/20">
          <path
            fill="currentColor"
            d="M19 22H5v-2h14v2M17.16 8.26A8.94 8.94 0 0 1 19 13c0 2.76-1.34 5.19-3.37 6.77C16.46 19.28 17 18.2 17 17c0-2.21-1.79-4-4-4h-2c-2.21 0-4 1.79-4 4 0 1.2.54 2.28 1.37 2.77C6.34 18.19 5 15.76 5 13c0-1.75.57-3.35 1.51-4.66L12 1l5.16 7.26M12 3.25L8.26 8.5c.58-.23 1.21-.35 1.87-.35h3.74c.66 0 1.29.12 1.87.35L12 3.25Z"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute w-16 h-16"
        initial={{ x: "100%", y: "100%" }}
        animate={{
          x: ["100%", "0%", "0%", "100%", "100%"],
          y: ["100%", "100%", "0%", "0%", "100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full text-white/20">
          <path
            fill="currentColor"
            d="M12 2c-1.1 0-2 .9-2 2 0 .7.4 1.4 1 1.7V7h-1c-1.1 0-2 .9-2 2v2.7c-.6.3-1 1-1 1.7 0 1.1.9 2 2 2h1v2.7c-.6.3-1 1-1 1.7 0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2 0-.7-.4-1.4-1-1.7V15h1c1.1 0 2-.9 2-2 0-.7-.4-1.4-1-1.7V9c0-1.1-.9-2-2-2h-1V5.7c.6-.3 1-1 1-1.7 0-1.1-.9-2-2-2h-2Z"
          />
        </svg>
      </motion.div>

      {/* Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }}
      />
    </div>
  );
};

export default ChessBackground;