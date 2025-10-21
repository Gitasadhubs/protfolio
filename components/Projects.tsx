
import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          My Projects
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-slate-600">
          Here's a selection of some projects I've worked on.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
