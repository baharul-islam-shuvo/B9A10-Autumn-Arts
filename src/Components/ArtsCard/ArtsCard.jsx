import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const ArtsCard = ({ art, arts, setArts }) => {

    const { _id, name, stockStatus, customization, rating, price, description, category, item, photo } = art;

    const handleDelete = _id => {
        console.log(_id);

        // confirm delete
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // delete from backend
                fetch(`http://localhost:5000/arts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = arts.filter(art => art._id !== _id);
                            setArts(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className="relative group w-96 h-80 overflow-hidden rounded-lg shadow-lg">
            {/* Image */}
            <img
                src={photo}
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 w-full gap-6">
                <div className="text-center text-white">
                    <h3 className="text-xl font-semibold mb-2">{name}</h3>
                    <p className="text-sm">{description}</p>
                </div>

                <div className="btn-group-vertical w-6 space-y-4">

                    <button className="btn btn-active mb-4">View</button>
                    <Link to={`update/${_id}`}>
                        <button className="btn">Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn">Delete</button>
                </div>
            </div>
        </div>
    );
};

ArtsCard.propTypes = {
    art: PropTypes.object.isRequired
}

export default ArtsCard;