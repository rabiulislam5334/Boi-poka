import { createBrowserRouter } from "react-router";
import Root from "../Pages/Roots/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import axios from "axios";
import About from "../Pages/About/About";
import BookDetails from "../Pages/Books/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => axios(`booksData.json`),
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/book_details/:id",
        Component: BookDetails,
        loader: () => axios(`booksData.json`),
      },
    ],
  },
]);
