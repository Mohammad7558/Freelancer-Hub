import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import AddTask from "../Pages/AddTask/AddTask";
import BrowseTasks from "../Pages/BrowseTasks/BrowseTasks";
import MyPostedTasks from "../Pages/MyPostedTasks/MyPostedTasks";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Main,
        children: [
            {
                path: '/',
                Component: Home,
            },
            {
                path: '/addTask',
                element: <PrivateRoutes><AddTask/></PrivateRoutes>
            },
            {
                path: 'browseTask',
                Component: BrowseTasks
            },
            {
                path: '/myPostedTasks',
                element: <PrivateRoutes><MyPostedTasks/></PrivateRoutes>
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            }
        ]
    }
])