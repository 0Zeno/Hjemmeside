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
    <div className="flex py-8">
      <div className="flex flex-col p-2 space-y-2 border">
        {links.map((link) => {
          return (
            <SocialLink key={link.name} href={link.href}>
              <Button
                variant="outline"
                size="icon"
                className="justify-between w-72 h-12 p-2"
              >
                <div className="flex flex-col text-left">
                  <div className="">{link.name}</div>
                  <p className="text-[10px]">{link.username}</p>
                </div>
                <div>{link.icon}</div>
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
    icon: <Github />,
    username: "@0Zeno",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/zeno-elio-leonardi-60ba58225/",
    icon: <Linkedin />,
    username: "in/Zeno Elio Leonardi",
  },
  {
    name: "Mail",
    href: "mailto:zenoelioleone@gmail.com",
    icon: <Mail />,
    username: "Zenoelioleone@gmail.com",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/zenoelio/",
    icon: <Instagram />,
    username: "@Zenoelio",
  },
];
