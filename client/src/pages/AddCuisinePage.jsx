import FormAddOrEdit from "../components/FormAddOrEdit";

const AddCuisinePage = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-gray-100 text-gray-800">
      <aside className="w-full md:w-64 mb-4 md:mb-0 bg-white p-6 shadow-md flex flex-row md:block">
        <nav className="space-x-4 md:space-y-4">
          <div className="space-x-4 md:space-y-4 flex flex-row md:block">
            <a className="md:block font-bold text-md text-blue-700 hover:underline">
              All Cuisines
            </a>
            <a className="md:block font-bold text-md text-blue-700 hover:underline">
              Categories
            </a>
            <a className="md:block font-bold text-md text-blue-700 hover:underline">
              Add User
            </a>
          </div>

          <hr className="my-4 md:block" />

          <div className="space-x-4 md:space-y-4 flex flex-row md:block">
            <p className="font-semibold ">Account</p>
            <p>Hi, Admin</p>
            <p>
              <a href="" className="text-red-500 hover:underline">
                Logout
              </a>
            </p>
          </div>
        </nav>
      </aside>

      <main className="flex-1 p-6 space-y-10">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Add New Cuisine</h2>
          {/* form add */}
          <FormAddOrEdit />
        </div>
      </main>
    </section>
  );
};

export default AddCuisinePage;
