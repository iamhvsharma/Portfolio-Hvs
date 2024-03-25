import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
const CommunityCard = ({ data }) => {
  return (
    <div className="shadow-lg w-3/12 flex-col flex place-content-between rounded-2xl pb-8 hover:shadow-2xl sm:w-full">
      <div className="flex flex-col gap-4 p-8 sm:p-2">
        <p className="text-4xl font-bold mb-8">{data.title}</p>
        <img src={data.url} className="rounded-2xl" />
        <p className="text-left text-lg text-gray-500 w-full mt-4 sm:text-sm">
          {data.content}
        </p>
      </div>
      {/* <div className="flex flex-row gap-4 px-8 ">
        <button className="p-4 px-12 rounded-2xl text-xl font-bold border border-blue-300 flex flex-row place-items-center gap-4 hover:bg-blue-500 hover:text-white ">
          <FiExternalLink />
          Explore More
        </button>
      </div> */}
    </div>
  );
};

export default CommunityCard;
