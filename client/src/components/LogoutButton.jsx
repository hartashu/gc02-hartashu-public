const LogoutButton = () => {
  return (
    <button
      href=""
      className="text-red-500 hover:underline cursor-pointer"
      onClick={() => {
        localStorage.removeItem("access_token");
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
