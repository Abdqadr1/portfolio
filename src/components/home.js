import portfolio from "../images/portfolio.png";
import About from "./about";
import Stacks from "./stacks";
import Contact from "./contact";
import Portfolios from "./portfolio";
import Services from "./services";
import Footer from "./footer";
import NavBar from "./navbar";
import arrow from "../images/icons/arrow-up.svg";
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <>
        <NavBar />
            <header className="header zoom">
                <div className="header-container">
                    <div className="header-content text-start">
                        <h1 className="heading-primary">Hello, I’m Quadri</h1>
                        <h3 className="header-text">Frontend & Backend Developer | DevOps Engineer </h3>
                        <p className="text-paragraph-18">I'm a full stack developer focusing on the creation and deployment of usable and enjoyable web applications</p>
                        <a href="#Contact" type="button" className="btn btn-primary hire">Hire me</a>
                    </div>
                    <div className="header-img">
                        <img src={portfolio} alt=""/>
                    </div>
                </div>
            </header>
            <Stacks />
            <Services />
            <Portfolios />
            <About />
            <Contact />
            <Link to="#" className="back-to-top d-flex align-items-center justify-content-center">
            <img src={arrow} alt="" />
            </Link>
            <Footer />
        </>
     );
}
 
export default Home;