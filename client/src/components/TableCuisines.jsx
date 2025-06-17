const TableCuisines = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-gray-100 text-gray-800">
      {/* Sidebar */}
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

      {/* Main */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Cuisines</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer">
            + New Cuisine
          </button>
        </div>

        <div className="overflow-x-auto bg-white rounded-md shadow">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-blue-100 text-blue-700">
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Author</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">#1</td>
                <td className="px-4 py-2">Cuisine 1</td>
                <td className="px-4 py-2 w-32">
                  <img
                    src="images/placeholder.jpeg"
                    alt=""
                    className="object-cover w-full h-32 rounded"
                  />
                </td>
                <td className="px-4 py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore ipsam obcaecati autem omnis, ad tempore.
                </td>
                <td className="px-4 py-2">Rp. 50.000</td>
                <td className="px-4 py-2">Admin</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                    D
                  </button>
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">
                    E
                  </button>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                    U
                  </button>
                </td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-2">#2</td>
                <td className="px-4 py-2">Cuisine 2</td>
                <td className="px-4 py-2 w-32">
                  <img
                    src="images/placeholder.jpeg"
                    alt=""
                    className="object-cover w-full h-32 rounded"
                  />
                </td>
                <td className="px-4 py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore ipsam obcaecati autem omnis, ad tempore.
                </td>
                <td className="px-4 py-2">Rp. 80.000</td>
                <td className="px-4 py-2">Admin</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                    D
                  </button>
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">
                    E
                  </button>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                    U
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </section>
  );
};

export default TableCuisines;
