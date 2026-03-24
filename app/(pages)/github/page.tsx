import React from 'react';
import { Metadata } from 'next';
import { Github, Code, Star, ExternalLink, GitBranch } from 'lucide-react';
import PagesMainLayout from '@/components/PageMainLayout';
import PageTitle from '@/components/PageTitle';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language?: string;
  stargazers_count: number;
  fork: boolean;
}

export const metadata: Metadata = {
  title: "GitHub Portfolio | Muhammad Usman",
  description: "Impactful open-source projects and technical expertise showcased through a curated GitHub repository collection.",
};

const GithubProjects = async () => {
  async function fetchRepos(): Promise<Repo[]> {
    try {
      const response = await fetch('https://api.github.com/users/UsmanMERN/repos', {
        next: { revalidate: 43200 },
      });

      if (!response.ok) throw new Error('Failed to fetch GitHub repositories');

      const data: Repo[] = await response.json();
      return data
        .filter(repo => !repo.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count);
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
      return [];
    }
  }

  const repos = await fetchRepos();

  return (
    <PagesMainLayout>
      <div className="container mx-auto px-4 max-w-6xl pb-20">
        <PageTitle 
          title="GitHub Projects"
          subtitle="A curated collection of my most impactful and innovative coding architectures."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {repos.map((repo, index) => (
            <div
              key={repo.id}
              className="group p-8 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-blue-600/10 dark:bg-blue-400/10 rounded-2xl group-hover:bg-blue-600 dark:group-hover:bg-blue-400 group-hover:text-white transition-all duration-500">
                    <Code className="w-6 h-6" />
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
                    {repo.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed line-clamp-2 min-h-[3rem]">
                    {repo.description || "Architectural excellence and high-performance engineering implementations."}
                  </p>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-gray-200/50 dark:border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {repo.language && (
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-blue-500" />
                       <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{repo.language}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4" />
                    <span className="text-xs font-bold">{repo.stargazers_count}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PagesMainLayout>
  );
};

export default GithubProjects;