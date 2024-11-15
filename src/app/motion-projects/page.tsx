'use client'

import Link from 'next/link';
const MotionProjects = () => {
    return (
        <div className="p-3">
            
            {/* Header */}
            <div className="justify-center text-center text-3xl underline font-semibold">
                Projects Based on Framer Motion
            </div>

            <main className='flex m-10 flex-col gap-2'>
            <Link href='/motion-projects/smooth-scroll-animation'>1. Smooth Scroll Animation</Link>
            <Link href='/motion-projects/dropdown-menus'>2. Dropdown Menus</Link>
            </main>

        </div>
    );
};

export default MotionProjects;

