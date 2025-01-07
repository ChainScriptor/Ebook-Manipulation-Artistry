"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Book, Brain, Lock, Sparkles } from "lucide-react";
import { useRef } from "react";
import im1 from "@/public/ebook.png";
import Image from "next/image";
export function EbookPurchase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="py-18 pb-28 relative">
      <motion.div
        style={{ scale, opacity }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Book Preview */}
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="glass-card aspect-[3/4] relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
                {/* <Book className="w-16 h-16 mb-6" /> */}
                <Image src={im1} alt="baby" width={400} height={200} className="mt-10" />
                <h3 className="text-2xl font-bold text-center mb-4 mt-4">
                  Η τέχνη της χειραγώγησης
                </h3>
                <div className="flex gap-4 mb-6">
                  {[Brain, Lock, Sparkles].map((Icon, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.2 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Purchase Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <h2 className="text-4xl font-bold text-glow">
                Αποκτήστε Πρόσβαση Τώρα
              </h2>
              <p className="text-xl text-white/80">
                Ανακαλύψτε τα μυστικά της ανθρώπινης ψυχολογίας και της επιρροής
              </p>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <feature.icon className="w-5 h-5 text-blue-400" />
                  <span>{feature.text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">20.00€</span>
                <span className="text-white/60">εφάπαξ</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full glass-card py-4 px-8 text-lg font-bold bg-gradient-to-r from-blue-500/50 to-purple-500/50 hover:from-blue-500/60 hover:to-purple-500/60 transition-colors"
              >
                Αγορά Τώρα
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

const features = [
  { icon: Brain, text: "Αναλυτικές τεχνικές ψυχολογικής κατανόησης" },
  { icon: Lock, text: "Προστασία από τεχνικές χειραγώγησης" },
  { icon: Sparkles, text: "Πρακτικές ασκήσεις και παραδείγματα" },
  { icon: Book, text: "Δια βίου πρόσβαση στο υλικό" },
];