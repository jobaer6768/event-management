import { useContext } from "react";
import { AuthContext } from "../../hooks/AuthProvider";


const Profile = () => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="flex justify-center items-center h-[60vh] text-6xl">
            <span className="loading loading-spinner text-primary">
            </span></div>
    }

    return (
        <div className="container mx-auto">
            <div className="flex flex-col gap-6 justify-center items-center h-[90vh]">
                <p className="text-2xl font-bold">Name: <span className="text-orange-400">{user?.displayName}</span></p>
                <p className="text-2xl font-bold">Email: <span className="text-orange-400">{user?.email}</span></p>
                <div>
                    <img src={user?.photoURL} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Profile;