import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo-bg.png";

const Navbar = ({milkingSession} : any) => {
    const navigate = useNavigate()
    const handleNavigation = () => {
        milkingSession ? alert("Please stop milking to see the milking history") : navigate("/history")
    }
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
            <div className="cursor-pointer" onClick={handleNavigation}>
                Milking History
            </div>
         
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
