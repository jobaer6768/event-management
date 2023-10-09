import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const Root = () => {
    return (
        <div className="font-poppins">
            <div className="container mx-auto">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;