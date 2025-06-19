import Sidebar from "../components/Sidebar";
import TableCuisinesRow from "../components/TableCuisinesRow";

const CuisinesPage = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <Sidebar />

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
              <TableCuisinesRow />
              <TableCuisinesRow />
              <TableCuisinesRow />
              <TableCuisinesRow />
              <TableCuisinesRow />
            </tbody>
          </table>
        </div>
      </main>
    </section>
  );
};

export default CuisinesPage;
