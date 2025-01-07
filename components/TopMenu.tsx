'use client';

import { Music } from 'lucide-react';
import { useState } from 'react';
import MusicPlayer from './MusicPlayer';

export default function TopMenu() {
  return (
    <div className="relative">
      <MusicPlayer />
      <div className="bg-black w-full py-10">
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
          {/* Split text into individual spans for gradient effect */}
          <span className="inline-block">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text hover:from-blue-400 hover:via-teal-500 hover:to-green-500 transition-all duration-500 ease-in-out cursor-default">
              Artistry
            </span>
          </span>
          <span className="mx-3 text-gray-500">of</span>
          <span className="inline-block">
            <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500 text-transparent bg-clip-text hover:from-indigo-400 hover:via-purple-500 hover:to-pink-500 transition-all duration-500 ease-in-out cursor-default">
              Manipulation
            </span>
          </span>
        </h1>
      </div>
    </div>
  );
}