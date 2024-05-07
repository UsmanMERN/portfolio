import Technologies from '@/components/Technelogies'
import Techstack from '@/components/Techstack'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'Tech Stack and Tools',
  description: 'I am a software engineer with experience in a variety of technologies, including React, Node.js, Express.js, MongoDB, PostgreSQL, HTML, CSS, JavaScript, Python, C#, Prisma, AWS, React Native, Next.js, CPP, and Java. I am passionate about building innovative and user-friendly applications, and I am excited to share my tech stack and tools with the world.',
  keywords: 'Software Engineer, Web Developer, Mobile Developer, Desktop Developer, React, Node.js, Express.js, MongoDB, PostgreSQL, HTML, CSS, JavaScript, Python, C#, Prisma, AWS, React Native, Next.js, CPP, Java, Trending Keywords, Tech Stack, Tools,Best tech stack for software development, Top technologies for web development, Essential tools for software engineers , Emerging technologies in software development Software development trends, Software development best practices, Software development career advice, Software development blog, Software development portfolio, Software development resources, Software development community',
  alternates: {
    canonical: "/tech"
  }
};
const Tech = () => {
  return (
    <>
      <div className="overflow-y-scroll scrollBar" style={{ maxHeight: '70vh' }}>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Tech
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My tech stack and Tools.
          </p>
        </div>
        <div className="text-center">
          <h1 className='text-3xl font-bold'>What I Use</h1>
        </div>
        <div className="lg:mt-2">
          <Technologies />
        </div>
        <div className="mt-2">
          <Techstack />
        </div>
      </div>
    </>
  )
}

export default Tech