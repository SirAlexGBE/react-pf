import React from "react";
// import image from "."

export default function Hero({name, role}) {
  return (
    <section id="home" className="text-center p-10 mt-7)">
      {/* <img src="/IMG-20.jpg" h /> */}
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Hi, I'm <span className="text-blue-600">{name}</span>
      </h2>
      <h3 className="text-xl text-gray-600">{role}</h3>
    </section>
  );
}
