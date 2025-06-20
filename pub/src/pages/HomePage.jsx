import axios from "axios";
import { useState, useEffect } from "react";

import Card from "../components/Card";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [rawCuisines, setRawCuisines] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/pub/cuisines");

        // console.log(data.data);
        setRawCuisines(data.data.data);
        // setRawCuisines([]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 p-4">
      {/* navbar */}
      {/* <Navbar /> */}

      {/* search */}
      <form className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 mt-8">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search cuisines..."
          className="border bg-orange-50 px-4 py-2 rounded-md w-full sm:w-80"
        />
        <button
          type="submit"
          className="bg-orange-700 text-white px-4 py-2 rounded-md hover:bg-orange-800 transition cursor-pointer"
        >
          Search
        </button>
      </form>
      {/* filter & sort */}
      <div className="flex flex-col sm:flex-row sm:justify-end gap-4 mb-6 items-center text-sm">
        <div className="flex items-center gap-2">
          <label className="font-semibold">Filter by:</label>
          <select className="border border-terra bg-white px-2 py-1 rounded">
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>E</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-semibold">Sort by:</label>
          <select className="border border-terra bg-white px-2 py-1 rounded">
            <option>Latest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>
      {/* cuisines grid */}
      {rawCuisines.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {console.log(rawCuisines)}
          {rawCuisines.map((cuisine) => (
            <Card cuisine={cuisine} />
          ))}
        </section>
      ) : (
        <p>No data yet</p>
      )}
    </div>
  );
};

export default HomePage;
