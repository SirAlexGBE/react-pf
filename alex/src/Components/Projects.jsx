import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects({projects}) {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-100  ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Projects</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
