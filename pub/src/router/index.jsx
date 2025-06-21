import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import CuisineDetailPage from "../pages/CuisineDetailPage";
import RootLayout from "../layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "detail/:id",
        Component: CuisineDetailPage,
      },
    ],
  },
]);

export default router;
