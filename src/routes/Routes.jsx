import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/Home/Home/Category/Category";
import Newslayout from "../layout/Newslayout";
import News from "../pages/Home/Home/News/News/News";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Login from "../pages/Home/Home/Login/Login/Login";
import Register from "../pages/Home/Home/Login/Login/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Turms from "../pages/Home/Home/shared/Turms/Turms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0" />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "terms",
        element: <Turms></Turms>,
      },
    ],
  },
  {
    path: "category",
    element: <Main />,
    children: [
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`https://the-dragon-news-server-sandy.vercel.app/categories/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <Newslayout />,
    children: [
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <News />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://the-dragon-news-server-sandy.vercel.app/news/${params.id}`),
      },
    ],
  },
]);

export default router;
