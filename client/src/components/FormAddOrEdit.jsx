const FormAddOrEdit = () => {
  return (
    <>
      <form action="" method="post" className="space-y-4">
        <div>
          <label for="" className="block font-medium">
            Name:
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Cuisine name"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* <!-- Category bakal ambil dari endpoint category biar dinamis --> */}
        {/* <!-- authorId auto kirim id yg sedang login??? atau nanti ambilnya dari access_token? --> */}
        <div>
          <label for="" className="block font-medium">
            Category:
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Cuisine"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label for="" className="block font-medium">
            Description:
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Cuisine description"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label for="" className="block font-medium">
            Price:
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Cuisine price"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label for="" className="block font-medium">
            Image URL:
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="URL image"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default FormAddOrEdit;
