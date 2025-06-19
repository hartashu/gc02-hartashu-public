const TableCuisinesRow = () => {
  return (
    <>
      <tr className="border-t">
        <td className="px-4 py-2">#1</td>
        <td className="px-4 py-2">Cuisine 1</td>
        <td className="px-4 py-2 w-32">
          <img
            src="images/placeholder.jpeg"
            alt=""
            className="object-cover w-full h-32 rounded"
          />
        </td>
        <td className="px-4 py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          ipsam obcaecati autem omnis, ad tempore.
        </td>
        <td className="px-4 py-2">Rp. 50.000</td>
        <td className="px-4 py-2">Admin</td>
        <td className="px-4 py-2 flex flex-col justify-center items-center gap-2">
          <button className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 cursor-pointer">
            D
          </button>
          <button className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 cursor-pointer">
            E
          </button>
          <button className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 cursor-pointer">
            U
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableCuisinesRow;
