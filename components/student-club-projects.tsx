const groupProjects = [
  {
    projectname: "echo Webkom",
    role: "Nestleder",
    discription:
      "Webkom er en undergruppe av echo som drifter og videreutvikler echo sine webløsninger. Her har jeg rollen som nestleder. Denne rollen gir meg et større ansvar for rekrutering, arrangering av møter og opplæring av nye medlemmer.",
    linkname: "echo.uib.no",
    link: "https://echo.uib.no/",
    tech: "Nextjs, drizzle, Sanity, TypeScript, Tailwind, Fly.io",
  },
  {
    projectname: "echo Consulting",
    role: "Nestleder",
    discription:
      "echo Consulting er en undergruppe av echo som driver med webutvikling for andre linjeforeninger. Vi har blant annet laget nettside for LFFH (linjeforenigen for fiskehelse og havbruk) og jobber for tiden med NHH analytics sin nettside.",
    linkname: "echo-consulting.no",
    link: "https://echo-consulting.no/",
    tech: "Remix.js, Sanity, TypeScript, Tailwind, Fly.io",
  },
];

export default function StudentClubProjects() {
  return (
    <div>
      <div className="flex flex-col space-y-8">
        {groupProjects.map((project) => {
          return (
            <div key={project.projectname}>
              <div>
                <div className="flex">
                  <p className="font-bold text-xl ">{project.projectname}</p>
                  <ul className="list-disc px-6">
                    <li className="font-semibold pt-1 opacity-70">
                      {project.role}
                    </li>
                  </ul>
                </div>
                <p className="text-xs pb-4 opacity-70">{project.tech}</p>
                <p className="pb-4">{project.discription}</p>
                <a
                  href={project.link}
                  className=" hover:text-shadow hover:underline text-sm "
                >
                  Se nettsiden {"->"}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
