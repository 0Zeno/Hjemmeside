import { Link } from "lucide-react";

const projectslist = [
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
      "echo Consulting er en 'startup' som utvikler og drifer webløsninger for linjeforedninger.",
      linknavn: "echo-consulting.no",
    link: "https://echo-consulting.no/",
    tech: "Next.js",
  },
];

export default function Projects() {
  return (
    <div className="flex">
      <div className="flex md:flex-row md:space-x-2 space-y-2 md:space-y-0 flex-col">

      {projectslist.map((project) => {
        return (
          <div key={project.projectname}>
            <div className="border border-border p-2">
              <p className="font-bold p-2 text-shadow">{project.projectname}</p>
              <p className="p-2 w-64">{project.discription}</p>
              <a href={project.link} className="p-2 hover:text-shadow">{project.linknavn}</a>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}
