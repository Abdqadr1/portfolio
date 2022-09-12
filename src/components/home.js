import portfolio from "../images/portfolio.png";
import About from "./about";
import Stacks from "./stacks";
import Contact from "./contact";
import Portfolios from "./portfolio";
import Services from "./services";
import Footer from "./footer";
import NavBar from "./navbar";
import { useEffect, useRef } from "react";
import observe from "./observer";

const Home = () => {
    const ref = useRef();
    useEffect(() => {
        if (ref.current) {
            observe(ref.current);
        }
    })
    return ( 
        <>
        <NavBar />
            <header ref={ref} className="header" data-animate="zoom">
                <div className="header-container py-3">
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
            <Footer />
        </>
     );
}
 
export default Home;