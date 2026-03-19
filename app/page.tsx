import Header from "@/app/components/Header";
import { Inspiration } from "next/font/google";

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
      <div className="dock-liquid"></div>
    </div>
  );
}