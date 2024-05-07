  import BlogCard from '@/components/BlogCard';
  import BlogCard1 from '@/components/BlogCard1';
  import { Metadata } from 'next';
  import React from 'react';
  
  interface Repo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
  }
  export const metadata: Metadata = {
    title: "Coding Project Portfolio",
    description: "My recent coding project portfolio showcases my skills and experience in developing and deploying web applications. I have used a variety of technologies, including React, Node.js, Express.js, MongoDB, PostgreSQL, HTML, CSS, JavaScript, Python, C sharp, and SQL. I am passionate about building innovative and user-friendly web applications, and I am excited to share my work with the world.",
    keywords: "Software Engineer, Web Developer, MERN Stack Developer, Full Stack Developer, Front-End Developer, Back-End Developer, Web Development Services, MERN Stack Development Services, Full Stack Development Services, Front-End Development Services, Back-End Development Services, Custom Web Development, Custom Software Development, Coding Project, Portfolio, GitHub",
    alternates: {
      canonical: "/blog"
    }
  };
  const Blog: React.FC = async () => {
  
    async function fetchRepos(): Promise<Repo[]> {
      try {
        const response = await fetch('https://api.github.com/users/UsmanMERN/repos', {
          next: {
            revalidate: 43200
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub repositories');
        }
        const data = await response.json();
        return data as Repo[];
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
        throw error;
      }
    }
    const repos = await fetchRepos();
  
    return (
      <div className="overflow-y-scroll scrollBar" style={{ maxHeight: '70vh' }}>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Github
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My Recent Coding Projects Source Code
          </p>
        </div>
        <div className="grid grid-cols-1 xsm:grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center mx-9">
          {repos?.map((repo, i) => (
            // <BlogCard repo={repo} key={i} />
            <BlogCard1 repo={repo} key={i} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Blog;