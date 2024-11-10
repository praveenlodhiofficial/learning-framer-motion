import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Blog = () => (
  <div>
    <div className="grid grid-cols-2 gap-5">
      <a href="#">
        <img
          className="mb-2 h-20 w-full rounded object-cover"
          src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder image"
        />
        <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
        <p className="text-xs text-neutral-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
          quidem eos.
        </p>
      </a>
      <a href="#">
        <img
          className="mb-2 h-20 w-full rounded object-cover"
          src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder image"
        />
        <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
        <p className="text-xs text-neutral-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
          quidem eos.
        </p>
      </a>
    </div>
    <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
      <span>View more</span>
      <FiArrowRight />
    </button>
  </div>
);

export default Blog;
