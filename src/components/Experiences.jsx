const Experiences = () => {
  return (
    <div
      className="w-full my-24 flex flex-col gap-8 py-12 sm:my-12 sm:py-12"
      id="experience"
    >
      <span className="text-center text-2xl italic sm:text-lg">
        "Beyond college, taking real life experience."
      </span>
      <span className="text-center text-8xl font-bold sm:text-5xl">
        Experience
      </span>

      <div className="flex flex-col items-center gap-12 mt-12">
        {/* Experience 1 */}
        <div className="border border-gray-400 w-11/12 sm:w-5/6 lg:w-3/4 flex flex-row sm:flex-col sm:gap-6 justify-between p-6 sm:p-4 rounded-2xl gap-24 shadow-md transition-all">
          {/* Left */}
          <div className="flex flex-col items-center text-center sm:text-left sm:items-start gap-1 font-bold w-80 sm:w-full">
            <span className="text-2xl sm:text-xl">Genda Phool</span>
            <p className="text-lg sm:text-base text-gray-500">Full Stack Developer</p>
            <span className="text-sm italic text-gray-500">
              Feb 2025 - Present
            </span>
          </div>

          {/* Right */}
          <p className="text-lg sm:text-base text-gray-600 w-full">
          Building a subscription-based eCommerce platform, handling user onboarding, payments, and subscriptions using MERN stack. Ensured fast, scalable, and secure web apps with Stripe integration, optimized APIs, and responsive UI, improving performance and user engagement.
          </p>
        </div>

        {/* Experience 2 (Now same layout as Experience 1) */}
        <div className="border border-gray-400 w-11/12 sm:w-5/6 lg:w-3/4 flex flex-row sm:flex-col sm:gap-6 justify-between p-6 sm:p-4 rounded-2xl gap-24 shadow-md transition-all">
          {/* Left */}
          <div className="flex flex-col items-center text-center sm:text-left sm:items-start gap-1 font-bold w-80 sm:w-full">
            <span className="text-2xl sm:text-xl">Conio IT Solutions</span>
            <p className="text-lg sm:text-base text-gray-500">
              Full Stack Intern
            </p>
            <span className="text-sm italic text-gray-500">
              July 2024 - Aug 2024
            </span>
          </div>

          {/* Right */}
          <p className="text-lg sm:text-base text-gray-600 w-full">
          Enhanced web app performance by 40% through React.js optimizations and efficient backend APIs. Designed secure, scalable RESTful APIs with 99.9% uptime, ensuring seamless frontend-backend communication. Optimized Node.js and PostgreSQL backend, reducing API response time by 20%.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
