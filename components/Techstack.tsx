"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layout, Monitor, Database, Cloud } from 'lucide-react';

import { CardContainer, CardBody, CardItem } from './ui/3d-card';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

const StackCard = ({ icon: Icon, title, items, index }: { icon: any, title: string, items: React.ReactNode[], index: number }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      custom={index}
    >
      <CardContainer className="inter-var w-full py-0">
        <CardBody className="bg-white/60 dark:bg-white/[0.02] relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.15] hover:shadow-xl hover:shadow-blue-500/[0.08] border border-gray-100 dark:border-white/10 hover:border-blue-500/20 dark:hover:border-blue-500/30 w-full h-auto rounded-[24px] md:rounded-[48px] px-6 py-8 md:p-10 transition-all duration-500 overflow-hidden">
          {/* Top Gradient Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
          
          {/* Hover Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.01] to-indigo-600/[0.01] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
          
          <CardItem
            translateZ="40"
            className="p-3 md:p-5 w-fit rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-600/10 to-indigo-600/10 dark:from-blue-400/10 dark:to-indigo-400/10 mb-6 md:mb-10 relative"
          >
            <Icon className="w-6 h-6 md:w-10 md:h-10 text-blue-600 dark:text-blue-400" />
          </CardItem>
          
          <CardItem
            translateZ="50"
            className="text-[9px] md:text-[10px] font-black text-blue-600 dark:text-blue-400 mb-2 tracking-[0.3em] md:tracking-[0.4em] uppercase"
          >
            Specification
          </CardItem>

          <CardItem
            translateZ="70"
            className="text-2xl md:text-4xl font-black text-gray-900 dark:text-white mb-6 md:mb-8 tracking-tighter"
          >
            {title}
          </CardItem>

          <CardItem translateZ="80" className="w-full">
            <ul className="space-y-4 md:space-y-6">
              {items.map((item, i) => (
                <li key={i} className="text-sm md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium list-none flex items-start gap-4 md:gap-6 group/item">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 mt-2 shrink-0 transition-all duration-300 group-hover/item:scale-150 group-hover/item:shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
                  <span className="flex-1 min-w-0 break-words">{item}</span>
                </li>
              ))}
            </ul>
          </CardItem>
        </CardBody>
      </CardContainer>
    </motion.div>
  )
}

export default function Techstack() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 md:pt-4">
      <StackCard
        icon={Layout}
        title="Development"
        index={0}
        items={[
          <>Editor: <span className="font-black text-gray-900 dark:text-white">VS Code</span> with extensions.</>,
          <>Theme: <span className="font-black text-gray-900 dark:text-white">Elite Dark</span> (Deep Slate).</>,
          <>Type: <span className="font-black text-gray-900 dark:text-white">Fira Code</span> w/ ligatures.</>
        ]}
      />

      <StackCard
        icon={Terminal}
        title="Architecture"
        index={1}
        items={[
          <>Shell: <span className="font-black text-gray-900 dark:text-white">ZSH</span> for industrial scripting.</>,
          <>Custom: <span className="font-black text-gray-900 dark:text-white">Oh My Posh</span> schemas.</>,
          <>Workflow: Git-based CLI automation.</>
        ]}
      />

      <StackCard
        icon={Monitor}
        title="Tooling suite"
        index={2}
        items={[
          <>Debug: <span className="font-black text-gray-900 dark:text-white">Chrome</span> & <span className="font-black text-gray-900 dark:text-white">Postman</span>.</>,
          <>Design: <span className="font-black text-gray-900 dark:text-white">Figma</span> for UI/UX design.</>,
          <>Sync: Slack & Discord for teams.</>
        ]}
      />

      <StackCard
        icon={Cloud}
        title="Infrastructure"
        index={3}
        items={[
          <>Host: <span className="font-black text-gray-900 dark:text-white">Vercel</span> for orchestration.</>,
          <>Cloud: <span className="font-black text-gray-900 dark:text-white">AWS</span> for scalable envs.</>,
          <>Edge: Next.js Middleware for execution.</>
        ]}
      />
    </div>
  );
}
