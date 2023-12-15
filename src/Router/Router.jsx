import { createBrowserRouter} from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";
import AddProduct from "../Page/AddProduct/AddProduct";
import MyCart from "../Page/MyCart/MyCart";
import LogIn from "../Page/Login/LogIn";
import Registration from "../Page/Registration/Registration";
import Products from "../SharedComponent/Products/Products";
import ProductDetails from "../Page/ProductDetails/ProductDetails";
import UpdateProduct from "../Page/UpdateProduct/UpdateProduct";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayOut from "../DashBoard/DashboardLayOut";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/addProduct',
            element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
            path:'/myCart/:email',
            element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
            loader:({params})=>fetch(`https://beautify-yourself-server.vercel.app/myCart/${params.email}`)
        },
        {
            path:'/login',
            element:<LogIn></LogIn>
        },
        {
            path:'/registration',
            element:<Registration></Registration>
        },
        {
          path:'/product/:brand',
          element:<Products></Products>,
          loader:({params})=>fetch(`https://beautify-yourself-server.vercel.app/product/${params.brand}`)
      },
      {
        path:'/productDetails/:id',
        element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://beautify-yourself-server.vercel.app/productDetails/${params.id}`)
       },
       {
        path:'/updateProduct/:id',
        element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader:({params})=>fetch(`https://beautify-yourself-server.vercel.app/updateProduct/${params.id}`)
       },

      ]
    },
    {
      path:'dashboard',
      element:<DashboardLayOut></DashboardLayOut>,
      children:[
        {
          path:'myCart',
          element:<MyCart></MyCart>
        }
      ]
    }
  ]);

export default Router;