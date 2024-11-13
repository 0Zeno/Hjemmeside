const projects = [
  {
    projectname: "Qr-konverterer",
    discription:
      "Lagde en nettside som konverterer en url til en QR-kode som du selv kan velge størrelse på. Dette gjorde jeg for å lære meg hvordan forms fungerer i React.",
    linknavn: "Se nettsiden ->",
    link: "https://url-to-qr-converter.vercel.app/",
    tech: "Nextjs, Tailwind, TypeScript, Vercel",
  },
  {
    projectname: "QR API",
    discription:
      "Lagde et API som fungerer som backend-en til QR konvertereren. Dette prosjektet langde jeg for å lære meg litt om Go og hvordan lage et rest-api.",
    linknavn: "Sjekk ut koden ->",
    link: "https://github.com/0Zeno/Tetris-INF101",
    tech: "Go, Docker, Fly.io",
  },
];

export default function PersonalProjects() {
  return (
    <div>
      <div className="flex flex-col space-y-8">
        {projects.map((project) => {
          return (
            <div key={project.projectname}>
              <div>
                <h1 className="font-bold text-xl">
                  {project.projectname}
                </h1>
                <p className="text-xs pb-4 opacity-70">{project.tech}</p>
                <p className="pb-4">{project.discription}</p>
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
    </div>
  );
}
