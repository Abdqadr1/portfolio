import projects from "./allproject";
import Project from "./project"
const Portfolios = () => {
    return ( 
        <>
            <section id="Portfolio" className="portfolio">
                <div className="sub-heading">
                <h2 className="heading-secondary">Some of my recent work</h2>
                </div>
                <div className="portfolio-container">
                    {
                        projects.map((p, i) => <Project key={i} name={p.name} type={p.type} image={p.images[0]} />)
                    }
                </div>
            </section>
        </>
     );
}
 
export default Portfolios;