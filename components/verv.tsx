const groupProjects = [
  {
    projectname: "echo Webkom",
    role: "Nestleder",
    discription:
      "Webkom er en undergruppe som drifter og videreutvikler echo sine webløsninger. ",
    linkname: "echo.uib.no",
    link: "https://echo.uib.no/",
    tech: "Remix.js, Sanity, TypeScript, Tailwind, Fly.io",
  },
  {
    projectname: "echo Consulting",
    role: "Utvikler",
    discription:
      "echo Consulting er en 'startup' som utvikler og drifer webløsninger for linjeforedninger og bedrifter.",
    linkname: "echo-consulting.no",
    link: "https://echo-consulting.no/",
    tech: "Next.js, Sanity, Drizzle, TypeScript, Tailwind, Vercel",
  },
];

export default function StudentClubProjects() {
  return (
    <div className="flex">
      <div className="space-y-4">
        <h1 className="flex text-4xl text-shadow font-semibold">
          Verv
        </h1>
        <div className="flex flex-col space-y-4">
          {groupProjects.map((project) => {
            return (
              <div key={project.projectname}>
                <div className="border-border rounded-md p-4 w-80 border-2">
                  <p className="font-bold text-shadow text-2xl">
                    {project.projectname}
                  </p>
                  <p className="font-semibold pb-4">Rolle: {project.role}</p>
                  <p className="pb-4">{project.discription}</p>
                  <a
                    href={project.link}
                    className=" hover:text-shadow hover:underline border-2 border-border rounded p-1 hover:bg-slate-900 text-sm "
                  >
                    Se nettsiden {"->"}
                  </a>
                  <p className="text-xs pt-4">{project.tech}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
