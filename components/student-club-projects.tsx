const groupProjects = [
  {
    projectname: "echo Webkom",
    role: "Leder",
    discription:
      "Webkom er en undergruppe av echo som drifter og videreutvikler echo sine webløsninger. Her bidrar jeg med utvikling av hovednettsiden og en inforskjerm på lesesalen.",
    linkname: "echo.uib.no",
    link: "https://echo.uib.no/",
    tech: "Nextjs, Drizzle, Sanity, TypeScript, Tailwind, Fly.io, Vercel",
  },
  {
    projectname: "echo Consulting",
    role: "Nestleder",
    discription:
      "Utvikler webaplikasjoner for linjeforeninger og andre studentorganisjasjoner.",
    linkname: "echo-consulting.no",
    link: "https://echo-consulting.no/",
    tech: "React Router, Sanity, TypeScript, Tailwind, Fly.io",
  },
  {
    projectname: "echo Hovedstyret",
    role: "Styremedlem",
    discription:
      "I hovedstyret til echo har vi ansvar for gjøre hverdagen til informatikkstudenter så bra som mulig. Dette gjør vi ved å styrke og ta besluttinger om undergruppene til echo.",
    linkname: "",
    link: "https://echo.uib.no/for-studenter/gruppe/hovedstyret",
    tech: "",
  },
];

export default function StudentClubProjects() {
  return (
    <div >
      <div className="flex flex-col space-y-8 ">
        {groupProjects.map((project) => {
          return (
            <div key={project.projectname} >
              <div>
                <div className="flex">
                  <p className="font-bold text-xl">{project.projectname}</p>
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
