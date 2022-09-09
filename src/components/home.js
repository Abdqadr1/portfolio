import portfolio from "../images/portfolio.png";
import About from "./about";
import Brands from "./brands";
import Contact from "./contact";
import Portfolios from "./portfolio";
import Services from "./services";

const Home = () => {
    return ( 
        <>
            <header className="header">
                <div className="header-container">
                    <div className="header-content">
                        <h1 className="heading-primary">Hello, I’m Ronny</h1>
                        <h3 className="header-text">Freelancer | Graphic Designer | UI UX Designer </h3>
                        <p className="text-paragraph-18">I'm a digital product designer focusing on crafting user experiences and design
                        systems for software, web, and mobile products.</p>
                        <a href="/g" type="button" className="btn btn-primary">Hire me</a>
                    </div>
                    <div className="header-img">
                        <img src={portfolio} alt=""/>
                    </div>
                </div>
            </header>
            <Brands />
            <Services />
            <Portfolios />
            <About />
            <Contact />
        </>
     );
}
 
export default Home;