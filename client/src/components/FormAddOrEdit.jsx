const FormAddOrEdit = ({
  cuisine,
  categories,
  fnOnChangeInputValue,
  fnOnSubmitFormAddOrEdit,
  editedCuisine,
}) => {
  return (
    <>
      <form
        action=""
        method="post"
        className="space-y-4"
        onSubmit={fnOnSubmitFormAddOrEdit}
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
            value={cuisine.name}
            onChange={fnOnChangeInputValue}
          />
        </div>
        {/* <!-- authorId auto kirim id yg sedang login??? atau nanti ambilnya dari access_token? --> */}
        {/* category */}
        <div>
          <label htmlFor="categoryId" className="block font-medium">
            Category:
          </label>
          <select
            name="categoryId"
            id="categoryId"
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={fnOnChangeInputValue}
          >
            {categories.map((category) => (
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
            value={cuisine.description}
            onChange={fnOnChangeInputValue}
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
            value={cuisine.price}
            onChange={fnOnChangeInputValue}
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
            value={cuisine.imgUrl}
            onChange={fnOnChangeInputValue}
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
