const projectslist = [
  {
    projectname: "echo - Websuite",
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
              <h2 className="p-2 font-medium">{project.projectname}</h2>
              <p className="p-2 w-64">{project.discription}</p>
              <a className="p-2" href="https://echo.uib.no/">{project.link}</a>
              <p className="border border-border p-2">{project.tech}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
