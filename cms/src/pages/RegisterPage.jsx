import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Toastify from "toastify-js";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const fnOnChangeInputValue = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const fnOnSubmitFormRegister = async (event) => {
    try {
      event.preventDefault();

      const { data } = await axios.post(
        "http://localhost:3000/add-user",
        {
          // username: user.username,
          // email: user.email,
          // password: user.password,
          // phoneNumber: user.phoneNumber,
          // address: user.address,
          ...user,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      console.log(data);

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
  };

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Register User Page
      </h1>

      {/* div left and right */}
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden max-w-4xl w-full">
        <div className="md:w-1/2">
          <img
            src="/images/placeholder.jpeg"
            alt="Add Staff Image"
            className="object-cover w-full h-64 md:h-full"
          />
        </div>

        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Add New User Below
          </h2>

          <form
            action=""
            method="post"
            className="space-y-4"
            onSubmit={fnOnSubmitFormRegister}
          >
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Username:
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter username..."
                className="border border-gray-300 rounded-sm px-4 py-1 w-full"
                value={user.username}
                onChange={fnOnChangeInputValue}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Email:
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter Email..."
                className="border border-gray-300 rounded-sm px-4 py-1 w-full"
                value={user.email}
                onChange={fnOnChangeInputValue}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password..."
                className="border border-gray-300 rounded-sm px-4 py-1 w-full"
                value={user.password}
                onChange={fnOnChangeInputValue}
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Phone Number:
              </label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter phone number..."
                className="border border-gray-300 rounded-sm px-4 py-1 w-full"
                value={user.phoneNumber}
                onChange={fnOnChangeInputValue}
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Address:
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter address..."
                className="border border-gray-300 rounded-sm px-4 py-1 w-full"
                value={user.address}
                onChange={fnOnChangeInputValue}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-sm hover:bg-blue-700 cursor-pointer transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
