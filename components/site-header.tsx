import Link from "next/link";
import Image from 'next/image'

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/om",
  },
];

function Logo() {
  return (
    <Image
      src="/components/logo.png"
      width={16}
      height={16}
      alt="Picture of the author"
    />
  )
}

export function SiteHeader() {
  return (
    <header className="flex justify-between p-4 border-b border-gray-400 bg-[#7cdbf9]">
      <Logo/>
      <nav>
        {routes.map((route) => {
          return (
            <NavLink key={route.name} href={route.href}>
              {route.name}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="hover:underline text-blue-600 p-2" href={href}>
      {children}
    </Link>
  );
}

 