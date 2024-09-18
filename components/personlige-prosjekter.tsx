const projects = [
  {
    projectname: "Qr converter app",
    discription:
      "Lagde en app som konverterer en url til en QR-kode som du selv kan velge størrelse på.",
    linknavn: "Se nettsiden ->",
    link: "https://url-to-qr-converter.vercel.app/",
    tech: "Nextjs, Tailwind, TypeScript, Vercel",
  },
  {
    projectname: "QR API",
    discription:
      "Lagde et API som fungerer som backend-en til QR konvertereren. Litt overdrevent å lage et API for, men gjorde det for å lære meg litt Go og hvordan HTTP fungerer.",
    linknavn: "Sjekk ut koden ->",
    link: "https://github.com/0Zeno/Tetris-INF101",
    tech: "Go, Docker, Fly.io",
  },
];

export default function PersonalProjects() {
    return(
        <div>
      <h1 className="flex text-4xl text-shadow font-semibold">
        Side prosjekter
      </h1>
      <div className="flex flex-col pt-4 space-y-4">
        {projects.map((project) => {
          return (
            <div key={project.projectname}>
              <div className="border-2 border-border rounded-md p-4 w-80 ">
                <h1 className="font-bold text-shadow text-2xl pb-2">
                  {project.projectname}
                </h1>
                <p className="pb-4">{project.discription}</p>
                <a href={project.link} className="hover:text-shadow hover:underline border-2 border-border rounded p-1 hover:bg-slate-900 text-sm ">
                  {project.linknavn}
                </a>
                <p className="text-xs pt-4">{project.tech}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    )
}