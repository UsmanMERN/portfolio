import React from 'react';
import { Metadata } from 'next';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { BackgroundGradient } from '@/components/ui/background-gradient';

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

      <BentoGrid className="mt-10 mx-8 grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr place-items-center">
        {repos?.map((repo, i) => {
          const rowIndex = Math.floor(i / 3);
          const colIndex = i % 3;
          let colSpan = "md:col-span-1";

          // Alternate rows logic for col-span-2
          if (rowIndex % 2 !== 0 && colIndex < 2) {
            colSpan = colIndex === 0 ? "md:col-span-2" : "md:col-span-1";
          }

          return (
            <BentoGridItem
              key={repo.id}
              header={
                <BackgroundGradient className="flex flex-col items-center h-[300px] text-center w-full rounded-[22px] p-6 sm:p-10 bg-white dark:bg-zinc-900 shadow-lg">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    <div className="p-6 rounded-lg">
                      <h6 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                        {repo.name}
                      </h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {repo.description
                          ? repo.description.length > 30
                            ? `${repo.description.substring(0, 30)}...`
                            : repo.description
                          : "No description available for this repo"}
                      </p>
                    </div>
                  </a>
                </BackgroundGradient>
              }
              className={`${colSpan} h-full`}
            />
          );
        })}
      </BentoGrid>
    </div>
  );
};
export default Blog