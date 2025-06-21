import { useNavigate } from "react-router";
import FormAddOrEdit from "../components/FormAddOrEdit";
import axios from "axios";
import Toastify from "toastify-js";

const AddCuisinePage = () => {
  const navigate = useNavigate();

  async function onSubmitForm(e, form) {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:3000/cuisines",
        form,
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
  }

  return (
    <main className="flex-1 p-6 space-y-10">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Add New Cuisine</h2>
        {/* form add */}
        <FormAddOrEdit onSubmitForm={onSubmitForm} />
      </div>
    </main>
  );
};

export default AddCuisinePage;
