import { createBrowserRouter } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import Main from "../LayOut/Main";
import AddTask from "../Pages/AddTask/AddTask";
import BrowseTaskDetails from "../Pages/BrowseTaskDetails/BrowseTaskDetails";
import BrowseTasks from "../Pages/BrowseTasks/BrowseTasks";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyPostedTasks from "../Pages/MyPostedTasks/MyPostedTasks";
import Register from "../Pages/Register/Register";
import TermsAndCondition from "../Pages/TermsAndCondition/TermsAndCondition";
import UpdateTaskPage from "../Pages/UpdateTaskPage/UpdateTaskPage";
import PrivateRoutes from "./PrivateRoutes";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactPage from "../Pages/ContactPage/ContactPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import OverviewPage from "../components/OverviewPage/OverviewPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "browseTask",
        Component: BrowseTasks,
        hydrateFallbackElement: <Loader />,
        loader: () =>
          fetch(
            "https://assignment-10-server-side-psi-eight.vercel.app/browseTask"
          ),
      },
      {
        path: "/browseTask/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-side-psi-eight.vercel.app/browseTask/${params.id}`
          ),
        hydrateFallbackElement: <Loader />,
        element: (
          <PrivateRoutes>
            <BrowseTaskDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-side-psi-eight.vercel.app/browseTask/${params.id}`
          ),
        hydrateFallbackElement: <Loader />,
        element: (
          <PrivateRoutes>
            <BrowseTaskDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoutes>
            <UpdateTaskPage />
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loader />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-side-psi-eight.vercel.app/allTasks/${params.id}`
          ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/terms",
        Component: TermsAndCondition,
      },
      {
        path: '/aboutUS',
        Component: AboutUs
      },
      {
        path: '/contact-us',
        Component: ContactPage
      }
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoutes><Dashboard/></PrivateRoutes>,
    children: [
      {
        index: true,
        Component: OverviewPage
      },
      {
        path:'overview',
        Component: OverviewPage
      },
      {
        path: "addTask",
        element: (
          <PrivateRoutes>
            <AddTask />
          </PrivateRoutes>
        ),
      },
      {
        path: "myPostedTasks/:uid",
        element: (
          <PrivateRoutes>
            <MyPostedTasks />
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loader />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-side-psi-eight.vercel.app/myPostedTasks/${params.uid}`
          ),
      },
    ]
  }
]);
