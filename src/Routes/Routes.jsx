import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import AddTask from "../Pages/AddTask/AddTask";
import BrowseTasks from "../Pages/BrowseTasks/BrowseTasks";
import MyPostedTasks from "../Pages/MyPostedTasks/MyPostedTasks";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import Loader from "../components/Loader/Loader";
import BrowseTaskDetails from "../Pages/BrowseTaskDetails/BrowseTaskDetails";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import UpdateTaskPage from "../Pages/UpdateTaskPage/UpdateTaskPage";
import TermsAndCondition from "../Pages/TermsAndCondition/TermsAndCondition";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Main,
        errorElement: <NotFoundPage/>,
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
                Component: BrowseTasks,
                hydrateFallbackElement: <Loader/>,
                loader: () => fetch('http://localhost:5000/browseTask')
            },
            {
                path: '/browseTask/:id',
                loader: ({params}) => fetch(`http://localhost:5000/browseTask/${params.id}`),
                hydrateFallbackElement: <Loader/>,
                element: <PrivateRoutes><BrowseTaskDetails/></PrivateRoutes>

            },
            {
                path: '/details/:id',
                loader: ({params}) => fetch(`http://localhost:5000/browseTask/${params.id}`),
                hydrateFallbackElement: <Loader/>,
                element: <PrivateRoutes><BrowseTaskDetails/></PrivateRoutes>

            },
            {
                path: '/myPostedTasks/:id',
                element: <PrivateRoutes><MyPostedTasks/></PrivateRoutes>,
                hydrateFallbackElement: <Loader/>,
                loader: ({params}) => fetch(`http://localhost:5000/myPostedTasks/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoutes><UpdateTaskPage/></PrivateRoutes>,
                hydrateFallbackElement: <Loader/>,
                loader: ({params}) => fetch(`http://localhost:5000/allTasks/${params.id}`)
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/terms',
                Component: TermsAndCondition
            }
        ]
    }
])