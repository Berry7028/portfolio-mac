"use client";

import { SAFARI_TABS } from "@/app/data/safariTabs";

type Props = {
  activeTabId: string;
  onChangeTab: (id: string) => void;
};

export default function SafariWindow({ activeTabId, onChangeTab }: Props) {
  const activeTab = SAFARI_TABS.find((tab) => tab.id === activeTabId) ?? SAFARI_TABS[0];

  return (
    <section className="w-[1100px] h-[720px] rounded-2xl overflow-hidden bg-white shadow-2xl">
      <div className="flex gap-2 border-b px-4 py-3">
        {SAFARI_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChangeTab(tab.id)}
            className={tab.id === activeTabId ? "font-bold" : "opacity-60"}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="h-[calc(100%-56px)]">
        {activeTab.mode === "embedded" ? (
          <iframe
            src={activeTab.iframeUrl}
            title={activeTab.title}
            className="w-full h-full border-0"
          />
        ) : (
          <div className="relative w-full h-full">
            <iframe
              src={activeTab.previewSrc}
              title={activeTab.title}
              className="w-full h-full border-0 pointer-events-none"
            />
            <a
              href={activeTab.launchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              aria-label={`${activeTab.title} を新規タブで開く`}
            />
          </div>
        )}
      </div>
    </section>
  );
}
