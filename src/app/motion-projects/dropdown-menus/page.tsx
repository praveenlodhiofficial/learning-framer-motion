'use client'

import Link from 'next/link';
const MotionProjects = () => {
    return (
        <div className="p-3">
            
            {/* Header */}
            <div className="justify-center text-center text-3xl underline font-semibold">
                Dropdown Menus using Framer Motion
            </div>

            <main className='flex m-10 flex-col gap-2'>
            <Link href='/motion-projects/dropdown-menus/shifting-dropdown'>1. Shifting Menu</Link>
            </main>
        </div>
    );
};

export default MotionProjects;

