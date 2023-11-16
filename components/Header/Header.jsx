"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname()
  return (
    <div className="bg-[#40282C]">
      <div className="w-9/12 mx-auto flex justify-between font-semibold py-8 text-white">
        <div>
          <Link href="/">
            Logo
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <NavLink href="/" currentPath={pathname}>
            Home
          </NavLink>
          <NavLink href="/about" currentPath={pathname}>
            About
          </NavLink>
          <NavLink href="/academic" currentPath={pathname}>
            Academic
          </NavLink>
          <NavLink href="/admission" currentPath={pathname}>
            Admission
          </NavLink>
          <NavLink href="/campus-life" currentPath={pathname}>
            Campus Life
          </NavLink>
          <NavLink href="/contact" currentPath={pathname}>
            Contact
          </NavLink>
          <NavLink href="/apply-now" currentPath={pathname}>
            Apply Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const NavLink = ({ href, currentPath, children }) => {
  const isActive = href === currentPath;

  return (
    <Link href={href} className={`${isActive ? "bg-white text-[#40282C]" : "text-white"
      }  px-2 py-2 rounded`}>
      {children}
    </Link>
  );
};

export default Header;
