import React from "react";
import ProjectCard from "./ProjectCard";
import invoxify from "../assets/invoxify.png";
import bookease from "../assets/bookease.png";
import quickhireup from "../assets/quickhireup.png";
import djangox from "../assets/djangox.png";

const Projects = () => {
  // Array of project objects with the correct property structure
  const projectsData = [
    {
      title: "Invoxify",
      description:
        "A Invoice management system for freelancers and small businesses.",
      image: invoxify,
      technologies: ["Next.js", "PostgreSQL", "TypeScript"],
      website: "https://project.invoxify.vercel.app",
      github: "https://github.com/iamhvsharma/Bookease",
    },
    {
      title: "Bookease",
      description:
        "Bookease is plaform where you can book meetings with ease. Saving time and effort.",
      image: bookease,
      technologies: ["Next.js", "PostgreSQL", "TypeScript"],

      website: "https://project-bookease.vercel.app",
      github: "https://github.com/iamhvsharma/Bookease",
    },
    {
      title: "QuickHireup",
      description:
        "I build backend of a Job/Internship Platform. The project was build in SIH-24 Hackathon Finals.",
      image: quickhireup,
      technologies: ["Node.js", "Express.js", "MongoDB", "Javascript"],
      // website: "https://eternalkey.xyz",
      github: "https://github.com/iamhvsharma/quickhireup-internal",
    },
  
    {
      title: "Django-X",
      description:
        "A basic CRUD application built using Django to understand Django & its functionalities.",
      image: djangox,
      technologies: ["Django", "Python", "Sqlite3"],
      // website: "https://eternalkey.xyz",
      github: "https://github.com/iamhvsharma/Django-X",
    },
    
   
    // ...other projects
  ];

  return (
    <div
      className="h-fit w-full my-24 flex flex-col gap-8 py-12 sm:my-12 sm:py-4"
      id="projects"
    >
      <span className="text-center text-2xl italic sm:text-sm">
        "The best way to learn a technology is by building projects."
      </span>
      <span className="text-center text-8xl font-bold sm:text-5xl">
        Projects
      </span>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Projects Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
