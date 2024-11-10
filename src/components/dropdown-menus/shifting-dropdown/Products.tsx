import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Products = () => (
  <div>
    <div className="flex gap-5">

      <div>
        <h3 className="mb-2 text-sm font-medium">Branding</h3>
        <a href="#" className="mb-1 block text-xs text-neutral-400">Logo Design</a>
        <a href="#" className="mb-1 block text-xs text-neutral-400">Brand Strategy</a>
        <a href="#" className="block text-xs text-neutral-400">Visual Identity</a>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Web Development</h3>
        <a href="#" className="mb-1 block text-xs text-neutral-400">Custom Websites</a>
        <a href="#" className="mb-1 block text-xs text-neutral-400">E-commerce Solutions</a>
        <a href="#" className="block text-xs text-neutral-400">Web Apps</a>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Digital Marketing</h3>
        <a href="#" className="mb-1 block text-xs text-neutral-400">SEO Optimization</a>
        <a href="#" className="mb-1 block text-xs text-neutral-400">Social Media</a>
        <a href="#" className="block text-xs text-neutral-400">Email Campaigns</a>
        <a href="#" className="block text-xs text-neutral-400">Content Creation</a>
      </div>
    </div>
    <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
      <span>View more</span>
      <FiArrowRight />
    </button>
  </div>
);

export default Products;
