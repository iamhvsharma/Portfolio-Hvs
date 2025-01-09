import { FaLightbulb } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-white border flex-row items-center border-b-gray-500 h-20 flex justify-between gap-8 px-24 sm:justify-between sm:px-4 sm:border-0">
      <span className="text-xl italic sm:hidden cursor-pointer">harshvardhan.tech </span>
      {/* OR harshvardhan.site  */}
      <div className="flex flex-row">
        <ul className="flex flow-row gap-12 text-xl cursor-pointer sm:hidden ">
          <li className="hover:underline-offset-2 text-gray-400 hover:text-black hover: hover:underline">
            <a href="#about">About</a>
          </li>
          <li className="hover:underline-offset-2 text-gray-400 hover:text-black hover: hover:underline">
            <a href="#experience">Experience</a>
          </li>
          <li className="hover:underline-offset-2 text-gray-400 hover:text-black hover: hover:underline">
            <a href="#projects">Projects</a>
          </li>
         
        </ul>
      </div>
      <div className="flex flex-row place-items-center gap-8 sm:relative sm:visible sm:place-content-end">
        <a
          href="mailto:itshvsharma@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-xl bg-purple-600 rounded-2xl p-3 text-white   font-bold"
        >
          Hire Me !!
        </a>
        <button>{/* <FaLightbulb className="text-3xl" /> */}</button>
      </div>
    </div>
  );
};

export default Header;
