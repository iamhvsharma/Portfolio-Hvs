import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { AiFillInstagram } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="flex flex-row justify-center place-items-center gap-24 p-24  sm:flex-col sm:p-8 sm:gap-12">
        <div className="flex flex-row justify-center items-center w-1/2 sm:w-1/2">
          <img
            className="rounded-full"
            src="https://github.com/rohan-kulkarni-25.png"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-16 sm:w-full sm:gap-8">
          <span className="text-4xl sm:text-2xl">
            &mdash; Hello, I'm Harshvardhan 👋
          </span>
          <div className="flex flex-col gap-4">
            <span className="text-8xl  font-bold sm:text-5xl">Software</span>
            <span className="font-bold text-8xl font-mono sm:text-5xl">
              {" "}
              Developer
            </span>
            <span className="text-4xl italic relative sm:text-xl">
              embarking on the DevOps Journey 🛳
            </span>
          </div>
          <div className="flex flex-row gap-12 ">
            <a
              href="https://drive.google.com/file/d/1ZNf5yIXKoX9VSCdWXewLq2xqRtvdMTUE/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="border-blue-300 border hover:bg-blue-500 hover:text-white  p-4 rounded-2xl text-xl shadow-xl sm:text-sm sm:p-3"
            >
              📄 Download Resume
            </a>
            <a
              href="mailto:rohank2502@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="border-blue-300 border hover:bg-blue-500 hover:text-white  p-4 rounded-2xl text-xl shadow-xl sm:text-sm sm:p-3"
            >
              📩 Get In Touch
            </a>
          </div>
          <div className="text-5xl flex flex-row gap-8 sm:text-3xl">
            <a
              href="https://twitter.com/rohan_2502"
              target="_blank"
              rel="noreferrer"
            >
              <FaSquareXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-k-2502/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/rohankulkarni.dev/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://github.com/rohan-kulkarni-25"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-yellow-200 w-fit mx-auto p-8 rounded-2xl text-center text-2xl sm:text-lg sm:text-justify sm:rounded-none sm:w-full">
        Fusing Passion with Community: Co-Creating Experiences at
        <span className="font-bold italic"> React India </span>
        and Sparking Innovation with
        <span className="font-bold italic"> Hack The League</span>.
      </div>
    </div>
  );
};

export default Hero;
