'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BasicsOfMotion = () => {
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="p-3">
      <div className="justify-center text-center text-3xl underline font-semibold">
        Basics of Motion
      </div>

      <main className="flex m-10">

        {/* Black Box */}
        <div className="gap-5 w-full flex flex-col">
          <motion.button
            onClick={() => setIsVisible(!isVisible)}
            className="text-white rounded text-start"
            // layout
          >
            1. Animate Black Box
          </motion.button>
          <AnimatePresence>
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: '0deg' }}
                animate={{ opacity: 1, scale: 1, rotate: '180deg' }}
                exit={{ opacity: 0, scale: 0.5, rotate: '0deg' }}
                transition={{ duration: 1, ease: 'backInOut' }}
                className="ml-5 bg-slate-100 h-24 w-24"
              ></motion.div>
            )}
          </AnimatePresence>
        </div>

      </main>
    </div>
  );
};

export default BasicsOfMotion;



/* 
  KEY POINTS: 

  1. Initial values: The initial state of the element.
  2. Animate values: The final state of the element.
  3. Transition: A configuration object that specifies how the element should transition from its initial state to its animate state.
  4. Motion.div: A component provided by Framer Motion that renders a div element.
  6. motion: An object that contains properties for motion.
  7. initial: An object that contains properties for the initial state.
  8. animate: An object that contains properties for the animate state.
  9. transition: An object that contains properties for the transition.
  10. AnimatePresence: A component provided by Framer Motion that renders its children only when they are present in the DOM. It automatically handles adding and removing the children based on their presence in the DOM.
                                  Simply it is used to perform exit animations when
  11. Layout: It is a prop in framer-motion is useful for animating smooth transitions when an element's position or dimensions change in response to layout shifts.

*/

