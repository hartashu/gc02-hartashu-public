import { createBrowserRouter, redirect } from "react-router";
import CuisinesPage from "../pages/CuisinesPage";
import LoginPage from "../pages/LoginPage";
import RootLayout from "../layouts/RootLayout";
import AddCuisinePage from "../pages/AddCuisinePage";
import EditCuisinePage from "../pages/EditCuisinePage";
import RegisterPage from "../pages/RegisterPage";
import CategoriesPage from "../pages/CategoriesPage";
import Toastify from "toastify-js";

const router = createBrowserRouter([
  {
    path: "*",
    loader: () => {
      return redirect("/login");
    },
  },
  {
    path: "/login",
    loader: () => {
      if (localStorage.access_token) {
        Toastify({
          text: "You are already log in",
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

        return redirect("/dashboard");
      }

      return null;
    },
    element: <LoginPage />,
  },
  {
    element: <RootLayout />,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        return redirect("/login");
      }

      return null;
    },
    children: [
      {
        path: "/dashboard",
        element: <CuisinesPage />,
      },
      {
        path: "/dashboard/add",
        element: <AddCuisinePage />,
      },
      {
        path: "/dashboard/edit/:id",
        element: <EditCuisinePage />,
      },
      {
        path: "/dashboard/categories",
        element: <CategoriesPage />,
      },
    ],
  },
  {
    path: "/add-user",
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        return redirect("/login");
      }

      return null;
    },
    element: <RegisterPage />,
  },
]);

export default router;
