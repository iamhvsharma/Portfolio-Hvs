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
      "Step into the coder's world, discovering passions, bit by bit." 
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
           
           
          </div>
          <p className="w-3/4 text-xl leading-loose text-justify place-self-center sm:text-lg sm:mt-8">
            
"Meet Harshvardhan, a <span className="font-bold">Web Developer and Indie Hacker </span> driven by a passion for crafting seamless digital experiences. With an unwavering commitment to innovation and problem-solving, I embrace challenges as opportunities for growth. Join me on a journey of continuous learning and meaningful contributions to the dynamic world of development."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
