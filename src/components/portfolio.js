import portfolio1 from "../images/portfolio-1.png"
import portfolio2 from "../images/portfolio-2.png"
import portfolio3 from "../images/portfolio-3.png"
import portfolio4 from "../images/portfolio-4.png"
const Portfolios = () => {
    return ( 
        <>
            <section id="Portfolio" class="portfolio">
                <div class="sub-heading">
                <h2 class="heading-secondary">Some of my recent work</h2>
                </div>
                <div class="portfolio-container">
                <div class="portfolio-card">
                    <img src={portfolio1} alt=""/>
                    <div class="portfolio-card-content">
                    <h3 class="heading-tertiary">Creation</h3>
                    <p class="text-paragraph-16">Android iOS</p>
                    </div>
                </div>
                <div class="portfolio-card">
                    <img src={portfolio2} alt=""/>
                    <div class="portfolio-card-content">
                    <h3 class="heading-tertiary">Dashboard</h3>
                    <p class="text-paragraph-16">Android iOS</p>
                    </div>
                </div>
                <div class="portfolio-card">
                    <img src={portfolio4} alt=""/>
                    <div class="portfolio-card-content">
                    <h3 class="heading-tertiary">Landing Page</h3>
                    <p class="text-paragraph-16">Web Design</p>
                    </div>
                </div>
                <div class="portfolio-card">
                    <img src={portfolio3} alt=""/>
                    <div class="portfolio-card-content">
                    <h3 class="heading-tertiary">Dashboard</h3>
                    <p class="text-paragraph-16">Web App</p>
                    </div>
                </div>
                </div>
            </section>
        </>
     );
}
 
export default Portfolios;