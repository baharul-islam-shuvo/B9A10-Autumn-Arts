import { Link } from "react-router-dom";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        console.log(form.email.value, form.password.value);
    }

    return (
        <div className="w-full mt-8 mb-6 m-auto max-w-md p-4 rounded-md bg-white text-gray-900">
            <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
            <p className="text-sm text-center text-gray-400">Don&apos;t have account?
                <Link to='/register' className="focus:underline hover:underline">Sign up here</Link>
            </p>
            <div className="my-6 space-y-4">
                <button className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-default-400">
                    <FaGoogle className="text-lg" />
                    <p>Login with Google</p>
                </button>
                <button className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-default-400">
                    <FaGithub className="text-xl" />
                    <p>Login with GitHub</p>
                </button>
                <button className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-default-400">
                    <FaTwitter className="text-xl" />
                    <p>Login with Twitter</p>
                </button>
            </div>
            <div className="flex items-center w-full my-4">
                <hr className="w-full text-gray-400" />
                <p className="px-3 text-gray-400">OR</p>
                <hr className="w-full text-gray-400" />
            </div>
            <form onSubmit={handleLogin} className="space-y-8">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <p className="block text-sm">Email address</p>
                        <input type="email" name="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-100 text-gray-100 focus:border-default-400" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <p className="text-sm">Password</p>
                            <a className="text-xs hover:underline text-gray-400">Forgot password?</a>
                        </div>
                        <input type="password" name="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-100 text-gray-700 focus:border-default-400" />
                    </div>
                    <div>
                        <button className="btn btn-neutral w-full px-8 py-3 font-semibold rounded-md bg-default-400 text-gray-200">Sign in</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;