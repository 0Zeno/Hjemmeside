import { AboutMe } from "@/components/about";

export default function About() {
  return (
    <div className="flex flex-col content-center p-16">
      <h1 className="flex text-3xl">About me</h1>
      <AboutMe/>
    </div>
  );
}
