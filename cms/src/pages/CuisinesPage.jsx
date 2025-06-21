import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import TableCuisinesRow from "../components/TableCuisinesRow";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import Toastify from "toastify-js";
import baseUrl from "../../api/baseUrl";

const CuisinesPage = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("access_token");
  const [cuisines, setCuisines] = useState([]);

  // fetch all cuisines
  async function fetchCuisines() {
    try {
      const { data } = await axios.get(`${baseUrl}/cuisines`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // console.log(data.data);
      setCuisines(data.data);
    } catch (error) {
      console.log(error);

      if (error.response.status === 401) {
        navigate("/login");
      }
    }
  }

  useEffect(() => {
    fetchCuisines();
  }, []);

  return (
    // <section className="min-h-screen flex flex-col md:flex-row bg-gray-100 text-gray-800">

    <main className="flex-1 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Cuisines</h2>
        <Link
          to="/dashboard/add"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
        >
          + New Cuisine
        </Link>
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
            {cuisines.map((cuisine, index) => (
              <TableCuisinesRow
                key={cuisine.id}
                cuisine={cuisine}
                index={index}
                fetchCuisines={fetchCuisines}
              />
            ))}
          </tbody>
        </table>
      </div>
    </main>
    // </section>
  );
};

export default CuisinesPage;
