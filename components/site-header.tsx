import Link from "next/link";

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
];

export function SiteHeader() {
  return (
    <header className="flex justify-between px-4 border-b border-gray-400">
      <h1 className="p-4 text-4xl font-medium">Zeno Elio Leonardi</h1>
      <nav className="pt-6 text-lg font-medium">
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
    <Link className="hover:text-blue-600 p-2" href={href}>
      {children}
    </Link>
  );
}
