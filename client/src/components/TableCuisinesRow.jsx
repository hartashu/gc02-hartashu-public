const TableCuisinesRow = ({ cuisine, index }) => {
  return (
    <>
      <tr className="border-t">
        <td className="px-4 py-2">#{index + 1}</td>
        <td className="px-4 py-2">{cuisine.name}</td>
        <td className="px-4 py-2 w-32">
          <img
            src={cuisine.imgUrl}
            alt={cuisine.name}
            className="object-cover w-full h-32 rounded"
          />
        </td>
        <td className="px-4 py-2">{cuisine.description}</td>
        <td className="px-4 py-2">Rp. {cuisine.price}</td>
        <td className="px-4 py-2">{cuisine.User.role}</td>
        <td className="px-4 py-2 flex flex-col justify-center items-center gap-2">
          {/* bikin axios delete */}
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
