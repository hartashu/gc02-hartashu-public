import { useNavigate } from "react-router";

const LogoutButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="text-red-500 hover:underline cursor-pointer"
      onClick={() => {
        localStorage.clear();
        navigate("/login");
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
