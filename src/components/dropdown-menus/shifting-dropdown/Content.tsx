import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Products from "./Products";
import Pricing from "./Pricing";
import Blog from "./Blog";

const TABS = [
  { title: "Products", Component: Products, id: 1 },
  { title: "Blog", Component: Blog, id: 2 },
  { title: "Pricing", Component: Pricing, id: 3 },
  { title: "About", Component: Pricing, id: 4 },
];

interface ContentProps {
  dir: "r" | "l" | null;
  selected: number;
  Component: React.ComponentType;
}

const Content = ({ selected, dir, Component }: ContentProps) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className="absolute top-[calc(100%_+_20px)] w-[400px] rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
    >
      <Bridge />
      <Nub selected={selected} />
      <Component />
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[20px] left-0 right-0 h-[20px]" />
);

const Nub = ({ selected }: { selected: number | null }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;
      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{ clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)" }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};

export default Content;
