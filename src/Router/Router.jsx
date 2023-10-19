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
            element:<AddProduct></AddProduct>
        },
        {
            path:'/myCart',
            element:<MyCart></MyCart>,
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
        element:<ProductDetails></ProductDetails>,
        loader:({params})=>fetch(`http://localhost:5000/productDetails/${params.id}`)
       },
       




      ]
    },
  ]);

export default Router;