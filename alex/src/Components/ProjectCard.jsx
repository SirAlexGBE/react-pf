import React from "react";

export default function ProjectCard({title, description, link}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block text-blue-600 font-medium hover:underline">
        View Project →
      </a>
    </div>
  );
}
