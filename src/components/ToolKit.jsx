import React from "react";

const ToolKit = () => {
  return (
    <div className="h-screen w-full my-24 flex flex-col gap-4">
      <span className="text-center text-2xl italic">
        "Skills Unveiled: A Comprehensive Look at My Toolkit for Success."
      </span>
      <span className="text-center text-7xl"></span>
      <div className="flex flex-row mt-24 justify-center">
        <div className="flex flex-col gap-12 w-full">
          <div className="flex flex-row justify-evenly mx-36 gap-12">
            <div className="border border-gray-500 w-2/6 text-2xl flex-col flex place-items-center p-4 gap-4 rounded-2xl">
              {/* <PiMedalFill /> */}
              <span className="font-bold">Programming Languages</span>
              <div className="flex flex-row flex-wrap place-content-evenly gap-4 ">
                <p>C++</p>
                <p>Javascript</p>
              </div>
            </div>
            <div className="border border-gray-500 w-2/6 text-2xl flex-col flex place-items-center p-4 gap-4 rounded-2xl">
              {/* <PiMedalFill /> */}
              <span className="font-bold">Library / Frameworks</span>
              <div className="flex flex-row flex-wrap place-content-evenly gap-4 ">
                <p>React</p>
                <p>NextJs</p>
                <p>ExpressJs</p>
                <p>React Native</p>
                <p>Tailwind CSS</p>
              </div>
            </div>
            <div className="border border-gray-500 w-2/6 text-2xl flex-col flex place-items-center p-4 gap-4 rounded-2xl">
              {/* <PiMedalFill /> */}
              <span className="font-bold">Tools</span>
              <div className="flex flex-row flex-wrap place-content-evenly gap-4 ">
                <p>Postman</p>
                <p>VS Code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolKit;
