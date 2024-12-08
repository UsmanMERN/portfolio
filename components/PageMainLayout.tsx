// components/MainLayout.tsx
import React, { ReactNode } from "react";

interface MainLayoutProps {
    children: ReactNode;
}

const PagesMainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="overflow-y-scroll max-h-[calc(100vh-250px)] scrollBar px-10">
            {children}
        </div>
    );
};

export default PagesMainLayout;
