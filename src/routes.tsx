import { createBrowserRouter } from "react-router-dom";
import Wrapper from "./Common/Wrapper";
import Home from "./Components/Home/Home";

export const router = createBrowserRouter([
  {
    element: <Wrapper />,
    errorElement: <div>Error 404, Page not found</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/works",
        element: <div>Works</div>,
      },
      {
        path: "/blogs",
        element: <div>Blog</div>,
      },
      {
        path: "/contact",
        element: <div>Contact</div>,
      },
    ],
  },
]);
