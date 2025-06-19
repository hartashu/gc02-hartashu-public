import axios from "axios";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import HomePage from "./pages/HomePage";
import CuisineDetailPage from "./pages/CuisineDetailPage";
import LoginPage from "./pages/LoginPage";
import CuisinesPage from "./pages/CuisinesPage";
import AddCuisinePage from "./pages/AddCuisinePage";
import EditCuisinePage from "./pages/EditCuisinePage";
import CategoriesPage from "./pages/CategoriesPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      {/* <HomePage /> */}
      {/* <CuisineDetailPage /> */}
      {/* <LoginPage /> */}
      {/* <CuisinesPage /> */}
      {/* <AddCuisinePage /> */}
      {/* <EditCuisinePage /> */}
      {/* <CategoriesPage /> */}
      <RegisterPage />
    </>
  );
}

export default App;
