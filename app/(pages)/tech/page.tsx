"use client"

import React, { useState, useEffect } from 'react';
import PagesMainLayout from '@/components/PageMainLayout';
import PageTitle from '@/components/PageTitle';
import Techstack from '@/components/Techstack';
import { Cpu, Terminal, Sparkles, ArrowRight, Zap } from "lucide-react";
import Technologies from '@/components/Technologies';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const EditorialRole = ({ institution, title, date, impact, description }: { institution: string, title: string, date: string, impact: string, description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="relative group grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 py-10 md:py-20 border-t border-gray-100 dark:border-white/5"
  >
    {/* Left Side: Meta & Institutional Branding */}
    <div className="lg:col-span-4 space-y-3 md:space-y-6">
      <div className="flex items-center gap-2 md:gap-3">
        <div className="h-px w-4 md:w-6 bg-blue-600 dark:bg-blue-400" />
        <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-blue-600 dark:text-blue-400">{date}</span>
      </div>
      <div className="space-y-1">
        <h3 className="text-2xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter leading-none group-hover:text-blue-600 transition-colors duration-500">
          {institution}.
        </h3>
        <p className="text-sm md:text-lg font-bold text-gray-400 uppercase tracking-widest italic pt-0.5 md:pt-1">
          {title}
        </p>
      </div>
    </div>

    {/* Right Side: Narrative & Impact Metrics */}
    <div className="lg:col-span-8 flex flex-col md:flex-row gap-6 md:gap-12 items-start justify-between">
      <div className="space-y-4 md:space-y-8 flex-1">
        <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-xl">
          {description}
        </p>
        <button className="group/btn inline-flex items-center gap-2 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-blue-600 transition-all duration-300">
          <span className="relative">
            Review Syllabus & Outcome
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-600 transition-all duration-300 group-hover/btn:w-full" />
          </span>
          <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
        </button>
      </div>

      <div className="relative pt-1 md:pt-0 shrink-0">
        <div className="absolute -inset-4 md:inset-[-24px] bg-gradient-to-br from-blue-600/10 to-purple-600/10 dark:from-blue-400/10 dark:to-purple-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative text-left md:text-right">
          <p className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 tracking-tighter leading-tight md:leading-none">{impact}</p>
          <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-blue-600 dark:text-blue-400 mt-1">Impact Radius</p>
        </div>
      </div>
    </div>
  </motion.div>
)

const Tech = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="min-h-screen bg-white dark:bg-gray-950" />

  return (
    <PagesMainLayout>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl pt-16 md:pt-12 pb-12 md:pb-24 ">

        {/* Animated Floating Background Orbs */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[5%] right-[-5%] w-[35%] h-[35%] rounded-full bg-blue-600/[0.04] dark:bg-blue-400/[0.06] blur-[100px] animate-float" />
          <div className="absolute bottom-[15%] left-[-8%] w-[30%] h-[30%] rounded-full bg-purple-600/[0.04] dark:bg-purple-400/[0.06] blur-[80px] animate-float-slow" />
          <div className="absolute top-[40%] right-[20%] w-[20%] h-[20%] rounded-full bg-indigo-500/[0.03] dark:bg-indigo-400/[0.05] blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
        </div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pt-2 md:pt-6"
        >
          <PageTitle
            title="Mastery & Tools"
            subtitle="Engineering is the art of balancing complexity. I bridge the gap between high-performance architecture and professional mentorship."
            icon={<Cpu />}
          />
        </motion.div>

        {/* The Technical Core — Mastery Pyramid */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative pt-4 md:pt-0"
        >
          <div className="text-center space-y-3 md:space-y-4">
            <span className="text-[8px] md:text-[9px] font-black tracking-[0.5em] md:tracking-[0.8em] uppercase text-blue-600 dark:text-blue-400">Technical Foundation</span>
            <h2 className="text-3xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter uppercase italic leading-none">
              The Mastery <br className="md:hidden" /> Pyramid.
            </h2>
          </div>
          <Technologies />
        </motion.section>

        {/* Mentorship Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-0 relative"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 pb-16 md:pb-32">
            <div className="space-y-6 md:space-y-10">
              <div className="relative inline-block">
                <Sparkles className="w-6 h-6 md:w-10 md:h-10 text-blue-600 dark:text-blue-400 absolute -top-10 -right-6 animate-pulse" />
                <h2 className="text-4xl md:text-9xl font-black tracking-tighter leading-[0.8]">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white animate-gradient-x">Leading</span> <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Mentorship.</span>
                </h2>
              </div>
              <div className="h-1.5 w-16 md:w-24 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 rounded-full" />
            </div>
            <p className="text-sm md:text-2xl font-bold uppercase tracking-tighter text-gray-400 max-w-[240px] md:max-w-sm text-left md:text-right leading-tight md:leading-none">
              Cultivating technical excellence through <br className="hidden md:block" />
              <span className="text-gray-900 dark:text-white">Structured Delivery.</span>
            </p>
          </div>

          <div className="grid grid-cols-1">
            <EditorialRole
              institution="Saylani Welfare Trust"
              title="Senior MERN Instructor"
              date="2024 – 2025"
              impact="100+"
              description="Transformed over 100 students into industry-ready developers through rigorous, project-focused MERN stack training and architectural mentoring."
            />
            <EditorialRole
              institution="Voltic Inc"
              title="Full Stack Teacher"
              date="2025 – Present"
              impact="50+"
              description="Designing advanced full-stack curricula focused on real-world scalability, real-time data orchestration, and technical leadership."
            />
          </div>
        </motion.section>

        {/* Studio Specs — Premium Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative rounded-[24px] sm:rounded-[40px] md:rounded-[80px] overflow-hidden border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02] backdrop-blur-3xl px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-16 md:py-24 lg:py-32 animate-glow-pulse"
        >
          {/* Floating Terminal Watermark */}
          <div className="absolute top-0 right-0 p-8 md:p-16 opacity-[0.03] dark:opacity-[0.06] pointer-events-none">
            <Terminal className="w-48 h-48 md:w-[400px] md:h-[400px] text-blue-600 dark:text-blue-400 rotate-12 animate-float-slow" />
          </div>

          {/* Shimmer Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-shimmer" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 relative z-10">
            <div className="lg:col-span-4 space-y-8 md:space-y-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 dark:bg-blue-400/10 border border-blue-500/20">
                <Terminal className="w-3 md:w-4 h-3 md:h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-blue-600 dark:text-blue-400">Dev Ecosystem</span>
              </div>

              <div className="space-y-4 md:space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-gray-900 dark:text-white tracking-tighter leading-none italic">
                  Studio Specs.
                </h2>
                <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-sm">
                  Elite tools for elite delivery. A perfectly calibrated environment for speed.
                </p>
              </div>

              {/* Protocol Card — Premium */}
              <div className="p-5 sm:p-8 md:p-10 lg:p-12 rounded-[20px] sm:rounded-[32px] md:rounded-[48px] bg-white dark:bg-gray-900 shadow-xl sm:shadow-2xl border border-gray-100 dark:border-white/5 space-y-3 sm:space-y-4 md:space-y-6 relative group overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/[0.02] via-transparent to-indigo-600/[0.02] transition-all duration-700 group-hover:from-blue-600/10 group-hover:to-indigo-600/5" />
                <div className="relative space-y-3 md:space-y-4">
                  <div className="flex items-center gap-3">
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-blue-600">Protocol</p>
                    <div className="flex items-center gap-1.5">
                      <div className="relative">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping absolute" />
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 relative" />
                      </div>
                      <span className="text-[7px] font-bold uppercase tracking-widest text-emerald-500">Active</span>
                    </div>
                  </div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white leading-tight flex items-center gap-2 sm:gap-3">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600 dark:text-blue-400 shrink-0" />
                    Zero Latency.
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500 font-medium leading-relaxed">Optimized for the critical path, ensuring 100/100 performance across the full stack.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <Techstack />
            </div>
          </div>
        </motion.section>
      </div>
    </PagesMainLayout>
  );
};

export default Tech;