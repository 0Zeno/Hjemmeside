import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

function SocialLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Link className="hover:underline text-blue-600 flex" href={href}>
        {children}
      </Link>
    </div>
  );
}

export function Socials() {
  return (
    <div className="flex justify-center py-8">
      <div className="flex flex-col p-2 space-y-2 border border-gray-400">
        <h1 className="text-center">Contacts:</h1>
        {links.map((link) => {
          return (
            <div className="flex flex-row justify-between border border-gray-400 p-2">
              <SocialLink key={link.name} href={link.href}>
                {link.name}
              </SocialLink>
              <div className="pl-32">{link.icon}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const links = [
  {
    name: "Github",
    href: "https://github.com/0Zeno",
    icon: <Github />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/zeno-elio-leonardi-60ba58225/",
    icon: <Linkedin/>
  },
  {
    name: "Mail",
    href: "mailto:zenoelioleone@gmail.com",
    icon: <Mail />,
  },
];
