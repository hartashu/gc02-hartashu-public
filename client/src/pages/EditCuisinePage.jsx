import { useEffect, useState } from "react";
import FormAddOrEdit from "../components/FormAddOrEdit";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const EditCuisinePage = () => {
  const token = localStorage.getItem("access_token");

  const [cuisine, setCuisine] = useState({});

  const [categories, setCategories] = useState([]);

  const [editedCuisine, setEditedCuisine] = useState({});

  const fnOnChangeInputValue = (event) => {
    setCuisine({
      ...cuisine,
      [event.target.name]: event.target.value,
    });
  };

  const fnOnSubmitFormAddOrEdit = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // cek kalo params ada, lakukan axios.get, tapi kalo tidak ada set editedCuisine = null
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
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/cuisines/9", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const editedCuisine = data.data;

        setCuisine({
          name: editedCuisine.name,
          description: editedCuisine.description,
          price: editedCuisine.price,
          imgUrl: editedCuisine.imgUrl,
          categoryId: editedCuisine.categoryId,
          authorId: editedCuisine.authorId,
        });

        // setEditedCuisine(data.data);
        // console.log(editedCuisine);
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
          <h2 className="text-xl font-semibold mb-4">Edit a Cuisine</h2>
          {/* form edit */}
          <FormAddOrEdit
            cuisine={cuisine}
            categories={categories}
            fnOnChangeInputValue={fnOnChangeInputValue}
            fnOnSubmitFormAddOrEdit={fnOnSubmitFormAddOrEdit}
            editedCuisine={editedCuisine}
          />
        </div>

        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Update Image</h2>

          {/* form upload photo */}
          <form
            action=""
            method="post"
            encType="multipart/form-data"
            className="space-y-4"
          >
            <div>
              <label htmlFor="" className="block font-medium">
                Upload New Image:
              </label>
              <input
                type="file"
                name=""
                id=""
                className="w-full border border-gray-300 rounded px-3 py-2 bg-blue-50 cursor-pointer"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
            >
              Update Image
            </button>
          </form>
        </div>
      </main>
    </section>
  );
};

export default EditCuisinePage;
