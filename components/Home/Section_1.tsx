"use client"
import React from 'react';
import Svg from '../Svg';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Section_1({ contributions }: { contributions: number }) {
  // Animation Variants for a refined, single-reveal feel
  const revealVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className="relative w-full h-[calc(100vh-180px)] lg:h-[calc(100vh-220px)] flex flex-col items-center justify-center px-6 lg:px-12 overflow-hidden selection:bg-blue-600/30">
      
      {/* Handcrafted Asymmetrical Layout */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Bold Typography */}
        <div className="lg:col-span-7 space-y-10">
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[1px] w-8 bg-blue-600 dark:bg-blue-400"></div>
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-blue-600 dark:text-blue-400">
                Full Stack Software Engineer
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tight text-gray-900 dark:text-white leading-[0.95] lg:leading-[0.85]">
              Muhammad <br />
              <span className="text-gray-400">Usman.</span>
            </h1>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            transition={{ delay: 0.2 }}
            className="max-w-xl"
          >
            <p className="text-xl sm:text-2xl text-gray-800 dark:text-gray-300 font-medium leading-relaxed">
              I build <span className="underline decoration-blue-500/50 underline-offset-4">scalable, real-time</span> web and mobile applications 
              with <span className="font-bold">SEO optimization</span> and performance focus. Turning complex visions into 
              high-performance digital products for over 3 years.
            </p>
          </motion.div>

          {/* Minimalist Action & Socials */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-8 pt-4"
          >
            <a href="/projects" className="group flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-10 py-5 rounded-full text-lg font-black transition-all hover:bg-black dark:hover:bg-gray-100 hover:scale-105">
              Explore Projects
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
            </a>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400">
                <a href="https://github.com/UsmanMERN" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors"><Github className="w-6 h-6" /></a>
                <a href="https://www.linkedin.com/in/mernstack-developers/" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors"><Linkedin className="w-6 h-6" /></a>
                <a href="mailto:usman853136@gmail.com" className="hover:text-blue-600 transition-colors"><Mail className="w-6 h-6" /></a>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                <a href="mailto:usman853136@gmail.com" className="hover:text-blue-600 transition-colors tracking-[0.3em]">usman853136@gmail.com</a>
                <a href="https://www.linkedin.com/in/mernstack-developers/" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors tracking-[0.3em]">LinkedIn Profile</a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Refined Visual Asset */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-1 hidden lg:block"
        >
          {/* Vertical Separator Line */}
          <div className="h-48 w-[1px] bg-gray-200 dark:bg-white/10 mx-auto"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="lg:col-span-4 hidden lg:flex justify-end"
        >
          <div className="relative group grayscale hover:grayscale-0 transition-all duration-700">
            <div className="absolute -inset-10 bg-blue-600/5 dark:bg-blue-400/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-all duration-700"></div>
            <div className="relative z-10 w-[300px] lg:w-[400px]">
              <Svg />
            </div>
            
            {/* Subtle Stat Decor */}
            <div className="absolute top-0 -left-12 flex flex-col items-center">
              <span className="text-5xl font-black text-gray-200 dark:text-white/5 tracking-tighter tabular-nums select-none">
                {contributions < 10 ? `0${contributions}` : contributions}
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 rotate-90 mt-8 whitespace-nowrap">
                Finished Projects
              </span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Viewport Indicator Line (Handcrafted Feel) */}
      <div className="absolute bottom-10 flex items-center gap-4 text-xs font-bold tracking-[0.5em] uppercase text-gray-300 dark:text-white/10">
        <span>Strategy</span>
        <div className="w-12 h-[1px] bg-gray-200 dark:bg-white/10"></div>
        <span>Design</span>
        <div className="w-12 h-[1px] bg-gray-200 dark:bg-white/10"></div>
        <span>Performance</span>
      </div>
      
    </div>
  );
}