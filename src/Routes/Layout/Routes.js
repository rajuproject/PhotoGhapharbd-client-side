import AllProducts from "../../AllProducts/AllProducts";
import Blogs from "../../Blogs/Blogs";

import ErrorPage from "../../ErrorPage/ErrorPage";
import MyReview from "../../MyReview/MyReview";


import Register from "../../Register/Register";
import SignIn from "../../SignIn/SignIn";
import SingleService from "../../SingleService/SingleService";
import PrivateRoute from '../../PrivateRoute/PrivateRoute'
import EditComment from "../../EditComment/EditProduct";
import ServiceAdd from "../../Service Add/Service Add";


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
                element:<PrivateRoute><ServiceAdd></ServiceAdd></PrivateRoute>
            },
            {
                path:'/allService',
                element:<AllProducts></AllProducts>
            },
            {
                path: '/comment/:id',
                element: <EditComment></EditComment>
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