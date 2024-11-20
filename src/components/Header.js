import { header_logo } from "../utils/constants";
import Body from "./Body";

const Header = () => {
  return (
    <div className="fixed z-10 bg-minimalBackground text-white font-serif w-full h-24">
      <div className="flex justify-between shadow-lg mx-4">
        <img
          className="my-4 mx-4 w-16 rounded-3xl hover:cursor-pointer"
          src={header_logo}
        />
        <ul className="flex my-3 mx-4 p-4 text-2xl">
          <li className="mx-4 sm:hover:cursor-pointer md:inline-block hidden transform transition-transform duration-300 hover:scale-105">
            About
          </li>
          <li className="mx-4 sm:hover:cursor-pointer md:inline-block hidden transform transition-transform duration-300 hover:scale-105">
            Education
          </li>
          <li className="mx-4 sm:hover:cursor-pointer md:inline-block hidden transform transition-transform duration-300 hover:scale-105">
            Experience
          </li>
          <li className="mx-4 sm:hover:cursor-pointer md:inline-block hidden transform transition-transform duration-300 hover:scale-105">
            Projects
          </li>
          <li className="mx-4 sm:hover:cursor-pointer md:inline-block hidden transform transition-transform duration-300 hover:scale-105">
            Contact
          </li>
          <li className="mx-4 sm:hover:cursor-pointer md:hidden inline-block transform transition-transform duration-300 hover:scale-105">
            Menu
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
