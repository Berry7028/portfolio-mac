import { Inspiration } from "next/font/google";
import Image from "next/image";
import Header from "@/app/components/Header";

const inspiration = Inspiration({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="text-black">
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className={inspiration.className}>
          <h1 className="text-9xl">Please launch Safari</h1>
        </div>
      </div>
      <div className="dock-liquid flex items-center justify-center gap-4 px-6 rounded-[24px]">
        {/* ここから　アプリのアイコン */}
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center drop-shadow-lg">
          <Image
            src="/images/apps/finder.svg"
            alt="Finder"
            width={48}
            height={48}
          />
        </div>
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center drop-shadow-lg">
          <Image
            src="/images/apps/launchpad.svg"
            alt="Launchpad"
            width={48}
            height={48}
          />
        </div>
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center drop-shadow-lg">
          <Image
            src="/images/apps/messages.svg"
            alt="Messages"
            width={48}
            height={48}
          />
        </div>
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center drop-shadow-lg">
          <Image
            src="/images/apps/safari.svg"
            alt="Safari"
            width={48}
            height={48}
          />
        </div>

        {/* セパレーター */}
        <div className="w-px h-8 bg-gray-400/50" />

        {/* ゴミ箱 */}
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center drop-shadow-lg">
          <Image
            src="/images/apps/trash.svg"
            alt="Trash"
            width={48}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
