import axios from "axios";
import { Link, useNavigate } from "react-router";
import Toastify from "toastify-js";
import baseUrl from "../../api/baseUrl";

const TableCuisinesRow = ({ cuisine, index, fetchCuisines }) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("access_token");

  const onClickDeleteButton = async () => {
    try {
      const { data } = await axios.delete(`${baseUrl}/cuisines/${cuisine.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // console.log(data?.message);

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

      fetchCuisines();

      // navigate("/dashboard");
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

  return (
    <>
      <tr className="border-t">
        <td className="px-4 py-2">@{cuisine.id}</td>
        <td className="px-4 py-2">{cuisine.name}</td>
        <td className="px-4 py-2 w-32">
          <img
            src={cuisine.imgUrl}
            alt={cuisine.name}
            className="object-cover w-full h-32 rounded"
          />
        </td>
        <td className="px-4 py-2">{cuisine.description}</td>
        <td className="px-4 py-2">
          {cuisine.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </td>
        <td className="px-4 py-2">
          <div className="flex flex-col gap-1 justify-center items-center">
            <span>{cuisine.User.username}</span>
            <span className="font-bold">({cuisine.User.role})</span>
          </div>
        </td>
        <td className="px-4 py-2 flex flex-col justify-center items-center gap-2">
          <i
            className="fa-solid fa-trash bg-red-500 text-white px-2 py-2 rounded-md hover:bg-red-600 cursor-pointer"
            onClick={onClickDeleteButton}
          ></i>
          <Link
            to={`/dashboard/edit/${cuisine.id}`}
            className="fa-solid fa-pen-to-square bg-yellow-500 text-white px-2 py-2 rounded-md hover:bg-yellow-600 cursor-pointer"
          />
          <Link
            to={`/dashboard/edit/${cuisine.id}`}
            className="fa-solid fa-upload bg-blue-500 text-white px-2 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
          />
        </td>
      </tr>
    </>
  );
};

export default TableCuisinesRow;
