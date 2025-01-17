import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Reagister from "../Pages/Reagister/Reagister";
import News from "../Pages/News";
import PrivateRouts from "./PrivateRouts";



const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/news.json'),
            },
            {
                path: '/news/:id',
                element: <PrivateRouts><News /></PrivateRouts>
            },

            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/reagister',
                element: <Reagister />
            }
        ]
    },
]);
export default routes