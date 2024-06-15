"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface INavbarItem {
  title: string;
  href: string;
}

const NavbarList: INavbarItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed z-50 top-5 left-1/2 -translate-x-1/2 bg-zinc-800 p-2 rounded-full">
      <ul className="flex items-center space-x-1">
        {NavbarList.map((item) => (
          <li key={item.title} className="group">
            <div
              className={`${
                pathname === item.href
                  ? "bg-zinc-700 rounded-full"
                  : "group-hover:bg-zinc-700 group-hover:duration-300 group-hover:ease-in-out group-hover:transition-all rounded-full"
              } px-4 py-2`}
            >
              <Link href={item.href}>
                <span
                  className={`${
                    pathname === item.href
                      ? "text-zinc-200"
                      : "text-zinc-40 group-hover:text-zinc-300"
                  } text-lg font-medium`}
                >
                  {item.title}
                </span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
