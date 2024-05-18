import { Link } from "react-router-dom";
import Logo from "../assets/logo-bg.png";

const Navbar = () => {
  return (
    <div className="px-2 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-between">
      <div>
        <Link to="/">
          <img src={Logo} alt="logo" className="w-20" />
        </Link>
      </div>
      <ul className="font-bold text-md text-black flex items-center justify-between gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link className="" to="/history">
            Milking History
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
