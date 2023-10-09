import { useContext } from "react";
import { AuthContext } from "../hooks/AuthProvider";


const PrivateRoute = ({ children }) => {

    const { loading, user } = useContext(AuthContext);

    if (loading) {
        return <div className="flex justify-center items-center h-[60vh] text-6xl">
            <span className="loading loading-spinner text-primary">
            </span></div>
    }

    return (
        <div>

        </div>
    );
};

export default PrivateRoute;