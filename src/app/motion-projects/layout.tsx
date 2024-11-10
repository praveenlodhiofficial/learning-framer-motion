import React, { ReactNode } from 'react';

interface MotionProjectsLayoutProps {
    children: ReactNode;
}

const MotionProjectsLayout = ({ children }: MotionProjectsLayoutProps) => {
    return (
        <div className="p-3">

            {/* Header */}
            <div className="justify-center text-center text-3xl underline font-semibold">
                Projects Based on Framer Motion
            </div>

            {/* Main content */}
            <main className="flex m-10">
                {children}
            </main>
        </div>
    );
};

export default MotionProjectsLayout;
