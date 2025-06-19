import { useEffect, useState } from "react";
import FormAddOrEdit from "../components/FormAddOrEdit";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const AddCuisinePage = () => {
  const token = localStorage.getItem("access_token");

  const [cuisine, setCuisine] = useState({
    name: "",
    description: "",
    price: "",
    imgUrl: "",
    categoryId: 1,
    authorId: jwtDecode(token).id,
  });

  const [categories, setCategories] = useState([]);

  const fnOnChangeInputValue = (event) => {
    setCuisine({
      ...cuisine,
      [event.target.name]: event.target.value,
    });
  };

  const fnOnSubmitFormAddOrEdit = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/cuisines",
        {
          name: cuisine.name,
          description: cuisine.description,
          price: cuisine.price,
          imgUrl: cuisine.imgUrl,
          categoryId: cuisine.categoryId,
          authorId: cuisine.authorId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/categories", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // console.log(data.data);
        setCategories(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    console.log(cuisine);
  }, [cuisine]);

  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-gray-100 text-gray-800">
      {/* sidebar */}
      <Sidebar />

      <main className="flex-1 p-6 space-y-10">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Add New Cuisine</h2>
          {/* form add */}
          <FormAddOrEdit
            cuisine={cuisine}
            categories={categories}
            fnOnChangeInputValue={fnOnChangeInputValue}
            fnOnSubmitFormAddOrEdit={fnOnSubmitFormAddOrEdit}
          />
        </div>
      </main>
    </section>
  );
};

export default AddCuisinePage;
