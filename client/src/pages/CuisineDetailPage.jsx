import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const CuisineDetailPage = () => {
  const [cuisine, setCuisine] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:3000/pub/cuisines/3");

      // console.log(data.data);
      setCuisine(data.data);
    })();
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 p-4">
      {/* Navbar */}
      <Navbar />

      {/* Cuisine title */}
      <h1 className="text-2xl font-bold text-center mb-6 underline">
        {cuisine.name}
      </h1>

      {/* Cuisine detail */}
      <div className="w-full md:w-[60%] m-auto bg-white rounded-lg shadow-sm hover:shadow-lg p-4 transition">
        <img
          src={cuisine.imgUrl}
          alt={cuisine.name}
          className="w-full h-100 md:h-140 object-cover rounded mb-4"
        />
        <div className="flex justify-between font-semibold mb-2">
          <p>{cuisine.name}</p>
          <p className="font-bold text-xl">Rp. {cuisine.price}</p>
        </div>
        <p className="text-sm text-gray-600">{cuisine.description}</p>
      </div>
    </div>
  );
};

export default CuisineDetailPage;
