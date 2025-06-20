import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-orange-700 text-white flex justify-between items-center px-6 py-4 rounded shadow-sm">
      <Link to="/" className="text-xl font-bold">
        🍽️ Restaurant
      </Link>
      <div className="flex gap-4 text-sm">
        <Link to="/" href="" className="hover:underline font-semibold">
          Login
        </Link>
        <Link to="/" href="" className="hover:underline font-semibold">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
