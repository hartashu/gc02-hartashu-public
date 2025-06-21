import { Link } from "react-router";

function Button({ buttonName }) {
  return (
    <>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
      >
        {buttonName}
      </button>
    </>
  );
}

export default Button;
