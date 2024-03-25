import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ data }) => {
  return (
    <div className="shadow-lg w-3/12 flex-col flex place-content-between rounded-2xl pb-8 hover:shadow-2xl bg-blue-100 sm:w-full ">
      <div className="flex flex-col gap-4 p-8 sm:gap-2">
        <p className="text-4xl font-bold mb-8 sm:text-3xl">{data.title}</p>
        <div className="flex flex-row flex-wrap gap-4">
          {data.skills.map((skill) => {
            return (
              <p
                key={skill}
                className="px-4 py-2 rounded-2xl border border-blue-200 text-base sm:text-sm sm:px-2 sm:py-2"
              >
                {skill.toString().toUpperCase()}
              </p>
            );
          })}
        </div>
        <p className="text-left text-lg text-gray-500 w-full mt-4">
          {data.content}
        </p>
      </div>
      <div className="flex flex-row gap-4 px-8 ">
        <a
          href={data.demoUrl}
          className="p-4 px-12 rounded-2xl text-xl font-bold border border-blue-300 flex flex-row place-items-center gap-4 hover:bg-blue-500 hover:text-white sm:text-sm sm:px-4 sm:gap-2"
        >
          <FiExternalLink />
          Demo
        </a>
        <a
          href={data.readmore}
          className="p-4 px-12 rounded-2xl text-xl font-bold border border-blue-300 flex flex-row place-items-center gap-4 hover:bg-blue-500 hover:text-white sm:text-sm sm:px-4 sm:gap-2"
        >
          <FaGithub />
          Read More
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
