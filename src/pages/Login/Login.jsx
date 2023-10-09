import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../hooks/AuthProvider";
import { FaGoogle } from "react-icons/fa";


const Login = () => {

    const { signInUser, signInGoogle } = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);


        signInUser(email, password)
            .then(res => {
                console.log(res.user);
            })
            .catch(err => {
                console.error(err);
            })
    }

    const handleGoogleLogin = () => {
        signInGoogle()
            .then(res => {
                console.log(res.user);
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSignIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p className="label-text-alt mt-2">
                                        New Here? Please <Link className="text-blue-600 text-base link link-hover ml-2" to='/register'>Register</Link>
                                    </p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <p className="text-xl text-center font-semibold my-2">OR</p>
                                <button onClick={handleGoogleLogin} className="btn btn-primary"><FaGoogle></FaGoogle>Login with Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;