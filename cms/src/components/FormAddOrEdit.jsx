import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Toastify from "toastify-js";
import axios from "axios";
import Button from "./Button";
import baseUrl from "../../api/baseUrl";

const FormAddOrEdit = ({ cuisine, onSubmitForm }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    imgUrl: "",
    categoryId: 1,
    authorId: jwtDecode(localStorage.getItem("access_token")).id,
  });

  const [categories, setCategories] = useState([]);

  const OnChangeInputValue = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  async function fetchCategories() {
    try {
      const { data } = await axios.get(`${baseUrl}/categories`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      // console.log(data.data);
      setCategories(data?.data);
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
    fetchCategories();
  }, []);

  useEffect(() => {
    if (cuisine) {
      setForm((prev) => {
        return {
          ...prev,
          ...cuisine,
        };
      });
    }
  }, [cuisine]);

  return (
    <>
      <form
        action=""
        method="post"
        className="space-y-4"
        onSubmit={(e) => onSubmitForm(e, form)}
      >
        {/* name */}
        <div>
          <label htmlFor="name" className="block font-medium">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Cuisine name"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={form.name}
            onChange={OnChangeInputValue}
          />
        </div>

        {/* category */}
        <div>
          <label htmlFor="categoryId" className="block font-medium">
            Category:
          </label>
          <select
            name="categoryId"
            id="categoryId"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={form.categoryId}
            onChange={OnChangeInputValue}
          >
            {categories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* description */}
        <div>
          <label htmlFor="description" className="block font-medium">
            Description:
          </label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Cuisine description"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={form.description}
            onChange={OnChangeInputValue}
          />
        </div>

        {/* price */}
        <div>
          <label htmlFor="price" className="block font-medium">
            Price:
          </label>
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Cuisine price"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={form.price}
            onChange={OnChangeInputValue}
          />
        </div>

        {/* image url */}
        <div>
          <label htmlFor="imgUrl" className="block font-medium">
            Image URL:
          </label>
          <input
            type="text"
            name="imgUrl"
            id="imgUrl"
            placeholder="Image URL"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={form.imgUrl}
            onChange={OnChangeInputValue}
          />
        </div>

        <Button buttonName="Submit" />
      </form>
    </>
  );
};

export default FormAddOrEdit;
