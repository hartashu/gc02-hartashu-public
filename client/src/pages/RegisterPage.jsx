const RegisterPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Register User Page
      </h1>

      {/* div left and right */}
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden max-w-4xl w-full">
        <div class="md:w-1/2">
          <img
            src="/images/placeholder.jpeg"
            alt="Add Staff Image"
            class="object-cover w-full h-64 md:h-full"
          />
        </div>

        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Add New User Below
          </h2>

          <form action="" method="post" className="space-y-4">
            <div>
              <label
                for=""
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Username:
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter username..."
                className="border border-gray-300 rounded-sm px-4 py-1 w-full"
              />
            </div>

            <div>
              <label
                for=""
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Email:
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Email..."
                className="border border-gray-300 rounded-sm px-4 py-1 w-full"
              />
            </div>

            <div>
              <label
                for=""
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Password:
              </label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Enter password..."
                className="border border-gray-300 rounded-sm px-4 py-1 w-full"
              />
            </div>

            <div>
              <label
                for=""
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Phone Number:
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter phone number..."
                className="border border-gray-300 rounded-sm px-4 py-1 w-full"
              />
            </div>

            <div>
              <label
                for=""
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Address:
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter address..."
                className="border border-gray-300 rounded-sm px-4 py-1 w-full"
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
