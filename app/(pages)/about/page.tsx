"use client"
import React from 'react';
import PagesMainLayout from '@/components/PageMainLayout';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Target, Layers, Zap } from 'lucide-react';

const TimelineItem = ({ title, sub, date, desc }: { title: string, sub: string, date: string, desc: string[] }) => (
  <div className="relative pl-8 border-l border-gray-100 dark:border-white/10 pb-12 last:pb-0">
    <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] rounded-full bg-blue-600 dark:bg-blue-400" />
    <div className="space-y-2">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tight">{title}</h3>
        <span className="text-xs font-bold px-3 py-1 bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 rounded-full w-fit">
          {date}
        </span>
      </div>
      <p className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-[0.1em] text-[10px]">{sub}</p>
      <ul className="space-y-2 pt-2">
        {desc.map((d, i) => (
          <li key={i} className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed flex items-start gap-2">
            <div className="w-1 h-1 rounded-full bg-blue-500 mt-2 shrink-0" />
            {d}
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <PagesMainLayout>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto py-12 px-4 space-y-24"
      >
        {/* Elite Header */}
        <motion.div variants={itemVariants} className="space-y-4 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="h-[1px] w-8 bg-blue-600 dark:bg-blue-400"></div>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-blue-600 dark:text-blue-400">
              Identity & Authority
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
            Muhammad Usman. <br />
            <span className="text-gray-400">Software Engineer & MERN Specialist.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-3xl pt-4">
             I am a Full Stack Engineer specialized in building real-world, scalable, API-driven web and mobile applications with a relentless focus on SEO and performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Experience Section */}
          <motion.div variants={itemVariants} className="lg:col-span-12 space-y-12">
            <div className="flex items-center gap-4">
               <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
               <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-widest text-xs">Professional Trajectory</h2>
            </div>
            
            <div className="space-y-0">
              <TimelineItem 
                title="Full Stack Developer"
                sub="Voltic Inc. — Teacher & Mentor"
                date="Jan 2025 – Jun 2025"
                desc={[
                  "Delivering structured training programs for advanced web development.",
                  "Guiding students through complex project-based learning architectures."
                ]}
              />
              <TimelineItem 
                title="MERN Stack Instructor"
                sub="Saylani Welfare Trust"
                date="Jan 2024 – Jan 2025"
                desc={[
                  "Trained 100+ students in real-world full-stack development concepts.",
                  "Mentored beginners to intermediate developers in industry best practices."
                ]}
              />
              <TimelineItem 
                title="Full Stack Developer"
                sub="Codevpk"
                date="Jul 2023 – Jan 2025"
                desc={[
                  "Developed scalable full-stack web applications for global clients.",
                  "Built high-performance APIs and refined complex frontend systems."
                ]}
              />
            </div>
          </motion.div>

          {/* Education Header */}
          <motion.div variants={itemVariants} className="lg:col-span-12 space-y-8 pt-8 border-t border-gray-100 dark:border-white/10">
            <div className="flex items-center gap-4">
               <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
               <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-widest text-xs">Academic Foundation</h2>
            </div>
            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-[32px] border border-gray-100 dark:border-white/10">
               <h3 className="text-2xl font-black text-gray-900 dark:text-white">Bachelor of Software Engineering</h3>
               <p className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-[0.1em] text-xs pt-2">Government College University Faisalabad</p>
               <p className="text-gray-500 dark:text-gray-400 font-bold text-xs pt-4">Duration: 2021 – 2025</p>
            </div>
          </motion.div>
        </div>

        {/* Expertise Grid */}
        <motion.div variants={itemVariants} className="space-y-12">
           <div className="flex items-center gap-4">
               <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
               <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-widest text-xs">Core Strategic Expertise</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: 'Real-Time Systems', desc: 'Expertise in live sports apps, data streaming, and real-time notification architectures.' },
                { icon: Layers, title: 'Full Stack Orchestration', desc: 'End-to-end application development with deep frontend and backend integration.' },
                { icon: Target, title: 'SEO-Friendly Engineering', desc: 'Building products that index perfectly through technical SEO and performance focus.' }
              ].map((exp, i) => (
                <div key={i} className="p-8 bg-gray-50 dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 hover:border-blue-500/30 transition-all group">
                   <exp.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                   <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">{exp.title}</h3>
                   <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">{exp.desc}</p>
                </div>
              ))}
           </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div variants={itemVariants} className="pt-24 pb-12 text-center md:text-left">
           <div className="flex flex-wrap gap-12 justify-center md:justify-start">
              {[
                { label: 'Trained Students', value: '100+' },
                { label: 'Production Apps', value: '10+' },
                { label: 'Years Experience', value: '3+' },
                { label: 'Industries Served', value: '5+' }
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                   <p className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter">{stat.value}</p>
                   <p className="text-[10px] font-black tracking-[0.4em] uppercase text-blue-600 dark:text-blue-400">{stat.label}</p>
                </div>
              ))}
           </div>
        </motion.div>
      </motion.div>
    </PagesMainLayout>
  );
}