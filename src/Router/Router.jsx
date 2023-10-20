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
            path:'/myCart',
            element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
            loader:()=>fetch("http://localhost:5000/myCart")
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
          loader:({params})=>fetch(`http://localhost:5000/product/${params.brand}`)
      },
      {
        path:'/productDetails/:id',
        element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/productDetails/${params.id}`)
       },
       {
        path:'/updateProduct/:id',
        element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/updateProduct/${params.id}`)
       },

      ]
    },
  ]);

export default Router;