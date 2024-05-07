"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
}

export default function BlogCard({ repo }: { repo: Repo }) {
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsInView(entry.isIntersecting);
    });

    const cardElement = document.getElementById(`card${repo.id}`);
    if (cardElement) {
      observer.observe(cardElement);
    }

    return () => {
      if (cardElement) {
        observer.unobserve(cardElement);
      }
    };
  }, [repo.id]);

  const animation = {
    opacity: isInView ? 1 : 0.2,
    y: isInView ? 0 : 100,
  };

  return (
    <motion.div
      id={`card${repo.id}`}
      className="blog-card--container noselect h-72 w-full sm:w-5/6"
      key={repo.id}
      animate={animation}
      transition={{ duration: 0.5 }}
    >
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        <div className="blog-card--canvas">
          <div className="tracker tr-1" />
          <div className="tracker tr-2" />
          <div className="tracker tr-3" />
          <div className="tracker tr-4" />
          <div className="tracker tr-5" />
          <div className="tracker tr-6" />
          <div className="tracker tr-7" />
          <div className="tracker tr-8" />
          <div className="tracker tr-9" />
          <div className="tracker tr-10" />
          <div className="tracker tr-11" />
          <div className="tracker tr-12" />
          <div className="tracker tr-13" />
          <div className="tracker tr-14" />
          <div className="tracker tr-15" />
          <div className="tracker tr-16" />
          <div className="tracker tr-17" />
          <div className="tracker tr-18" />
          <div className="tracker tr-19" />
          <div className="tracker tr-20" />
          <div className="tracker tr-21" />
          <div className="tracker tr-22" />
          <div className="tracker tr-23" />
          <div className="tracker tr-24" />
          <div className="tracker tr-25" />
          <div id="card">
            <motion.div
              id="prompt"
              className="col-span-2 text-lg font-bold capitalize rounded-md"
              animate={animation}
              transition={{ duration: 0.5 }}
            >
              {repo.name}
            </motion.div>
            <div className="title">
              <motion.div
                className="col-span-2 text-lg font-bold capitalize rounded-md fixed top-0 p-4"
                animate={animation}
                transition={{ duration: 0.5 }}
              >
                {repo.name}
              </motion.div>
              <motion.div
                className="col-span-2 rounded-md px-2"
                animate={animation}
                transition={{ duration: 0.3 }}
              >
                {repo.description && repo.description?.slice(0, 80) + "..." || 'No description available'}
              </motion.div>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
