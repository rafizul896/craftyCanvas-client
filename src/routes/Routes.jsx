import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllCraftItems from "../pages/requirePages/AllCraftItems";
import AddCraftItem from "../pages/requirePages/AddCraftItem";
import MyArtCraft from "../pages/requirePages/MyArtCraft";
import PrivetRouter from "./PrivetRouter";
import CraftViewDetailsPage from "../pages/requirePages/CraftViewDetailsPage";
import UpdateArtCraft from "../pages/updatePage/UpdateArtCraft";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/craftItems')
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
                element: <AllCraftItems></AllCraftItems>,
                loader: () => fetch('http://localhost:5000/craftItems')
            },
            {
                path: "/addCraftItem",
                element: <PrivetRouter>
                    <AddCraftItem></AddCraftItem>
                </PrivetRouter>
            },
            {
                path: "/myArtCrafts/:email",
                element: <PrivetRouter>
                    <MyArtCraft></MyArtCraft>
                </PrivetRouter>,
                loader: ({params})=>fetch(`http://localhost:5000/myCraftItems/${params.email}`)
            },
            {
                path: "/myCraftItems/:email/:id",
                element: <PrivetRouter>
                    <UpdateArtCraft></UpdateArtCraft>
                </PrivetRouter>,
                loader: ({params})=>fetch(`http://localhost:5000/myCraftItems/${params.email}/${params.id}`)
            },
            {
                path: '/craftDetailsPage/:id',
                element: <PrivetRouter>
                    <CraftViewDetailsPage></CraftViewDetailsPage>
                </PrivetRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/craftItems/${params.id}`)
            }
        ]
    }
])

export default routes;