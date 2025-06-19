import axios from "axios";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const fnOnSubmitFormLogin = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post("http://localhost:3000/login", {
        username: credentials.username,
        password: credentials.password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(credentials);
  }, [credentials]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Login Page</h1>

      {/* div photo and form */}
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden max-w-4xl w-full">
        <div className="md:w-1/2">
          <img
            src="/images/placeholder.jpeg"
            alt="Login Image"
            className="object-cover w-full h-64 md:h-full"
          />
        </div>

        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Login to your account
          </h2>

          <form
            action=""
            method="post"
            className="space-y-4"
            onSubmit={fnOnSubmitFormLogin}
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
                value={credentials.username}
                onChange={(event) => {
                  setCredentials({
                    ...credentials,
                    [event.target.name]: event.target.value,
                  });
                }}
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
                value={credentials.password}
                onChange={(event) => {
                  setCredentials({
                    ...credentials,
                    [event.target.name]: event.target.value,
                  });
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-sm hover:bg-blue-700 cursor-pointer transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
