const CategoriesPage = () => {
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

      <main className="flex-1 p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Categories</h2>
        </div>

        <div className="max-w-1/2 bg-white rounded-md shadow">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-blue-100 text-blue-700">
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Name</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">#1</td>
                <td className="px-4 py-2">Category 1</td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-2">#2</td>
                <td className="px-4 py-2">Category 2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </section>
  );
};

export default CategoriesPage;
