const Experiences = () => {
  return (
    <div
      className="h-fit w-full my-24 flex flex-col gap-8 py-12 "
      id="experience sm:my-12 sm:py-12"
    >
      <span className="text-center text-2xl italic sm:text-lg">
        "Beyond Syntax, Writing Code That Matter."
      </span>
      <span className="text-center text-8xl font-bold sm:text-5xl">
        Experience
      </span>
      <div className="flex flex-col place-items-center gap-12 mt-12 justify-center ">
        <div className="border border-gray-400 w-3/4 flex-row flex place-content-between p-4 rounded-2xl gap-24 sm:flex-col sm:gap-8">
          <div className="flex flex-col gap-1  justify-center items-center font-bold w-96 sm:w-full">
            <span className="text-2xl">SDE Intern</span>
            <p className="text-center text-lg text-gray-500">
              Cloudware Solutions LLC
            </p>
            <span className="text-sm italic text-gray-500">
              Jan 2023 - Sept 2023
            </span>
          </div>

          <p className="text-left text-lg text-gray-500 w-full sm:text-sm">
            During my internship at Cloudware Solutions as a Software
            Development Engineer, I immersed myself in React to construct a
            dynamic web application. My primary responsibility involved
            seamlessly integrating the app with Firebase, honing my skills in
            both front-end development and cloud-based solutions. This
            experience enriched my proficiency in creating robust and scalable
            applications.
          </p>
        </div>
        {/* <div className="border border-gray-400 w-3/4 flex-row flex place-content-between p-4 rounded-2xl gap-24">
          <div className="flex flex-col gap-1  justify-center items-center font-bold w-96">
            <span className="text-2xl">SDE Intern</span>
            <p className="text-center text-lg text-gray-500">
              Cloudware Solutions LLC
            </p>
            <span className="text-sm italic text-gray-500">
              Jan 2023 - Sept 2023
            </span>
          </div>

          <p className="text-left text-lg text-gray-500 w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            modi optio officia fugit consequuntur earum dolore voluptatum,
            molestias animi quisquam dolorum vero incidunt corporis
            reprehenderit ipsa repudiandae saepe ipsam, deleniti eaque debitis.
            Illo modi reprehenderit totam, ex repellat distinctio iure accusamus
            repellendus dignissimos eum, est incidunt. Eius corporis blanditiis
            facere non ullam, consequatur error quidem incidunt! Similique
            repellendus commodi aut qui eius architecto in cumque, fugiat a
            animi sequi ab officia soluta sit maiores. Reprehenderit sint cum
            vitae rem, sit corrupti eum maxime ipsum enim reiciendis nesciunt
            deserunt aliquid temporibus saepe ratione totam repudiandae. Est,
            officiis error. Corrupti, officia similique!
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Experiences;
