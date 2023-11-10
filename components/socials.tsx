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
      <Link className="flex" href={href}>
        {children}
      </Link>
    </div>
  );
}

export function Socials() {
  return (
    <div className="flex py-8">
      <div className="flex flex-col p-2 space-y-2 border border-gray-400">
        {links.map((link) => {
          return (
            <SocialLink key={link.name} href={link.href}>
              <div className="flex flex-row justify-between w-64 border border-gray-400 p-2 hover:bg-[#CACACA]">
                {link.name}
                <div className="">{link.icon}</div>
              </div>
            </SocialLink>
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
    icon: <Linkedin />,
  },
];
