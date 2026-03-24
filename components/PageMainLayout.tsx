"use client"
// components/MainLayout.tsx
import React, { ReactNode } from "react";

interface MainLayoutProps {
    children: ReactNode;
    hideScrollbar?: boolean;
}

const PagesMainLayout: React.FC<MainLayoutProps> = ({ children, hideScrollbar = false }) => {
    return (
        <div className={`
            w-full 
            max-w-7xl 
            mx-auto 
            px-4 
            sm:px-2 
            lg:px-10 
            py-4 
            transition-all 
            duration-300 
            ease-in-out
            ${hideScrollbar 
                ? 'overflow-hidden h-[calc(100vh-200px)] lg:h-auto' 
                : 'overflow-y-auto max-h-[calc(100vh-250px)] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'
            }
        `}>
            {children}
        </div>
    );
};

export default PagesMainLayout;