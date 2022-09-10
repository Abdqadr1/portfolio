const Project = ({image, type, name}) => {
    return ( 
        <>
            <div class="portfolio-card text-start">
                <img src={image} alt=""/>
                <div class="portfolio-card-content">
                <h3 class="heading-tertiary">{name}</h3>
                <p class="text-paragraph-16">{type}</p>
                </div>
            </div>
        </>
     );
}
 
export default Project;