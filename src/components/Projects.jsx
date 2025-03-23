import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  // Array of project objects with the correct property structure
  const projectsData = [
    {
      title: "Eternal Key",
      description:
        "The next generation of digital asset inheritance. Secure, automated, and decentralized on Solana.",
      image: "../assets/invoxify.png",
      technologies: ["Next.js", "Rust", "Anchor", "TypeScript"],
      website: "https://eternalkey.xyz",
      github: "https://github.com/user/eternal-key",
    },
    {
      title: "Eternal Key",
      description:
        "The next generation of digital asset inheritance. Secure, automated, and decentralized on Solana.",
      image: "../assets/invoxify.png",
      technologies: ["Next.js", "Rust", "Anchor", "TypeScript"],
      website: "https://eternalkey.xyz",
      github: "https://github.com/user/eternal-key",
    },
    {
      title: "Eternal Key",
      description:
        "The next generation of digital asset inheritance. Secure, automated, and decentralized on Solana.",
      image: "../assets/invoxify.png",
      technologies: ["Next.js", "Rust", "Anchor", "TypeScript"],
      website: "https://eternalkey.xyz",
      github: "https://github.com/user/eternal-key",
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
