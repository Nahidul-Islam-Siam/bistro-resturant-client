import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Order from "../Pages/Order";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Secret from "../Pages/Secret";
import PrivateRoutes from "./PrivateRoutes";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/menu',
          element:<Menu/>
      },
   {
      path:"/order",
      element: <Order/>
    },
    {
      path:"/order/:category",
      element: <Order/>
    },
    {
      path:"/login",
      element: <Login/>
    },
   {
    path:'/signup',
    element:<SignUp></SignUp>
   },
   {
    path:'/secret',
    element:<PrivateRoutes><Secret></Secret></PrivateRoutes>
   }
      ]
    },
  ]);
