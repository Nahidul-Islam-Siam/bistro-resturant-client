import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Order from "../Pages/Order";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Secret from "../Pages/Secret";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import AllUsers from "../Component/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems";
import UpdateItems from "../Pages/Dashboard/UpdateItems";
import Payment from "../Payment/Payment";
import PaymentHistory from "../Payment/PaymentHistory";
import AdminHome from "../Pages/AdminHome/AdminHome";
import UserHome from "../Pages/UserHome/UserHome";

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
    {
      path:'dashboard',
      element:<PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>,
      children:[
        // normal user routes
        {
          path:'userHome',
          element:<UserHome></UserHome>
        },
        {
          path:'cart',
          element:<Cart></Cart>
        },
        {
path:'payment',
element:<Payment></Payment>
        },
        {
path:'paymentHistory',
element:<PaymentHistory></PaymentHistory>
        },


        // admin only routes
        {
path:'adminHome',
element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path:'addItems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path:'manageItems',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path:'updateItem/:id',
          element:<AdminRoute><UpdateItems></UpdateItems></AdminRoute>,
          loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
        }
      ,
        {
          path:'users',
          element:<AllUsers></AllUsers>
        }
      ]
    }
  ]);
