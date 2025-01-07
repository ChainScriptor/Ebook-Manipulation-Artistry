'use client'; // Δηλώνει ότι το component είναι μόνο για τον πελάτη

import { ColorScroll } from "@/components/ColorScroll";
import { EbookPurchase } from "@/components/EbookPurchase";
import ChessBackground from "@/components/ChessBackground";
import { ManipulationStages } from "@/components/ManipulationStages";
import { motion } from "framer-motion";
import TopMenu from "@/components/TopMenu";
import ManipulationTricks from "@/components/ManipulationTricks";
import SquidGameAnimation from "@/components/GameAnimation";
import ManipulationFooter from "@/components/ManipulationFooter";

export default function Home() {
  return (
    <><TopMenu />
      <ManipulationTricks/>
      <ColorScroll />
      <ChessBackground />
      <main className="min-h-screen relative z-10">
        <section className="py-20">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center text-glow border-4 border-transparent hover:border-transparent hover:bg-gradient-to-r hover:from-[hsl(var(--deep-blue))] hover:to-[hsl(var(--accent-blue))] hover:bg-[length:200%_200%] hover:bg-[position:0%_0%] transition-all duration-500 ease-in-out"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Στάδια Χειραγώγησης
          </motion.h2>
          <ManipulationStages />
        </section>
        <EbookPurchase />
        <ManipulationFooter />
      </main>
    </>
  );
}
