import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import About from "../About/About";
import Contact from "../Contact/Contact";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;