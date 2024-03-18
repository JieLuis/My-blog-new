"use client";
import Skeleton from "@/app/components/Skeleton";
import React from "react";
import { PiGithubLogoFill } from "react-icons/pi";
import Link from "next/link";
import SearchInput from "./components/SearchInput";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { Box } from "@radix-ui/themes";
import { useSession } from "next-auth/react";

const NavBar = () => {
  return (
    <nav className="flex space-x-6 broder-b mb-5 px-5 h-14 items-center border border-[#33353F]">
      <Link href="/">
        <PiGithubLogoFill />
      </Link>
      <Link href="/">My Blog</Link>
      <NavLinks />
      <AuthStatus />
    </nav>
  );
};
export default NavBar;

const NavLinks = () => {
  const links = [
    { label: "Blogs", href: "/blogs" },
    { label: "About me", href: "/about-me" },
    { label: "Projects", href: "/projects" },
    { label: "instagram", href: "https://www.instagram.com/henrqaz/" },
  ];
  const currentPath = usePathname();
  return (
    <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={classNames({
              "nav-link": true,
              "!text-zinc-950": link.href === currentPath,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const AuthStatus = () => {
  const { status, data: session } = useSession();
  if (status === "loading") return <Skeleton width="3rem" />;
  if (status === "unauthenticated")
    return (
      <Link className="nav-link" href="/api/auth/signin">
        Login
      </Link>
    );
  return (
    <Box>
      <Link href="/api/auth/signout">Log out</Link>
    </Box>
  );
};
