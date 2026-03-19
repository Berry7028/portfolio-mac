"use client";

import { useState } from "react";
import DockIcon from "./Dock/DockIcon";

const DOCK_ITEMS = [
  { name: "Finder", src: "/images/apps/finder.svg" },
  { name: "Launchpad", src: "/images/apps/launchpad.svg" },
  { name: "Messages", src: "/images/apps/messages.svg" },
  { name: "Safari", src: "/images/apps/safari.svg" },
  { type: "separator" as const },
  { name: "Trash", src: "/images/apps/trash.svg" },
];

export default function Dock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="dock-liquid flex items-center justify-center gap-4 px-6 rounded-[24px]">
      {DOCK_ITEMS.map((item, index) => (
        <DockIcon
          key={index}
          index={index}
          hoveredIndex={hoveredIndex}
          onMouseEnter={() =>
            item.type !== "separator" && setHoveredIndex(index)
          }
          onMouseLeave={() => setHoveredIndex(null)}
          {...(item.type === "separator"
            ? { isSeparator: true }
            : { name: item.name, src: item.src })}
        />
      ))}
    </div>
  );
}
