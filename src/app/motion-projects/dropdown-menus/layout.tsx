import React, { ReactNode } from 'react';

interface DropdownMenusLayoutProps {
    children: ReactNode;
}

const DropdownMenusLayout = ({ children }: DropdownMenusLayoutProps) => {
    return (
        <main className="p-3">
            {children}
        </main>
    );
};

export default DropdownMenusLayout;
