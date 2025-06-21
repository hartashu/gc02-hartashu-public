import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import FormAddOrEdit from "../components/FormAddOrEdit";
import Toastify from "toastify-js";
import Button from "../components/Button";
import baseUrl from "../../api/baseUrl";

const EditCuisinePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [cuisine, setCuisine] = useState({});
  const [uploadedFile, setUploadedFile] = useState(null);

  async function onSubmitForm(e, form) {
    try {
      e.preventDefault();
      const { data } = await axios.put(`${baseUrl}/cuisines/${id}`, form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      // console.log(data);

      Toastify({
        text: data.message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();

      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      Toastify({
        text: error.response.data.error.message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    }
  }

  const onChangeUploadFile = (e) => {
    setUploadedFile(e.target.files[0]);
  };

  async function onSubmitFormUpload(e) {
    e.preventDefault();
    try {
      if (!uploadedFile) {
        Toastify({
          text: "Please upload file first",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        }).showToast();

        return;
      }

      const formData = new FormData();
      formData.append("file", uploadedFile);

      const { data } = await axios.patch(
        `${baseUrl}/cuisines/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            // "Content-Type": "multipart/form-data",
          },
        }
      );

      Toastify({
        text: data.message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();

      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      Toastify({
        text: error.response.data.error.message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    }
  }

  async function fetchCuisine() {
    try {
      const { data } = await axios.get(`${baseUrl}/cuisines/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
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

      // console.log(editedCuisine);
    } catch (error) {
      console.log(error);

      Toastify({
        text: error.response.data.error.message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    }
  }

  useEffect(() => {
    fetchCuisine();
  }, []);

  return (
    <main className="flex-1 p-6 space-y-10">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Edit a Cuisine</h2>
        {/* form edit */}
        <FormAddOrEdit cuisine={cuisine} onSubmitForm={onSubmitForm} />
      </div>

      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Update Image</h2>

        {/* form upload photo */}
        <div className="flex justify-around gap-4 m-auto mb-8">
          <div className="flex-1">
            <h2 className="text-center font-bold mb-2">Current Image</h2>
            <img src={cuisine.imgUrl} className="rounded-2xl w-[60%] m-auto" />
          </div>

          <div className="flex-1 border-l-1">
            <form
              method="post"
              // encType="multipart/form-data"
              className="h-[100%] flex flex-col justify-center items-center"
              onSubmit={onSubmitFormUpload}
            >
              {/* <div className="mb-4"> */}
              <label htmlFor="file" className="block font-bold mb-4">
                Upload New Image
              </label>

              <input
                type="file"
                name="file"
                id="file"
                className="border border-gray-300 rounded px-3 py-2 bg-blue-50 cursor-pointer mb-4"
                onChange={onChangeUploadFile}
              />
              {/* </div> */}

              <Button buttonName="Upload Image" />
            </form>
          </div>
        </div>

        {/* <form
          action=""
          method="post"
          encType="multipart/form-data"
          className="space-y-4"
          onSubmit={onSubmitFormUpload}
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
              onChange={onChangeUploadFile}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
          >
            Update Image
          </button>
        </form> */}
      </div>
    </main>
  );
};

export default EditCuisinePage;
