import { useContext } from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { AuthContext } from "../../hooks/AuthProvider";


const Home = () => {

    const {loading} = useContext(AuthContext);

    if (loading) {
        return <div className="flex justify-center items-center h-[60vh] text-6xl">
            <span className="loading loading-spinner text-primary">
            </span></div>
    }

    return (
        <div>
            <div className="container mx-auto">
                <Banner></Banner>
                <Services></Services>
                <About></About>
                <Contact></Contact>
            </div>
            <div className="mt-20">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;