import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Order from "../Pages/Order";
import Login from "../Pages/Login";

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
    }
      ]
    },
  ]);
