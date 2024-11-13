import { GamepadIcon, Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

function SocialLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Link target="_blank" className="flex" href={href}>
        {children}
      </Link>
    </div>
  );
}

export function Socials() {
  return (
    <div className="flex pt-6 justify-center">
      <div className="flex md:flex-row flex-col">
        {links.map((link) => {
          return (
            <SocialLink key={link.name} href={link.href}>
              <Button
                variant="backgroudblur"
                size="icon"
                className="w-auto p-2"
              >
                <div className="drop-shadow-md">{link.icon}</div>
                <div className="flex flex-col text-left">
                  <p className="text-sm">{link.username}</p>
                </div>
              </Button>
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
    icon: <Github className="h-4" />,
    username: "@0Zeno",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/zeno-elio-leonardi-60ba58225/",
    icon: <Linkedin className="h-4"/>,
    username: "in/Zeno Elio Leonardi",
  },
  {
    name: "Mail",
    href: "mailto:zenoelioleone@gmail.com",
    icon: <Mail className="h-4"/>,
    username: "Zenoelioleone@gmail.com",
  },
];
