import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Main,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/register',
                Component: Register
            }
        ]
    }
])