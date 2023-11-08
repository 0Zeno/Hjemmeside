import { Github, Instagram, Mail } from "lucide-react";
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
    <div className="flex flex-col">
      {links.map((link) => {
        return (
          <div className="flex flex-row justify-between">
            <SocialLink key={link.name} href={link.href}>
              {link.name} 
            </SocialLink>
            <div className="">
            {link.icon}
            </div>
          </div>
        );
      })}
    </div>
  );
}

const links = [
  {
    name: "instagram",
    href: "/",
    icon: <Instagram />,
  },
  {
    name: "mail",
    href: "/",
    icon: <Mail />,
  },
  {
    name: "github",
    href: "https://github.com/0Zeno",
    icon: <Github />,
  },
];
