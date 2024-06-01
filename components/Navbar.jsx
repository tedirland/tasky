import React from "react";
import Link from "next/link";

const Links = [
  { href: "/client", label: "Client" },
  { href: "/drinks", label: "Drinks" },
  { href: "/prisma-example", label: "Prisma" },
  { href: "/query", label: "Query" },
  { href: "/tasks", label: "Tasks" },
];

const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link className="btn btn-primary" href="/">
          Tasky
        </Link>
        <ul className="menu menu-horizontal md:ml-8">
          {Links.map((link) => {
            return (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
