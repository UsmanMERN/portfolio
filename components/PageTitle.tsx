// components/PageTitle.tsx
import React from "react";

interface PageTitleProps {
    title: string;
    subtitle: string;
    icon?: React.ReactNode;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle, icon }) => (
    <div className="space-y-6 pt-8 pb-12 text-center md:text-left transition-all duration-700">
        <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="h-[1px] w-8 bg-blue-600 dark:bg-blue-400"></div>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-blue-600 dark:text-blue-400">
                {title}
            </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 dark:text-white leading-[0.9]">
            {title}.
        </h1>
        
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl font-medium leading-relaxed">
            {subtitle}
        </p>
    </div>
);

export default PageTitle;