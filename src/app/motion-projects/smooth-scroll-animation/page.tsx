'use client'

import { Hero } from '@/components/SmoothScrollAnimation/Hero';
import { Nav } from '@/components/SmoothScrollAnimation/Nav';
import { Schedule } from '@/components/SmoothScrollAnimation/Schedule';
import ReactLenis from '@studio-freight/react-lenis';

export const page: React.FC<{ generateStaticParams?: () => any }> = () => {
  return (
    <div className="bg-zinc-950">

      <div className="justify-center text-center text-3xl underline font-semibold">
        Smooth Scroll Animation
      </div>

      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Nav />
        <Hero />
        <Schedule />
      </ReactLenis>
    </div>
  );
};

export default page;
