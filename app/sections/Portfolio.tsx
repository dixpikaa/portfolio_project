'use client';
import React, { useState } from 'react';
import Heading from "../components/Heading";
import TitleBtn from "../components/TitleBtn";
import { PortfolioProjects, projectCategory } from "../constant/data";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Next Js');

  // Function to filter projects based on the selected category
  const filteredProjects = PortfolioProjects.filter(project => project.tool === selectedCategory);

  return (
    <section className="h-auto md:min-h-[100vh] py-8">
      <TitleBtn title="portfolio" />
      <Heading ftitle="Featured" stitle="Projects" />

      {/* Tabbar for categories */}
      <div className="flex items-center justify-center gap-4 mb-8">
        {projectCategory.map(item => (
          <div
            key={item.id}
            onClick={() => setSelectedCategory(item.title)}  // Update selected category
            className={`cursor-pointer flex items-center justify-center text-white gap-2 border ${
              selectedCategory === item.title ? 'bg-green-600' : 'border-green-600'
            } hover:bg-green-600 w-12 h-12 md:h-auto md:w-auto rounded-full md:rounded-md md:px-4 md:py-2 shadow-sm shadow-white`}
          >
            <span className="text-3xl p-2 md:text-xl md:p-0">{item.icon}</span>
            <span className="hidden md:inline">{item.title}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <div key={project.id} className="project-card bg-gray-800 p-4 rounded-lg shadow-lg">
              <img
                src={project.snapshoot || '/img/default.png'}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-white text-lg font-bold mt-4">{project.title}</h3>
              <div className="flex justify-between gap-2 mt-2">
                {project.github && (
                  <a
                    href={project.github}
                    className="text-green-500 hover:text-green-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {project.livedemo && (
                  <a
                    href={project.livedemo}
                    className="text-green-500 hover:text-green-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-white">No projects available in this category.</p>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
