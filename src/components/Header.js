import {header_logo} from "../utils/constants";

const Header = () => {
    return(
        <div className="flex justify-between shadow-lg">
            <img className="my-4 mx-6 w-12 h-12 rounded-3xl hover:cursor-pointer" src={header_logo} />
            <ul className="flex my-3 mx-4 p-4">
                <li className="mx-4 hover:cursor-pointer">Projects</li>
                <li className="mx-4 hover:cursor-pointer">Experience</li>
                <li className="mx-4 hover:cursor-pointer">Resume</li>
                <li className="mx-4 hover:cursor-pointer">Menu</li>
            </ul>
        </div>
    );
};

export default Header;