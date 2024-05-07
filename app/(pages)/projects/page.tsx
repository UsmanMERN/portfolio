import MainLayout from '@/components/MainLayout'
import ProjectCard from '@/components/Projects/ProjectCard'
import Projects from '@/components/Projects/Projects'
import ProjectsCard from '@/components/ProjectsCard'
import { projects } from '@/components/Projects/constants'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio Projects',
  description: 'Here is a showcase of my selected software engineering projects, including web applications, mobile applications, and desktop applications. I have experience in developing and deploying a variety of projects using a variety of technologies, including Next.js, React, Node.js, Express.js, MongoDB, PostgreSQL, HTML, CSS, JavaScript, Python, and C#. I am passionate about building innovative and user-friendly applications, and I am excited to share my work with the world.',
  keywords: 'Software Engineering Projects, Web Development Projects, Mobile Development Projects, Desktop Development Projects, React, Node.js, Express.js, MongoDB, PostgreSQL, HTML, CSS, JavaScript, Python, C#, Software Engineer, Web Developer, Mobile Developer, Desktop Developer, Portfolio',
  alternates: {
    canonical: "/projects"
  }
};
const Page = () => {
  return (
    <>
      <div className="overflow-y-scroll scrollBar" style={{ maxHeight: '70vh' }}>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Here are some of my selected projects worth sharing.
          </p>
        </div>
        <div className="">
          <MainLayout >
            <div className="hidden xl:block">
              <Projects />
            </div>
            <div className=" xl:hidden grid grid-cols-1 sm:grid-cols-2  gap-4 px-1">
              {projects.map(((p, k) => (
                <ProjectCard key={k} data={p} />
              )))}
            </div>
          </MainLayout>
        </div>
      </div>
    </>
  )
}

export default Page