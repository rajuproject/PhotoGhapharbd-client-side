import AllProducts from "../../AllProducts/AllProducts";
import Blogs from "../../Blogs/Blogs";
import EditProduct from "../../EditProduct/EditProduct";
import ErrorPage from "../../ErrorPage/ErrorPage";
import MyReview from "../../MyReview/MyReview";

import ProductsAdd from "../../Products add/ProductsAdd";
import Register from "../../Register/Register";
import SignIn from "../../SignIn/SignIn";
import SingleService from "../../SingleService/SingleService";
import PrivateRoute from '../../PrivateRoute/PrivateRoute'


const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../../Pages/Home/Home");
const { default: Main } = require("./Main");

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path:'/add',
                element:<PrivateRoute><ProductsAdd></ProductsAdd></PrivateRoute>
            },
            {
                path:'/allproduct',
                element:<AllProducts></AllProducts>
            },
            {
                path: '/comment/:id',
                element: <EditProduct></EditProduct>
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/details/:id',
                element:<SingleService></SingleService>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/myReview',
                element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
            }
        ]
    }
])