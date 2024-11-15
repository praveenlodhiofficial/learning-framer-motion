import { div } from "framer-motion/client";
import React, { ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";

const Tab = ({ children, tab, handleSetSelected, selected }: {
    children: ReactNode;
    tab: number;
    handleSetSelected: (val: number | null) => void;
    selected: number | null;
}) => {
    return (
        <div className="">
            <button
                id={`shift-tab-${tab}`}
                onMouseEnter={() => handleSetSelected(tab)}
                onClick={() => handleSetSelected(tab)}
                className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${selected === tab ? " bg-neutral-800 text-neutral-100" : "text-neutral-400"
                    }`}
            >
                <span>{children}</span>
                <FiChevronDown className={`transition-transform ${selected === tab ? "rotate-180" : ""}`} />
            </button>
        </div>
    );
};

export default Tab;
