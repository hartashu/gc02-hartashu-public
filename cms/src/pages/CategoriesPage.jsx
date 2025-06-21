import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import baseUrl from "../../api/baseUrl";

const CategoriesPage = () => {
  const token = localStorage.getItem("access_token");

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const { data } = await axios.get(`${baseUrl}/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCategories(data.data);
    };

    fetchApi();
  }, []);

  return (
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
            {categories.map((category, index) => (
              <tr key={category.id} className="border-t">
                <td className="px-4 py-2">#{index + 1}</td>
                <td className="px-4 py-2">{category.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default CategoriesPage;
