import React from "react";

export default function Header({title, links}) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-red-500 to-pink-500 shadow-md rounded-b-2xl sticky top-0">
      <h1 className="text-4xl md:text-5xl font-bold text-white transition duration-300 hover:text-yellow-300">
        <a href="#">{title}</a>
      </h1>
      <nav>
        <ul className="flex space-x-6">
          {links.map((link, index) => (
            <li key={index} className="cursor-pointer">
              <a href={link.href} className="text-lg md:text-xl text-white hover:text-yellow-300 transition duration-200">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
