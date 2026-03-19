import { Inspiration } from "next/font/google";
import Header from "@/app/components/Header";
import Dock from "./components/Dock";

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
      {/* ここにドック */}
      <Dock/>
    </div>
  );
}
