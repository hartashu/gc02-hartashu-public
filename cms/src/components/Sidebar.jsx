import { Link } from "react-router";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <aside className="w-full md:w-64 mb-4 md:mb-0 bg-white p-6 shadow-md flex flex-row md:block">
      <nav className="space-x-4 md:space-y-4">
        <div className="space-x-4 md:space-y-4 flex flex-row md:block">
          <Link
            to="/dashboard"
            className="md:block font-bold text-md text-blue-700 hover:underline"
          >
            All Cuisines
          </Link>
          <Link
            to="/dashboard/categories"
            className="md:block font-bold text-md text-blue-700 hover:underline"
          >
            Categories
          </Link>
          <Link
            to="/add-user"
            className="md:block font-bold text-md text-blue-700 hover:underline"
          >
            Add User
          </Link>
        </div>

        <hr className="my-4 md:block" />

        <div className="space-x-4 md:space-y-4 flex flex-row md:block">
          <p className="font-semibold ">Account</p>
          <p>Hi, Admin</p>
          <LogoutButton />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
