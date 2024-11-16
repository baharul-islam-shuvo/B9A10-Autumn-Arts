import {
    createBrowserRouter,
} from "react-router-dom";
import AddPhotos from "../Pages/AddPhotos/AddPhotos.jsx";
import Root from "../root/Root.jsx";
import UpdatePhotos from "../Components/UpdatePhotos/UpdatePhotos.jsx";
import Home from "../Pages/Home/Home.jsx";
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
                    path: "/update/:id",
                    element: <UpdatePhotos></UpdatePhotos>,
                    loader: ({ params }) => fetch(`http://localhost:5000/arts/${params.id}`)
                },
            ]
        },
    ]);


export default router;