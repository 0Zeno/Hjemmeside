import Image from "next/image";
import { Socials } from "@/components/socials";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl text-[#ff00ff] text-center">Zeno Elio Leonardi</h1>
      <Socials />
    </div>
  );
}
