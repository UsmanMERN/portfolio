"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Frontend_skill, 
  Backend_skill, 
  Full_stack, 
  Other_skill,
} from '../lib/Constants'
import TechLogo from './TechLogo'

// Hardcoded Perfectly Balanced Pyramid Structure
const PYRAMID_STRUCTURE = [
  { row: 1, skills: [Frontend_skill[5]] }, // React (Central Pillar)
  { row: 2, skills: [Frontend_skill[9], Backend_skill[0], Frontend_skill[8]] }, // Next, Node, TS
  { row: 3, skills: [Backend_skill[1], Backend_skill[2], Frontend_skill[3], Backend_skill[3], Backend_skill[4]] }, // Express, Mongo, Tailwind, Firebase, Postgre
  { row: 4, skills: [Frontend_skill[6], Frontend_skill[7], Backend_skill[6], Backend_skill[7], Full_stack[0], Full_stack[2], Other_skill[2]] }, // Redux, Query, Prisma, Graph, Native, Docker, Framer
  { row: 5, skills: [Other_skill[3], Other_skill[1], Other_skill[0], Full_stack[4], Full_stack[5]] } // Stripe, JWT, NextAuth, Figma, Socket
]

const SkillNode = ({ skill, index, rowDelay }: { skill: any, index: number, rowDelay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: rowDelay + (index * 0.05), 
        ease: [0.16, 1, 0.3, 1] 
      }}
      whileHover={{ scale: 1.15, y: -8 }}
      className="relative group cursor-pointer"
    >
      {/* Glow Aura — Multi-color */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 via-indigo-500/15 to-purple-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      {/* Glass Container */}
      <div className="relative p-4 md:p-6 rounded-[24px] md:rounded-[32px] bg-white/50 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/50 dark:border-white/10 shadow-lg group-hover:border-blue-500/40 group-hover:shadow-blue-500/10 group-hover:shadow-xl transition-all duration-500 overflow-hidden">
         {/* Inner Shimmer */}
         <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
         <div className="relative z-10 scale-90 md:scale-100">
            <TechLogo skill={skill} index={index} />
         </div>
      </div>
      
      {/* Tooltip */}
      <AnimatePresence>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
           <motion.div 
             initial={{ opacity: 0, y: 5 }}
             className="px-3 py-1.5 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 backdrop-blur-md text-white dark:text-gray-900 rounded-xl shadow-xl border border-white/10 dark:border-gray-200 flex flex-col items-center gap-0.5"
           >
              <p className="text-[8px] font-black uppercase tracking-widest whitespace-nowrap">{skill.skill_name}</p>
           </motion.div>
        </div>
      </AnimatePresence>
    </motion.div>
  )
}

export default function Technologies() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="h-[400px]" /> 

  return (
    <div className="py-12 md:py-20 space-y-12 md:space-y-16 relative overflow-hidden">
      {/* Architectural Background Grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] dark:opacity-[0.07]" />
      </div>
      
      {/* The Pyramid Matrix */}
      <div className="relative z-10 flex flex-col items-center gap-4 md:gap-8">
        {PYRAMID_STRUCTURE.map((row, rowIndex) => (
          <motion.div 
            key={rowIndex} 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: rowIndex * 0.08 }}
            className="flex flex-wrap justify-center items-center gap-3 md:gap-6 px-4 relative"
          >
            {/* Connector Line (except first row) */}
            {rowIndex > 0 && (
              <div className="absolute -top-2 md:-top-4 left-1/2 -translate-x-1/2 w-px h-4 md:h-8 bg-gradient-to-b from-blue-500/30 to-transparent" />
            )}
            {row.skills.map((skill, skillIndex) => (
              <SkillNode 
                key={skillIndex} 
                skill={skill} 
                index={skillIndex} 
                rowDelay={rowIndex * 0.1} 
              />
            ))}
          </motion.div>
        ))}
      </div>

      {/* Global Status Indicator — Premium */}
      <div className="text-center pt-16 md:pt-20">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full border border-gray-100 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] backdrop-blur-lg shadow-lg hover:shadow-xl hover:border-blue-500/20 transition-all duration-500 group cursor-default"
        >
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping absolute inset-0 opacity-75" />
            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 relative" />
          </div>
          <span className="text-[9px] font-black tracking-[0.4em] uppercase text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            Systems Synchronized
          </span>
        </motion.div>
      </div>
    </div>
  )
}
