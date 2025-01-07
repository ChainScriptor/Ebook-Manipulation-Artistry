'use client';
import Image from 'next/image';
import { motion } from "framer-motion";
import { Play, Skull,Hand, AlertTriangle,BookKey} from "lucide-react"; // Εικονίδια από Lucide
import im1 from "@/public/manipulation.png";
import FloatingMessages from './FloatingMessage';
export default function SquidGameAnimations() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-red-600 flex justify-center items-center py-16 space-x-20 shadow-md border-b-4 border-t-2">
        
        <div className="flex flex-col w-80 text-xl">
            <h1>Η τέχνη της χειραγώγησης είναι η ικανότητα να κατανοείς και να επηρεάζεις τις ανθρώπινες συμπεριφορές με υπευθυνότητα και σεβασμό. Σε αυτό το ebook, θα μάθεις στρατηγικές που θα ενισχύσουν τις σχέσεις σου, θα σε βοηθήσουν να επικοινωνείς αποτελεσματικά και να επηρεάζεις θετικά τις καταστάσεις γύρω σου. Ανακάλυψε πώς να χρησιμοποιείς την επιρροή με γνώση και ηθική, οδηγώντας σε επιτυχία και προσωπική ανάπτυξη.</h1>
        </div>
      <div className="flex flex-col items-center space-y-12">
        {/* Squid Game Inspired Start */}
        
        <motion.div
          className="flex flex-col items-center bg-black text-white rounded-xl shadow-lg p-6 border-4 border-gradient-to-r from-[#ff0000] to-[#ff5555] w-80"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
        >
          <AlertTriangle className="text-6xl mb-4 text-yellow-400" />
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
          >
            <p className="text-xl font-bold">Είσαι Έτοιμος;</p>
          </motion.div>
        </motion.div>

        {/* Animation with Flash effect */}
        <motion.div
          className="flex flex-col items-center bg-black text-white rounded-xl shadow-lg p-6 border-4 border-gradient-to-r from-[#ff0000] to-[#ff5555] w-80"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <motion.div
            animate={{
              opacity: [0, 1, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <Hand className="text-6xl mb-4 text-white" />
            <p className="text-xl font-bold">Να λάβεις...</p>
          </motion.div>
        </motion.div>

        {/* Animation with Pulse Effect */}
        <motion.div
          className="flex flex-col items-center bg-black text-white rounded-xl shadow-lg p-6 border-4 border-gradient-to-r from-[#ff0000] to-[#ff5555] w-80"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 0.5,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <BookKey className="text-4xl mb-4 text-green-500" />
            <p className="text-xl font-bold">Τις γνώσεις που θα σε οδηγήσουν εκεί ακριβώς που θέλεις;;;</p>
          </motion.div>
        </motion.div>
      </div>
      <div className='flex flex-col'>
        <FloatingMessages />
      <Image src={im1} alt="Description" width={400} height={200} className=''/>
      </div>
    </div>
  );
}
