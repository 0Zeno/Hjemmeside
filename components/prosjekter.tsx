import { Link } from "lucide-react";

const groupProjects = [
  {
    projectname: "echo Webkom",
    discription:
      "Webkom er en undergruppe som drifter og videreutvikler echo sine webløsninger, blant annet denne nettsiden:",
    linknavn: "echo.uib.no",
    link: "https://echo.uib.no/",
    tech: "Remix.js",
  },
  {
    projectname: "echo Consulting",
    discription:
      "echo Consulting er en 'startup' som utvikler og drifer webløsninger for linjeforedninger og bedrifter.",
    linknavn: "echo-consulting.no",
    link: "https://echo-consulting.no/",
    tech: "Next.js",
  },
];

const schoolProjects = [
  {
    projectname: "Tetris",
    discription:
      "Lagde min versjon av tetris i java. Spillet lagde jeg ved å følge en guide som faglærer lagde til oss.",
    linknavn: "Lenke til github",
    link: "https://github.com/0Zeno/Tetris-INF101",
    tech: "Java",
    fag: "INF101",
    år: "vår 2024",
  },
  {
    projectname: "Endless Hopper",
    discription:
      "Endless hopper er et spill jeg lagde i java helt fra scratch. Spillet går ut på at man enten kan hoppe til høyre eller venstre på en platform som faller fortere og fortere. Målet er å få høyest mulig score.",
    linknavn: "Lenke til github",
    link: "https://github.com/0Zeno/EndlessHopper",
    tech: "Java",
    fag: "INF101",
    år: "vår 2024",
  },
];

export default function Projects() {
  return (
    <div className="flex">
      <div className="space-y-4">
        <h1 className="flex text-3xl text-shadow font-semibold">
          Verv
        </h1>
        <div className="flex sm:flex-row flex-col sm:space-x-4 space-y-4 sm:space-y-0">
          {groupProjects.map((project) => {
            return (
              <div key={project.projectname}>
                <div className="border border-border rounded-md p-2 w-64">
                  <p className="font-bold p-2 text-shadow">
                    {project.projectname}
                  </p>
                  <p className="p-2 w-64">{project.discription}</p>
                  <a href={project.link} className="p-2 hover:text-shadow">
                    {project.linknavn}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <h1 className="flex text-3xl text-shadow font-semibold">
          Skole prosjekter
        </h1>

        <div className="flex sm:flex-row flex-col sm:space-x-4 space-y-4 sm:space-y-0">
          {schoolProjects.map((project) => {
            return (
              <div key={project.projectname}>
                <div className="border border-border rounded-md p-2 w-64">
                  <p className="font-bold p-2 text-shadow">
                    {project.projectname}
                  </p>
                  <p className="p-2 w-64">{project.discription}</p>
                  <a href={project.link} className="p-2 hover:text-shadow">
                    {project.linknavn}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
