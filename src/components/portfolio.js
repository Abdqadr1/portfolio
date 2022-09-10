import portfolio1 from "../images/portfolio-1.png"
import portfolio2 from "../images/portfolio-2.png"
import portfolio3 from "../images/portfolio-3.png"
import portfolio4 from "../images/portfolio-4.png"
import Project from "./project"
const Portfolios = () => {
    return ( 
        <>
            <section id="Portfolio" class="portfolio">
                <div class="sub-heading">
                <h2 class="heading-secondary">Some of my recent work</h2>
                </div>
                <div class="portfolio-container">
                    <Project name="Creation" type="Adroid iOS" image={portfolio1} />
                    <Project name="Dashboard" type="Adroid iOS" image={portfolio2} />
                    <Project name="Landing Page" type="Web Design" image={portfolio3} />
                    <Project name="Dashboard" type="Web App" image={portfolio4} />
                </div>
            </section>
        </>
     );
}
 
export default Portfolios;