"use client";

import { motion } from "framer-motion";
import { Brain, Heart, Target, Users, Shield, Zap } from "lucide-react";

const stages = [
  {
    icon: Heart,
    title: "Συναισθηματική Σύνδεση",
    description: "Δημιουργία ισχυρών συναισθηματικών δεσμών και εμπιστοσύνης.",
    gradient: "from-purple-500/20 to-blue-500/20"
  },
  {
    icon: Target,
    title: "Απομόνωση",
    description: "Σταδιακή απομάκρυνση από υποστηρικτικά δίκτυα.",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Zap,
    title: "Εξάρτηση",
    description: "Καλλιέργεια συναισθηματικής και ψυχολογικής εξάρτησης.",
    gradient: "from-cyan-500/20 to-emerald-500/20"
  }
];

const advancedStages = [
  {
    icon: Users,
    title: "Κοινωνικός Έλεγχος",
    description: "Έλεγχος κοινωνικών σχέσεων και επιρροών.",
    nodes: ["Απομόνωση", "Έλεγχος", "Χειραγώγηση"]
  },
  {
    icon: Shield,
    title: "Ψυχολογική Άμυνα",
    description: "Τεχνικές αναγνώρισης και προστασίας από χειραγώγηση.",
    nodes: ["Αναγνώριση", "Προστασία", "Ανάκαμψη"]
  }
];

export function ManipulationStages() {
  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-12 border-b-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stages.map((stage, index) => (
          <motion.div
            key={stage.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`glass-card relative overflow-hidden bg-gradient-to-br ${stage.gradient}`}
          >
            <stage.icon className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">{stage.title}</h3>
            <p className="text-white/70">{stage.description}</p>
            <motion.div
              className="absolute -bottom-2 -right-2 w-24 h-24 bg-white/5 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {advancedStages.map((stage, index) => (
          <motion.div
            key={stage.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.2 }}
            className="glass-card relative"
          >
            <stage.icon className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-4">{stage.title}</h3>
            <p className="text-white/70 mb-4">{stage.description}</p>
            <div className="flex gap-2">
              {stage.nodes.map((node, i) => (
                <motion.span
                  key={node}
                  className="px-3 py-1 rounded-full bg-white/10 text-sm"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  {node}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}