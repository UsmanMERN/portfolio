import React from 'react';
import { Metadata } from 'next';
import PagesMainLayout from '@/components/PageMainLayout';
import PageTitle from '@/components/PageTitle';
import Technologies from '@/components/Technelogies';
import Techstack from '@/components/Techstack';
import { Cpu } from "lucide-react"
{/* <Settings /> */ }

export const metadata: Metadata = {
  title: 'Tech Stack and About Me',
  description:
    'I am a software engineer with experience in a variety of technologies, including React, Node.js, Express.js, MongoDB, PostgreSQL, HTML, CSS, JavaScript, Python, C#, Prisma, AWS, React Native, Next.js, CPP, and Java. Passionate about building innovative applications.',
};

const Tech = () => {
  return (
    <PagesMainLayout>
      <PageTitle title="Technologies & Tools"
        subtitle="These are the tools and technologies I work with to create amazing applications."
        icon={<Cpu />} />
      {/* Divider */}
      <div className="border-t  my-8"></div>

      {/* Technologies Section */}
      <section className="space-y-8">
        <div className="p-6">
          <Technologies />
        </div>
        <div className="p-6">
          <Techstack />
        </div>
      </section>

    </PagesMainLayout>
  );
};

export default Tech;