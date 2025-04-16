import React from "react";

export default function About({description}) {
  return (
    <section id="about" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-600">{description}</p>
        </div>
        <div>
          <img src="/IMG-20.jpg" alt="About me" className="h-auto w-96 rounded-2xl shadow-lg" />
        </div>
      </div>
    </section>
  );
}
