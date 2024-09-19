import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ShowArticles from "../../app/articles/pages/ShowArticles";
import ShowProducts from "../../app/products/pages/ShowProducts";
import AddArticles from "../../app/articles/pages/AddArticles";
import UpdateArticles from "../../app/articles/pages/UpdateArticles";
import AddProducts from "../../app/products/pages/AddProducts";
import UpdateProducts from "../../app/products/pages/UpdateProducts";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/articles" replace />,
      },
      {
        path: "articles",
        children: [
          {
            path: "",
            element: <ShowArticles />,
          },
          {
            path: "create",
            element: <AddArticles />,
          },
          {
            path: ":id",
            element: <UpdateArticles />,
          },
        ],
      },
      {
        path: "products",
        children: [
          {
            path: "",
            element: <ShowProducts />,
          },
          {
            path: "create",
            element: <AddProducts />,
          },
          {
            path: ":id",
            element: <UpdateProducts />,
          },
        ],
      },
    ],
  },
]);

export default router;
