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
        className={`flex items-center gap-3 rounded-2xl bg-card border-2 shadow-sharp px-2 py-2 ${className}`}
        role="toolbar"
        aria-label="Mobile navigation dock"
      >
        {items.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className="relative inline-flex items-center justify-center w-[50px] h-[50px] rounded-lg bg-background border cursor-pointer outline-none transition-colors duration-200 active:bg-muted hover:bg-muted"
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