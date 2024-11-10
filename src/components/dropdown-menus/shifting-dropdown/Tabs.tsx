import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Blog from "./Blog";
import Pricing from "./Pricing";
import Products from "./Products";
import Tab from "./Tab";
import Content from "./Content";
import About from "./About";

const Tabs = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<null | "l" | "r">(null);

  const handleSetSelected = (val: number | null) => {
    setDir(val !== null && typeof selected === "number" ? (selected > val ? "r" : "l") : null);
    setSelected(val);
  };

  return (
    <div onMouseLeave={() => handleSetSelected(null)} className="rounded-3xl relative flex h-fit gap-5">
      {TABS.map((t) => (
        <Tab key={t.id} selected={selected} handleSetSelected={handleSetSelected} tab={t.id}>
          {t.title}
        </Tab>
      ))}
      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} Component={TABS[selected - 1].Component} />}
      </AnimatePresence>
    </div>
  );
};

const TABS = [
  { title: "Products", Component: Products },
  { title: "Blog", Component: Blog },
  { title: "Pricing", Component: Pricing },
  { title: "About", Component: About },
].map((n, idx) => ({ ...n, id: idx + 1 }));

export default Tabs;
