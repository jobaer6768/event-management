import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";
import About from "../About/About";
import Contact from "../Contact/Contact";


const Home = () => {
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