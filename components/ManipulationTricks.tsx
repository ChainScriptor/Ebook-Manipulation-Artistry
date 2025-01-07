'use client';
import { Hand, AlertTriangle, BookKey } from "lucide-react";
import FloatingMessages from "./FloatingMessage";
import im from "@/public/manipulation.png";
import Image from "next/image";
export default function SquidGameAnimations() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-red-600 border-b-4 border-t-2">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Text Section */}
          <div className="text-white p-6 rounded-xl bg-black/20 backdrop-blur">
            <h1 className="text-base md:text-lg lg:text-xl leading-relaxed">
              Η τέχνη της χειραγώγησης είναι η ικανότητα να κατανοείς και να επηρεάζεις τις ανθρώπινες συμπεριφορές με υπευθυνότητα και σεβασμό. Σε αυτό το ebook, θα μάθεις στρατηγικές που θα ενισχύσουν τις σχέσεις σου, θα σε βοηθήσουν να επικοινωνείς αποτελεσματικά και να επηρεάζεις θετικά τις καταστάσεις γύρω σου. Ανακάλυψε πώς να χρησιμοποιείς την επιρροή με γνώση και ηθική, οδηγώντας σε επιτυχία και προσωπική ανάπτυξη.
            </h1>
          </div>

          {/* Cards Section */}
          <div className="flex flex-col space-y-6 md:space-y-8 lg:space-y-12">
            {/* First Card */}
            <div className="group flex flex-col items-center bg-black text-white rounded-xl shadow-lg p-6 border-4 border-red-500/50 transition-all duration-300 hover:scale-105">
              <AlertTriangle className="text-4xl md:text-5xl lg:text-6xl mb-4 text-yellow-400 animate-pulse" />
              <div className="animate-pulse">
                <p className="text-lg md:text-xl font-bold">Είσαι Έτοιμος;</p>
              </div>
            </div>

            {/* Second Card */}
            <div className="group flex flex-col items-center bg-black text-white rounded-xl shadow-lg p-6 border-4 border-red-500/50 transition-all duration-300 hover:scale-105">
              <Hand className="text-4xl md:text-5xl lg:text-6xl mb-4 text-white group-hover:rotate-12 transition-transform" />
              <p className="text-lg md:text-xl font-bold">Να Αποκτήσεις...</p>
            </div>

            {/* Third Card */}
            <div className="group flex flex-col items-center bg-black text-white rounded-xl shadow-lg p-6 border-4 border-red-500/50 transition-all duration-300 hover:scale-105">
              <BookKey className="text-4xl md:text-5xl lg:text-6xl mb-4 text-green-500 animate-bounce" />
              <p className="text-lg md:text-xl font-bold text-center">
                Τις γνώσεις που θα σε οδηγήσουν εκεί ακριβώς που θέλεις;;;
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex flex-col space-y-4">
            <div className="relative w-full aspect-video rounded-xl  shadow-xl">
              <FloatingMessages />
              <Image
                src={im}
                alt="Manipulation"
                className="w-100 h-100 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}