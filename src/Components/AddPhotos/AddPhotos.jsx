const AddPhotos = () => {
    return (
        <div className="m-16">
            <h2 className="text-3xl font-bold text-center">Contribute Your Hard Work with People</h2>
            <form>
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
            </form>
        </div>
    );
};

export default AddPhotos;