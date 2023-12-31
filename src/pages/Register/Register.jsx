import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../hooks/AuthProvider";


const Register = () => {

    const { createUser, loading } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        setRegisterError('');

        if (!/^(?=.*[A-Z!@#$%^&*])(.{7,}|.*[A-Z].*)$/.test(password)) {
            setRegisterError('Password length must be more than 6 characters or one uppercase letter or special letter ');
            return;
        }

        createUser(email, password)
            .then(res => {
                console.log(res.user);
            })
            .catch(err => {
                console.error(err);
            })
    }

    if (loading) {
        return <div className="flex justify-center items-center h-[60vh] text-6xl">
            <span className="loading loading-spinner text-primary">
            </span></div>
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
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
                                {
                                    registerError && <p className="text-red-700">{registerError}</p>
                                }
                                <label className="label">
                                    <p className="label-text-alt mt-2">
                                        Already have an Account? Please<Link className="text-blue-600 text-base link link-hover ml-1" to='/login'>Login</Link>
                                    </p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;