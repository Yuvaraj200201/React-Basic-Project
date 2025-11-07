import React from "react";
import { FaList } from "react-icons/fa";

function Navbar({ navLinks, handleToggle }) {
  return (
    <nav className="bg-gray-900 text-white p-3 w-full sticky top-0">
      <div className="flex justify-between items-center px-1 sm:px-4">
        <h1 className="text-lg sm:text-3xl">
          🚀<b>MyWebsite</b>
        </h1>
        <button className="md:hidden" onClick={handleToggle}>
          <FaList className="md:size-9 sm:size-7 size-4  hover:text-yellow-500" />
        </button>
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.index}>
              <a
                className="flex items-center gap-1 hover:text-blue-700"
                href={link.href}
              >
                <span className="text-2xl">
                  {link.icon}
                </span>
                <span className="font-semibold">
                  {link.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
