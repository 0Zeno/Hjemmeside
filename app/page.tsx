import Projects from "@/components/projects";
import { Socials } from "@/components/socials";

export default function Home() {
  const today = new Date();

  const birthday = new Date("2004-06-30");

  let age = today.getFullYear() - birthday.getFullYear();
  const monthdifference = today.getMonth() - birthday.getMonth();

  if (
    monthdifference < 0 ||
    (monthdifference === 0 && today.getDate() < birthday.getDate())
  ) {
    age--;
  }
  return (
    <div>
      <div className="flex flex-col p-16 pt-8 text-center">
        <h2 className="sm:text-2xl text-sm pt-6 dark:text-white text-black text-opacity-50 dark:text-opacity-50 text-shadow">
          Hei, jeg heter
        </h2>
        <h1 className="sm:text-4xl md:text-8xl text-2xl font-bold text-shadow">
          Zeno Elio Leonardi{" "}
        </h1>
        <p className="text-shadow sm:text-2xl text-xs pt-2 dark:text-white text-black text-opacity-50 dark:text-opacity-50">
          Jeg er en {age} år gammel informatikk student ved Universitetet i Bergen{" "}
        </p>
        <Socials />
      </div>
    </div>
  );
}
