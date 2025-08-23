"use client";

import React from "react";

export type MobileDockItemData = {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
};

export type MobileDockProps = {
  items: MobileDockItemData[];
  className?: string;
};

const MobileDock = ({ items, className = "" }: MobileDockProps) => {
  return (
    <div className="mx-2 flex max-w-full items-center justify-center">
      <div
        className={`flex items-center gap-3 rounded-2xl bg-background/10 dark:bg-background/20 backdrop-blur-md border border-border/20 px-2 py-2 shadow-lg ${className}`}
        role="toolbar"
        aria-label="Mobile navigation dock"
      >
        {items.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className="relative inline-flex items-center justify-center w-[50px] h-[50px] rounded-lg bg-background/10 dark:bg-background/20 backdrop-blur-md border border-border/20 shadow-lg cursor-pointer outline-none transition-opacity duration-200 active:opacity-70 hover:bg-background/20 dark:hover:bg-background/30"
            aria-label={item.label}
            type="button"
          >
            <div className="flex items-center justify-center text-foreground">
              {item.icon}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileDock;