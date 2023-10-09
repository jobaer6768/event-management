import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../hooks/AuthProvider";


const Navbar = () => {

    const { user, signOutUser, loading } = useContext(AuthContext);

    const handleLogOut = () => {
        signOutUser()
            .then()
            .catch()
    }

    const navLinks =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact Us</NavLink></li>
            <li><NavLink to='/gallery'>Gallery</NavLink></li>
            <li><NavLink to='/profile'>Profile</NavLink></li>
        </>

    if (loading) {
        return <div className="flex justify-center items-center h-[60vh] text-6xl">
            <span className="loading loading-spinner text-primary">
            </span></div>
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-semibold shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <h2 className="text-xl md:text-3xl font-bold normal-case">Event Agency</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    {
                        user ? <>
                            <div className="flex gap-4 items-center">
                                <div>
                                    <img className="w-10" src={user?.photoURL} alt="" />
                                </div>
                                <div className="text-xs">
                                    {user?.displayName}
                                </div>

                                <div>
                                    <Link onClick={handleLogOut} to='/login' className="btn btn-outline btn-primary">
                                        Log Out
                                    </Link>
                                </div>
                            </div>
                        </> : <>
                            <Link to='/login' className="btn btn-outline btn-primary">
                                Login
                            </Link>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;