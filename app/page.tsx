import { Inspiration } from "next/font/google";
import Header from "@/app/components/Header";
import Desktop from "@/app/components/Desktop";

const inspiration = Inspiration({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="text-black">
      <Header />
      <div className="flex items-center justify-center">
      </div>
      <Desktop/>
    </div>
  );
}
