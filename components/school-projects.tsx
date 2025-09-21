const projects = [

  {
    projectname: "MessageFormat 2 bibliotek i Svelte",
    discription:
      "MessageFormat 2 er en Unicode standard for lokalisering av dynamiske strenger. Jobber i et team på 3 studenter for å implementere et Svlete bibliotek.",
    linknavn: "Sjekk ut koden ->",
    link: "https://github.com/tonylam750/svelte-mf2",
    tech: "TypeScript, Svelte",
    fag: "INF218",
    år: "Høst 2025",
  },
  {
    projectname: "Endless Hopper",
    discription:
      "Endless hopper er et spill jeg lagde i java helt fra scratch. Spillet går ut på at man enten kan hoppe til høyre eller venstre på en platform som faller fortere og fortere. Målet er å få høyest mulig score.",
    linknavn: "Sjekk ut koden ->",
    link: "https://github.com/0Zeno/EndlessHopper",
    tech: "Java",
    fag: "INF101",
    år: "Vår 2024",
  },
  {
    projectname: "Tetris",
    discription:
      "Lagde min versjon av tetris i java. Spillet lagde jeg ved å følge en guide som faglærer lagde til oss.",
    linknavn: "Sjekk ut koden ->",
    link: "https://github.com/0Zeno/Tetris-INF101",
    tech: "Java",
    fag: "INF101",
    år: "Vår 2024",
  },
];

export default function SchoolProjects() {
  return (
    <div className="space-y-8">
      {projects.map((project) => {
        return (
          <div key={project.projectname}>
            <div>
              <div className="flex">
                <p className="font-bold text-xl">{project.projectname}</p>
                <ul className="pt-1 pl-6 list-disc">
                  <li className="opacity-70 font-semibold">{project.fag}</li>
                </ul>
              </div>
              <p className="text-xs pb-4 opacity-70">{project.tech}</p>
              <p className=" pb-4">{project.discription}</p>
              <a
                href={project.link}
                className="hover:text-shadow hover:underline text-sm "
              >
                {project.linknavn}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
