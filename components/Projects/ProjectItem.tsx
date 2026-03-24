import { Info } from 'lucide-react';
import { ProjectModal } from './types';
import { color } from './constants';

interface ProjectProps {
  index: number;
  title: string;
  url: string;
  role: string;
  about: string;
  tech: string[];
  setModal: (modal: ProjectModal) => void;
  // Case study optional fields
  problem?: string;
  solution?: string;
  features?: string[];
  goals?: string[];
  focus?: string;
  importance?: string;
}

export default function ProjectItem({ index, title, about, url, role, tech, setModal, problem, solution, features, goals, focus, importance }: ProjectProps) {
  return (
    <a
      href={url}
      target="_blank"
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="group  flex w-full items-start justify-between border-b border-gray-300 dark:border-gray-600 px-4 py-10 sm:px-10 sm:py-16"
      rel="noreferrer"
    >
      <div className="flex flex-col space-y-6 max-w-4xl">
        <h2 className="text-2xl transition-all font-bold sm:text-5xl text-gray-900 dark:text-white">
          {title}
        </h2>
        
        {/* Core Description */}
        <p className='text-gray-600 dark:text-gray-400 text-lg leading-relaxed'>{about}</p>
        
        {/* Case Study Details */}
        <div className="space-y-4 pt-2">
          {problem && (
            <div>
              <strong className="text-gray-900 dark:text-gray-200 block mb-1">The Problem:</strong>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{problem}</p>
            </div>
          )}
          {solution && (
            <div>
              <strong className="text-gray-900 dark:text-gray-200 block mb-1">The Solution:</strong>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{solution}</p>
            </div>
          )}
          {importance && (
            <div>
              <strong className="text-gray-900 dark:text-gray-200 block mb-1">Importance:</strong>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{importance}</p>
            </div>
          )}
          {focus && (
            <div>
              <strong className="text-gray-900 dark:text-gray-200 block mb-1">Focus:</strong>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{focus}</p>
            </div>
          )}
          
          {/* Lists for Features / Goals */}
          <div className="flex flex-col sm:flex-row sm:gap-12 gap-4 mt-2">
            {features && features.length > 0 && (
              <div>
                <strong className="text-gray-900 dark:text-gray-200 block mb-2">Key Features:</strong>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </div>
            )}
            {goals && goals.length > 0 && (
              <div>
                <strong className="text-gray-900 dark:text-gray-200 block mb-2">Project Goals:</strong>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {goals.map((g, i) => <li key={i}>{g}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex gap-2 flex-wrap pt-4">
          {tech.map((t, i) => (<span key={i} className={`px-3 py-1 text-sm rounded-md text-white font-medium capitalize tracking-wide shadow-sm`} style={{ backgroundColor: color[i] || '#4299e1' }} >{t}</span>))}
        </div>
      </div>
      
      {/* Right Column Role */}
      <div className="hidden sm:block">
        <span className="inline-block px-4 py-2 border border-blue-500/30 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold tracking-wider uppercase">
          {role}
        </span>
      </div>
    </a>
  );
}