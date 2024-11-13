import { Socials } from "@/components/socials";

export default function Home() {
  return (
    <div className="flex flex-col p-16 pt-24 text-center">
      <h2 className="sm:text-2xl text-sm pt-6 dark:text-white text-black text-opacity-50 dark:text-opacity-50 text-shadow">Hei, jeg heter</h2>
      <h1 className="sm:text-4xl md:text-8xl text-2xl font-bold text-shadow">Zeno Elio Leonardi </h1>
      <p className="text-shadow sm:text-2xl text-xs pt-2 dark:text-white text-black text-opacity-50 dark:text-opacity-50">Jeg er en 20 år gammel informatikk student ved Universitetet i Bergen </p>
      <Socials />
    </div>
  );
}
