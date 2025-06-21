import { Link } from "react-router";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="pt-4 px-4">
      <nav className="bg-orange-700 text-white flex justify-between items-center px-6 py-4 rounded shadow-sm">
        <Link to="/" className="text-xl font-bold">
          🍽️ Restaurant
        </Link>
        <div className="flex gap-4 text-sm">
          <Button buttonName="Login" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
