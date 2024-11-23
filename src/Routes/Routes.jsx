import {
    createBrowserRouter,
} from "react-router-dom";
import AddPhotos from "../Pages/AddPhotos/AddPhotos.jsx";
import Root from "../root/Root.jsx";
import UpdatePhotos from "../Components/UpdatePhotos/UpdatePhotos.jsx";
import Home from "../Pages/Home/Home.jsx";
import Login from "../Pages/Login/Login.jsx";
import Register from "../Pages/Register/Register.jsx";
import AllArtwork from "../Pages/AllArtwork/AllArtwork.jsx";
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root></Root>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>,
                    loader: () => fetch('http://localhost:5000/arts')
                },
                {
                    path: "/add",
                    element: <AddPhotos></AddPhotos>
                },
                {
                    path: "/all-artwork",
                    element: <AllArtwork></AllArtwork>
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
                    path: "/update/:id",
                    element: <UpdatePhotos></UpdatePhotos>,
                    loader: ({ params }) => fetch(`http://localhost:5000/arts/${params.id}`)
                },
            ]
        },
    ]);


export default router;