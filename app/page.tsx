import Image from "next/image";
import { Socials } from "@/components/socials";

export default function Home() {
  return (
    <div className=" flex flex-col p-32">
      <h1 className="text-3xl">Socials:</h1>
      <Socials />
    </div>
  );
}
