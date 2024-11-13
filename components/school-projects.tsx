const projects = [
  {
    projectname: "Endless Hopper",
    discription:
      "Endless hopper er et spill jeg lagde i java helt fra scratch. Spillet går ut på at man enten kan hoppe til høyre eller venstre på en platform som faller fortere og fortere. Målet er å få høyest mulig score.",
    linknavn: "Sjekk ut koden ->",
    link: "https://github.com/0Zeno/EndlessHopper",
    tech: "Java",
    fag: "INF101",
    år: "vår 2024",
  },
  {
    projectname: "Tetris",
    discription:
      "Lagde min versjon av tetris i java. Spillet lagde jeg ved å følge en guide som faglærer lagde til oss.",
    linknavn: "Sjekk ut koden ->",
    link: "https://github.com/0Zeno/Tetris-INF101",
    tech: "Java",
    fag: "INF101",
    år: "vår 2024",
  },
];

export default function SchoolProjects() {
  return (
    <div>
      <h1 className="flex text-4xl text-shadow font-semibold">
        Skole prosjekter
      </h1>
      <div className="pt-4 space-y-4">
        {projects.map((project) => {
          return (
            <div key={project.projectname}>
              <div className="border-2 border-border rounded-md p-4">
                <p className="font-bold text-shadow text-2xl">
                  {project.projectname}
                </p>
                <p className="font-semibold">{project.fag}</p>
                <p className="pt-2 pb-4">{project.discription}</p>
                <a
                  href={project.link}
                  className="hover:text-shadow hover:underline border-2 border-border rounded p-1 hover:bg-slate-900 text-sm "
                >
                  {project.linknavn}
                </a>
                <p className="text-xs pt-4">{project.tech}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
