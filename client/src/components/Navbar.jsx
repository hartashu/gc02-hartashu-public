const Navbar = () => {
  return (
    <nav className="bg-orange-700 text-white flex justify-between items-center px-6 py-4 rounded mb-10 shadow-sm">
      <p className="text-xl font-bold">🍽️ Restaurant</p>
      <div className="flex gap-4 text-sm">
        <a href="" className="hover:underline font-semibold">
          Login
        </a>
        <a href="" className="hover:underline font-semibold">
          Register
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
