import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import OrderFood from "../Pages/OrderFood";

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
        path:'/order',
        element:<OrderFood/>
    }
      ]
    },
  ]);
