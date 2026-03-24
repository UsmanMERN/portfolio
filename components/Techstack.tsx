"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layout, Monitor, Database, Cloud } from 'lucide-react';

import { CardContainer, CardBody, CardItem } from './ui/3d-card';

const StackCard = ({ icon: Icon, title, items }: { icon: any, title: string, items: React.ReactNode[] }) => {
  return (
    <CardContainer className="inter-var w-full py-0">
      <CardBody className="bg-gray-50 dark:bg-white/[0.02] relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] border border-gray-100 dark:border-white/10 w-full h-auto rounded-[24px] md:rounded-[48px] px-6 py-8 md:p-10 transition-all duration-500">
        <CardItem
          translateZ="40"
          className="p-3 md:p-5 w-fit rounded-xl md:rounded-2xl bg-blue-600/10 dark:bg-blue-400/10 mb-6 md:mb-10"
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
                <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0 transition-transform group-hover/item:scale-125" />
                <span className="flex-1 min-w-0 break-words">{item}</span>
              </li>
            ))}
          </ul>
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}

export default function Techstack() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:pt-4">
      <StackCard
        icon={Layout}
        title="Development"
        items={[
          <>Editor: <span className="font-black text-gray-900 dark:text-white">VS Code</span> with extensions.</>,
          <>Theme: <span className="font-black text-gray-900 dark:text-white">Elite Dark</span> (Deep Slate).</>,
          <>Type: <span className="font-black text-gray-900 dark:text-white">Fira Code</span> w/ ligatures.</>
        ]}
      />

      <StackCard
        icon={Terminal}
        title="Architecture"
        items={[
          <>Shell: <span className="font-black text-gray-900 dark:text-white">ZSH</span> for industrial scripting.</>,
          <>Custom: <span className="font-black text-gray-900 dark:text-white">Oh My Posh</span> schemas.</>,
          <>Workflow: Git-based CLI automation.</>
        ]}
      />

      <StackCard
        icon={Monitor}
        title="Tooling suite"
        items={[
          <>Debug: <span className="font-black text-gray-900 dark:text-white">Chrome</span> & <span className="font-black text-gray-900 dark:text-white">Postman</span>.</>,
          <>Design: <span className="font-black text-gray-900 dark:text-white">Figma</span> for UI/UX design.</>,
          <>Sync: Slack & Discord for teams.</>
        ]}
      />

      <StackCard
        icon={Cloud}
        title="Infrastructure"
        items={[
          <>Host: <span className="font-black text-gray-900 dark:text-white">Vercel</span> for orchestration.</>,
          <>Cloud: <span className="font-black text-gray-900 dark:text-white">AWS</span> for scalable envs.</>,
          <>Edge: Next.js Middleware for execution.</>
        ]}
      />
    </div>
  );
}




