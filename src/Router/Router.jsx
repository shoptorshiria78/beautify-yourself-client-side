import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";
import AddProduct from "../DashBoard/DashBoardPages/AdminPages/AddProduct/AddProduct";
import MyCart from "../Page/MyCart/MyCart";
import LogIn from "../Page/Login/LogIn";
import Registration from "../Page/Registration/Registration";
import Products from "../SharedComponent/Products/Products";
import ProductDetails from "../Page/ProductDetails/ProductDetails";
import UpdateProduct from "../DashBoard/DashBoardPages/AdminPages/UpdateProduct/UpdateProduct";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayOut from "../DashBoard/DashboardLayOut";
import AdminPrivateRoute from "../PrivateRoute/AdminPrivateRoute";
import AllUsers from "../DashBoard/DashBoardPages/AdminPages/AllUsers";
import AdminHome from "../DashBoard/DashBoardPages/AdminPages/AdminHome";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/product/:brand',
        element: <Products></Products>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.brand}`)
      },
      {
        path: '/productDetails/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/productDetails/${params.id}`)
      },

    ]
  },
  {
    path: 'dashboard',
    element: <DashboardLayOut></DashboardLayOut>,
    children: [
      // user Route
      {
        path: 'myCart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/myCart/${params.email}`)
      },
      // Admin Route
      {
        path: 'dashboard',
        element: <AdminPrivateRoute><AdminHome></AdminHome></AdminPrivateRoute>
      },
      {
        path: 'allUsers',
        element: <AdminPrivateRoute><AllUsers></AllUsers></AdminPrivateRoute>

      }
      ,
      {
        path: 'updateProduct/:id',
        element: <AdminPrivateRoute><UpdateProduct></UpdateProduct></AdminPrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/updateProduct/${params.id}`)
      },
      {
        path: 'addProduct',
        element: <AdminPrivateRoute><AddProduct></AddProduct></AdminPrivateRoute>
      },

    ]
  }
]);

export default Router;