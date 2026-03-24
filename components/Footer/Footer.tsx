import React from 'react';
import RightArrow from '../RightArrow';


const Footer: React.FC = () => {
    return (
        <footer className="dark:text-white text-dark py-6 relative z-10 w-full overflow-hidden mt-auto">
            <div className="container mx-auto px-4 w-full">
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
                    <span className="hidden md:block">
                        <RightArrow />
                    </span>
                    <div className="flex items-center gap-2 text-sm sm:text-base font-medium opacity-80 hover:opacity-100 transition-opacity">
                        <p className="text-center">Made With <span className="text-red-500 animate-pulse inline-block">💓</span> By Me</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

