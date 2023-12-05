import { Link } from "lucide-react";

const projectslist = [
  {
    projectname: "echo - Webkom",
    discription:
      "Webkom is a subgroup of echo that operates and further develops echo's web solutions.",
    link: "echo.uib.no",
    tech: "Next.js",
  },
];

export default function Projects() {
  return (
    <div>
      {projectslist.map((project) => {
        return (
          <div key={project.projectname} className="pb-2 flex">
            <div className="border border-border p-2 space-y-2">
              <a href="" className="p-2 font-medium">{project.projectname}</a>
              <p className="p-2 w-64">{project.discription}</p>
              <a className="p-2 hover:underline" href="https://echo.uib.no/" target="_blank">{project.link}</a>
              <p className="border border-border p-2">{project.tech}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
