import React from 'react';
import { Metadata } from 'next';
import PagesMainLayout from '@/components/PageMainLayout';
import PageTitle from '@/components/PageTitle';
import Techstack from '@/components/Techstack';
import { Cpu } from "lucide-react";
import Technologies from '@/components/Technelogies';

export const metadata: Metadata = {
  title: 'Tech Stack and Tools',
  description: 'Comprehensive overview of technologies and tools used in software development.',
};

const Tech = () => {
  return (
    <PagesMainLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PageTitle
          title="Technologies & Tools"
          subtitle="These are the tools and technologies I work with to create amazing applications."
          icon={<Cpu />}
        />

        <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

        <section className="space-y-8">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm">
            <Technologies />
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm">
            <Techstack />
          </div>
        </section>
      </div>
    </PagesMainLayout>
  );
};

export default Tech;