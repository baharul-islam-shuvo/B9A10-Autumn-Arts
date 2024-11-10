import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App.jsx";
import AddPhotos from "../Components/AddPhotos/AddPhotos.jsx";
import Root from "../root/Root.jsx";
import UpdatePhotos from "../Components/UpdatePhotos/UpdatePhotos.jsx";
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root></Root>,
            children: [
                {
                    path: "/",
                    element: <App></App>
                },
                {
                    path: "/add",
                    element: <AddPhotos></AddPhotos>
                },
                {
                    path: "/update",
                    element: <UpdatePhotos></UpdatePhotos>
                },
            ]
        },
    ]);


export default router;