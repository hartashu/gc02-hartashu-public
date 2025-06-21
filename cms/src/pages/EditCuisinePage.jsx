import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import FormAddOrEdit from "../components/FormAddOrEdit";

const EditCuisinePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const token = localStorage.getItem("access_token");
  const [cuisine, setCuisine] = useState({});
  const [categories, setCategories] = useState([]);
  const [] = useState();

  const fnOnChangeInputValue = (event) => {
    setCuisine({
      ...cuisine,
      [event.target.name]: event.target.value,
    });
  };

  const fnOnSubmitForm = async (event) => {
    try {
      event.preventDefault();
      const { data } = await axios.put(
        `http://localhost:3000/cuisines/${id}`,
        {
          ...cuisine,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const fnOnChangeUploadedFile = () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const fnOnSubmitFormUpload = async (event) => {
    try {
      event.preventDefault();

      const { data } = await axios.patch(
        `http://localhost:3000/cuisines/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  // fetch categories
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

  // fetch edited cuisine data
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        if (id) {
          const { data } = await axios.get(
            `http://localhost:3000/cuisines/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          const editedCuisine = data.data;

          setCuisine({
            name: editedCuisine.name,
            description: editedCuisine.description,
            price: editedCuisine.price,
            imgUrl: editedCuisine.imgUrl,
            categoryId: editedCuisine.categoryId,
            authorId: editedCuisine.authorId,
          });

          // console.log(editedCuisine);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  // useEffect(() => {
  //   console.log(cuisine);
  // }, [cuisine]);

  return (
    <main className="flex-1 p-6 space-y-10">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Edit a Cuisine</h2>
        {/* form edit */}
        <FormAddOrEdit
          cuisine={cuisine}
          categories={categories}
          fnOnChangeInputValue={fnOnChangeInputValue}
          fnOnSubmitForm={fnOnSubmitForm}
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
          onSubmit={fnOnSubmitFormUpload}
        >
          <div>
            <label htmlFor="file" className="block font-medium">
              Upload New Image:
            </label>
            <input
              type="file"
              name="file"
              id="file"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-blue-50 cursor-pointer"
              onChange={fnOnChangeUploadedFile}
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
  );
};

export default EditCuisinePage;
