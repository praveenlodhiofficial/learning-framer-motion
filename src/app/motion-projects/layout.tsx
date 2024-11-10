import React, { ReactNode } from 'react';

interface MotionProjectsLayoutProps {
    children: ReactNode;
}

const MotionProjectsLayout = ({ children }: MotionProjectsLayoutProps) => {
    return (
        <main className="p-3">
            {children}
        </main>
    );
};

export default MotionProjectsLayout;
