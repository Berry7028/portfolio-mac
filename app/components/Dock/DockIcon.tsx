import Image from "next/image";

export default function DockIcon() {
  return (
    <>
      {/* 一般の icons  */}
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
    </>
  );
}
