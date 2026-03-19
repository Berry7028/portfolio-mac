import Image from "next/image";

export default function Header() {

  const time = new Date().toLocaleTimeString();

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
      {/* left */}
      <div className="flex items-center gap-6">
        <Image
          src="/images/icon/apple.svg"
          alt="Apple"
          width={16}
          height={18}
        />
        {/* <span className="text-lg">apple</span> */}
        <span className="font-semibold">Finder</span>
        <nav className="flex gap-4 text-sm">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Window</span>
          <span>Help</span>
        </nav>
      </div>

      {/* right  */}
      <div className="flex items-center gap-4 text-sm">
        <Image
          src="/images/icon/battery.svg"
          alt="Battery"
          width={16}
          height={18}
        />
        <Image
          src="/images/icon/wifi.svg"
          alt="Wifi"
          width={16}
          height={18}
        />
        <span>{time}</span>
      </div>
    </header>
  );
}
