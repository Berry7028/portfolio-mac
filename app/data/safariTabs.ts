export type SafariTab =
  | {
      id: string;
      title: string;
      mode: "preview";
      previewSrc: string;   // public 配下のHTML
      launchUrl: string;    // クリック時に開くURL
    }
  | {
      id: string;
      title: string;
      mode: "embedded";
      iframeUrl: string;    // kouta.codes
    };

export const SAFARI_TABS: SafariTab[] = [
  {
    id: "works-1",
    title: "Portfolio A",
    mode: "preview",
    previewSrc: "/previews/works-1/index.html",
    launchUrl: "https://example.com/works-1", 
  },
  {
    id: "works-2",
    title: "Portfolio B",
    mode: "preview",
    previewSrc: "/previews/works-2/index.html",
    launchUrl: "https://example.com/works-2",
  },
  {
    id: "works-3",
    title: "Portfolio C",
    mode: "embedded",
    iframeUrl: "https://kouta.codes",
  },
];
