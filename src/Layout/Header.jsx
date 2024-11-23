import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const navLinks = <>
        <NavLink to="/all-artwork" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">All Artworks</NavLink>
        <NavLink to="/login" className="text-red-500 font-medium transition-all duration-200 rounded focus:outline-none hover:text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">All Artists</NavLink>
        <NavLink to="/" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Sell Your Artwork</NavLink>
    </>
    return (
        <header className="bg-white mt-8">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12">
                <div className="flex items-center justify-between h-16 lg:h-[72px]">
                    <div className="flex items-center flex-shrink-0">
                        <Link to='/' title="" className="inline-flex text-2xl font-semibold">
                            <span className="text-red-600 text-2xl font-semibold">/</span>Autumn Arts
                        </Link>
                    </div>

                    <div className="hidden lg:flex lg:justify-start lg:ml-16 lg:space-x-8 xl:space-x-14">
                        {navLinks}
                    </div>

                    <div className="flex items-center justify-end ml-auto">
                        <div className="hidden lg:flex lg:items-center lg:space-x-8">
                            <Link to='/register' title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> Create Free Account </Link>

                            <Link to='/login' title="" className="text-base font-medium text-red-500 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> Login </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;