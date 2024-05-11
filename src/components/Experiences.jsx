const Experiences = () => {
  return (
    <div
      className="h-fit w-full my-24 flex flex-col gap-8 py-12 sm:my-12 sm:py-12" id="experience"
    >
      <span className="text-center text-2xl italic sm:text-lg">
        "Beyond college, taking real life experience."
      </span>
      <span className="text-center text-8xl font-bold sm:text-5xl">
        Experience
      </span>
      <div className="flex flex-col place-items-center gap-12 mt-12 justify-center ">
        <div className="border border-gray-400 w-3/4 flex-row flex place-content-between p-4 rounded-2xl gap-24 sm:flex-col sm:gap-8">
          <div className="flex flex-col gap-1  justify-center items-center font-bold w-96 sm:w-full">
            <span className="text-2xl">Web Developer</span>
            <p className="text-center text-lg text-gray-500">
              Freelance
            </p>
            <span className="text-sm italic text-gray-500">
              Jan 2023 - Present
            </span>
          </div>

          <p className="text-left text-lg text-gray-500 w-full sm:text-sm">
            As a Freelance Developer I create stunning websites for my Clients. I assure to serve the best quality websites to my clients and Grow their Business Online. Currently I use MERN Stack and new technologies to build fast, responsive and reliable Web Apps.
          
          </p>
        </div>
         <div className="border border-gray-400 w-3/4 flex-row flex place-content-between p-4 rounded-2xl gap-24">
          <div className="flex flex-col gap-1  justify-center items-center font-bold w-96">
            <span className="text-2xl">Indie Hacker</span>
            <p className="text-center text-lg text-gray-500">
              Developing Products
            </p>
            <span className="text-sm italic text-gray-500">
              April 2024 - Present
            </span>
          </div>

          <p className="text-left text-lg text-gray-500 w-full">
            I am working as a Indie Hacker to build my own products which are developed to solve a particular problem.
            We are planning to launch our first Application in June END. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
