"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const links = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/blog", name: "Blog" },
  { path: "/contact", name: "Contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenuOnOutsideClick = (e) => {
    const isMenu = e.target.closest(".mobile-menu");
    if (!isMenu) setIsMenuOpen(false);
  };

  return (
    <header className="bg-white py-3 shadow-sm">
      <div className="container flex items-center justify-between">
        <Link className="text-3xl font-bold text-secondary" href="/">
          <span className="text-primary">L</span>umina
          <span className="text-primary">L</span>ore
        </Link>
        <div className="md:hidden">
          <button
            className="text-2xl text-secondary"
            onClick={() => setIsMenuOpen(true)}
          >
            {isMenuOpen ? <MdClose /> : <FiMenu />}
          </button>
          <div
            className={`fixed left-0 top-0 h-screen w-full bg-black/10 ${
              !isMenuOpen ? "invisible opacity-0" : ""
            } backdrop-blur-[1px] transition-all duration-300`}
            onClick={closeMenuOnOutsideClick}
          >
            <div
              className={`mobile-menu h-full w-[70%] max-w-[300px] ${
                !isMenuOpen ? "-translate-x-full" : ""
              } bg-white p-5 transition-all duration-500`}
            >
              <Link className="text-2xl font-bold text-secondary" href="/">
                <span className="text-primary">L</span>umina
                <span className="text-primary">L</span>ore
              </Link>
              <div className="mt-4 flex flex-col divide-y divide-gray-100">
                {links.map((link) => (
                  <Link
                    href={link.path}
                    key={link.name}
                    className={`block py-2 text-lg font-medium transition-all duration-300 hover:text-primary ${
                      pathname === link.path ? "text-primary" : "text-secondary"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.name}
              className={`text-lg font-medium transition-all duration-300 hover:text-primary ${
                pathname === link.path ? "text-primary" : "text-secondary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
