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
    <Link
      className="hover:underline text-blue-600 flex flex-col justify-between"
      href={href}
    >
      {children}
    </Link>
  );
}

export function Socials() {
  return (
    <div className="flex justify-between">
      <h1>Sosiale medier</h1>
      {links.map((link) => {
        return (
          <SocialLink key={link.name} href={link.href}>
            {link.name} {link.icon}
          </SocialLink>
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
