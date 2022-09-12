import { Link } from "react-router-dom";

const Project = ({ image, type, name }) => {
    const colours = ["pink", "blue"];
    const colour = colours[Math.ceil(Math.random() * colours.length - 1)]
    return ( 
        <>
            <Link to={"/detail/"+name} className="portfolio-card text-start">
                <img src={image} alt={name} className={"p-image " + colour} />
                <div className="portfolio-card-content text-decoration-none">
                    <h3 className="heading-tertiary">{name}</h3>
                    <p className="text-paragraph-16">{type}</p>
                </div>
            </Link>
        </>
     );
}
 
export default Project;