"use client";

import { useState } from "react";
import { Inspiration } from "next/font/google";
import Dock from "@/app/components/Dock";
import SafariWindow from "@/app/components/SafariWindow";
import { SAFARI_TABS } from "@/app/data/safariTabs";

const inspiration = Inspiration({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Desktop() {
  const [isSafariOpen, setIsSafariOpen] = useState(false);
  const [activeTabId, setActiveTabId] = useState(SAFARI_TABS[0].id);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        {!isSafariOpen && (
          <div className={inspiration.className}>
            <h1 className="text-9xl">Please launch Safari</h1>
          </div>
        )}
        {isSafariOpen && (
          <SafariWindow
            activeTabId={activeTabId}
            onChangeTab={setActiveTabId}
          />
        )}
      </div>

      <Dock onLaunchSafari={() => setIsSafariOpen(true)} />
    </>
  );
}
