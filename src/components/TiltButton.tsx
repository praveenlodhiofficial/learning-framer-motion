'use client'

import React from 'react';
import { motion } from 'framer-motion';

interface TiltButtonProps {
    text: string;
}

const TiltButton: React.FC<TiltButtonProps> = ({ text }) => {
    return (
        <div className='gap-10 flex flex-col'>
            <motion.button
                className="rounded-xl bg-black text-xs text-white px-6 py-3 hover:rounded-full font-semibold border-l-"
                whileHover={{ rotate: -2.5, scale: 1.05 }} // Adjust the angle to match the desired tilt
                whileTap={{ rotate: 1.5, scale: 0.95 }} // Adjust the angle to match the desired tilt
                transition={{ tansition: 0.3, type: "spring", stiffness: 300, damping: 10 }}
            >
                {text}
            </motion.button>
            
            <div className='h-12 w-30 rounded-md bg-black'>
            </div>

            <div className="perspective-container">
  <button className="tilt-button px-6 py-2 bg-blue-500 text-white font-semibold rounded-md transition-transform duration-110 hover:rotate-y-3d">Tilted Button</button>
</div>


            </div>
    );
};

export default TiltButton;
