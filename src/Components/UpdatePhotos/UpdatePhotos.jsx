import { useLoaderData } from "react-router-dom";

const UpdatePhotos = () => {

    const updatePhotos = useLoaderData();

    const { name, email, stockStatus, processingTime, customization, rating, price, description, category, item, photo } = updatePhotos;

    return (
        <div>
            <h2 className="text-3xl font-bold text-center">This is Update Photos</h2>
        </div>
    );
};

export default UpdatePhotos;