import React from 'react';
import RightArrow from '../RightArrow';

const Footer: React.FC = () => {
    return (
        <footer className="dark:text-white light:text-dark py-4">
            <div className="container mx-auto">
                <div className="flex justify-center lg:justify-between items-center">
                    <span className='hidden lg:block'>
                    <RightArrow />
                    </span>
                    <p className=''>Made With 💓 By webTribe</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

