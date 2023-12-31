import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Contact from "../pages/Contact/Contact";
import Profile from "../pages/Profile/Profile";
import Gallery from "../pages/Gallery/Gallery";
import PrivateRoute from "./PrivateRoute";
import PrivateRouteServices from "./PrivateRouteServices";
import Details from "../pages/Details/Details";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/details/:id',
                element: <PrivateRouteServices><Details></Details></PrivateRouteServices>,
                loader: () => fetch('/categories.json')
            },
            {
                path: '/gallery',
                element:<PrivateRoute><Gallery></Gallery></PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;