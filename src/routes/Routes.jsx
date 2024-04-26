import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllCraftItems from "../pages/requirePages/AllCraftItems";
import AddCraftItem from "../pages/requirePages/AddCraftItem";
import MyArtCraft from "../pages/requirePages/MyArtCraft";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/allCraftItems",
                element: <AllCraftItems></AllCraftItems>
            },
            {
                path: "/addCraftItem",
                element: <AddCraftItem></AddCraftItem>
            },
            {
                path: "/myArtCraft",
                element: <MyArtCraft></MyArtCraft>
            }
        ]
    }
])

export default routes;