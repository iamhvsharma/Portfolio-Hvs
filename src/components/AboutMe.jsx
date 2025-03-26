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
        "Journey through the coder’s world, discovering passions in every
        keystroke."
      </span>
      <span className="text-center text-8xl font-bold sm:text-5xl">
        About Me
      </span>
      <div className="flex flex-row mt-12 justify-center sm:flex-col sm:gap-8 sm:mt-0">
        <div className="w-1/4 h-fit place-self-center flex flex-row justify-center sm:w-1/2">
          <img
            className=" rounded-2xl "
            src="https://res.cloudinary.com/quickhireup/image/upload/v1736360609/Picsart_25-01-03_19-34-25-499_c6tssp.jpg"
          />
        </div>
        <div className="flex flex-col gap-12 w-2/5 sm:w-full sm:gap-4">
          <div className="flex flex-row justify-evenly sm:flex-col px-12 sm:gap-8"></div>
          <p className="w-3/4 text-lg leading-loose text-justify place-self-center sm:text-base sm:mt-8">
            "I don’t just build software—<span className="font-bold">I build experiences, systems, and
            solutions that scale.</span> From full-stack development to blockchain and
            DevOps, I explore technology’s evolving landscape to create products
            that matter. Every challenge is an opportunity to learn, innovate,
            and push the boundaries of what’s possible. The tech world moves fast, and I’m always up for the challenge of keeping up—and staying ahead."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
