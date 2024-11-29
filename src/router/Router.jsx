import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Collection from "../pages/Collection";
import Contact from "../pages/Contact";
import Wishlist from "../pages/Wishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/collection",
    element: <Collection />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
]);
