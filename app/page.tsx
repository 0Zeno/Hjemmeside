import { Socials } from "@/components/socials";


export default function Home() {
  const dayBorn = new Date("06/30/2004");
  const today = new Date();
  const age = today.getFullYear() - dayBorn.getFullYear() - 1;
  return (
    <div className="flex flex-col p-16 pt-24 text-center">
      <h2 className="sm:text-2xl text-md pt-6 dark:text-white text-black text-opacity-50 dark:text-opacity-50">Hei, jeg heter</h2>
      <h1 className="sm:text-4xl md:text-8xl text-3xl font-bold text-shadow">Zeno Elio Leonardi </h1>
      <p className="sm:text-2xl text-md pt-6 dark:text-white text-black text-opacity-50 dark:text-opacity-50">Jeg er en <span className="text-shadow">{age} år</span> gammel <span className="text-shadow">informatikk student</span> ved <span className="text-shadow">Universitetet i Bergen</span> </p>
      <Socials />
    </div>
  );
}
