import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  let ProjectList = [
    {
      title: "DevsDiary.com",
      content: "More details will be added soon...",
      skills: ["React", "Appwrite", "Tailwind"],
      demoUrl: "",
      readmore: "",
    },
    {
      title: "ChatSummarizer",
      content: "More details will be added soon...",
      skills: ["React", "Open Ai", "Express JS", "Tailwind"],
      demoUrl: "",
      readmore: "",
    },
    {
      title: "TopPick Tweets",
      content: "More details will be added soon...",
      skills: ["React", "REST API", "TailwindCSS", "Twitter API"],
      demoUrl: "",
      readmore: "",
    },
  ];

  return (
    <div
      className="h-fit w-full my-24 flex flex-col gap-8 py-12 min-h-screen"
      id="projects"
    >
      <span className="text-center text-2xl italic sm:text-lg">
        "Beyond Syntax, Writing Code That Matter."
      </span>
      <span className="text-center text-8xl font-bold sm:text-5xl">
        Projects
      </span>
      <span className="text-center text-2xl text-gray-500 italic sm:text-sm px-8">
        As the projects need to be deployed it will take some time to get this
        section update but for sure before 2024
      </span>
      <div className="opacity-25 flex flex-row flex-wrap gap-16 mt-12 justify-center sm:gap-4 sm:flex-col px-8">
        {ProjectList.map((project) => {
          return <ProjectCard key={project.title} data={project} />;
        })}
      </div>
      {/* <div className="mx-auto mt-24">
        <button
          className="p-4 px-12 rounded-2xl text-xl font-bold border border-blue-300 flex flex-row place-items-center gap-4 hover:bg-blue-500 hover:text-white "
          disabled={true}
        >
          Check More
        </button>
      </div> */}
    </div>
  );
};

export default Projects;
