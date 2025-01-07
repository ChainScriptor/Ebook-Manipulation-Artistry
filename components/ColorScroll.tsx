"use client";

import { useEffect } from 'react';

export function ColorScroll() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrolled / maxScroll) * 100;
      
      document.documentElement.style.setProperty(
        '--scroll-color',
        `hsl(${220 + scrollProgress}, 90%, ${45 - scrollProgress * 0.2}%)`
      );
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}