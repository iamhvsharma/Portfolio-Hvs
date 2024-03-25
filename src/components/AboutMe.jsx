import React from "react";
import { PiMedalFill } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdWork } from "react-icons/md";

const AboutMe = () => {
  return (
    <div
      className="h-fit w-full my-24 flex flex-col gap-8 py-12 sm:my-12 sm:py-4"
      id="about"
    >
      <span className="text-center text-2xl italic sm:text-sm">
        "Explore the coder's story and passions, one byte at a time."
      </span>
      <span className="text-center text-8xl font-bold sm:text-5xl">
        About Me
      </span>
      <div className="flex flex-row mt-12 justify-center sm:flex-col sm:gap-8 sm:mt-0">
        <div className="w-1/4 h-fit place-self-center flex flex-row justify-center sm:w-1/2">
          <img
            className=" rounded-2xl "
            src="https://res.cloudinary.com/dw58xmffd/image/upload/v1703021778/387080350_18004808654013051_2312138016343497425_n_isfqxa.jpg"
          />
        </div>
        <div className="flex flex-col gap-12 w-2/5 sm:w-full sm:gap-4">
          <div className="flex flex-row justify-evenly sm:flex-col px-12 sm:gap-8">
            <div className="border border-gray-500 w-2/6 text-2xl flex-col flex place-items-center p-4 gap-4 rounded-2xl sm:w-full">
              <PiMedalFill />
              <span className="font-bold">Experience</span>
              <p className="text-center text-xl text-gray-500">
                1 year experience in development
              </p>
            </div>
            <div className="border border-gray-500 w-2/6 text-2xl flex-col flex place-items-center p-4 rounded-2xl gap-4 sm:w-full">
              <FaPeopleGroup />
              <span className="font-bold">Education</span>
              <p className="text-center text-xl text-gray-500">
                Final Year Undergrad, Bachelor's in Computer Science from SITS
                Pune
              </p>
            </div>
          </div>
          {/* <div className="border border-gray-500 w-3/4 place-self-center text-2xl flex-col flex place-items-center p-4 rounded-2xl gap-4">
            <MdWork />

            <p className="flex flex-row gap-4 items-center font-bold">
              <span className="">Software Developer Internship</span>

              <span className="text-lg italic text-gray-500">
                Jan 2023 - Sept 2023
              </span>
            </p>
            <p className="text-center text-xl text-gray-500">
              Cloudware Solutions LLC
            </p>
            <p className="text-center text-lg text-gray-500">
              I was responsible to build a webapp using React and Integrate it
              with Firebase.
            </p>
          </div> */}
          <p className="w-3/4 text-xl leading-loose text-justify place-self-center sm:text-lg sm:mt-8">
            As a versatile and collaborative developer, I specialize in crafting
            seamless web and cross-platform solutions. My perpetual learner's
            mindset is reflected in the{" "}
            <span className="font-bold italic">learn in public</span> mantra,
            showcasing not just technical prowess but a dedicated journey of
            innovation and effective problem-solving. Throughout my digital
            endeavors, I intertwine creativity and code, ensuring each project
            becomes a testament to my evolving skills and passion for delivering
            exceptional results. With a commitment to staying at the forefront
            of technology, I navigate the ever-evolving landscape, embracing
            challenges as opportunities to grow and contribute meaningfully to
            the world of development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
