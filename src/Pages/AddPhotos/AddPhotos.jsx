// a. image ( use image URL)
// b. item_name
// c. subcategory_Name
// d. short description
// e. price
// f. rating
// g. customization- example- yes, no
// h. processing_time
// i. stockStatus - example- In stock, Made to Order
// j. User Email
// k. User Name
// l. “Add” button
import Swal from 'sweetalert2'
const AddPhotos = () => {

    const handleAdd = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const stockStatus = form.stockStatus.value;
        const processingTime = form.processingTime.value;
        const customization = form.customization.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const description = form.description.value;
        const category = form.category.value;
        const item = form.item.value;
        const photo = form.photo.value;

        const newAdd = { name, email, stockStatus, processingTime, customization, rating, price, description, category, item, photo };

        console.log(newAdd);

        // send to server
        fetch('http://localhost:5000/arts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAdd),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Artwork Has Successfully Added',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="m-16">
            <h2 className="text-3xl font-bold text-center">Contribute Your Hard Work with People</h2>
            <form onSubmit={handleAdd}>

                {/* User name & Email */}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Name" name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" placeholder="Email" name="email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* stockStatus & processingTime */}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Stock Status</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Stock Status" name="stockStatus" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Processing Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Processing Time" name="processingTime" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* customization & rating */}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Customization</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Yes or No" name="customization" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Rating" name="rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* price & short description */}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Price" name="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Description" name="description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* category name & item name */}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Category" name="category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Item Name" name="item" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* image URL */}
                <div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Photo" name="photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* Button */}
                <div>
                    <input type="submit" value="Add Item" className="btn btn-neutral w-full mt-6" />
                </div>
            </form>
        </div>
    );
};

export default AddPhotos;