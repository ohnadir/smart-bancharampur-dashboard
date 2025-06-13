import { createBrowserRouter } from "react-router-dom";
import NotFound from "../Pages/NotFound";
import Main from "../Layout/Main/Main";
import Auth from "../Layout/Auth/Auth";
import Login from "../Pages/Auth/Login";
import Banner from "../Pages/Main/Banner";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Banner />
            },
            {
                path: "/banner",
                element: <Banner />
            }

        ]
    },
    {
        path: "/auth",
        element: <Auth />,
        children: [
            {
                path: "/auth",
                element: <Login />,
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);

export default router;