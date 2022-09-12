import { useEffect, useRef } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import projects from "./allproject";
import observe from "./observer";

const ProjectDetails = () => {
    const { name } = useParams();
    const project = projects.find(p => p.name.toLocaleLowerCase() === name.toLocaleLowerCase());
    const ref = useRef();
    useEffect(() => {
        if (ref.current) {
            observe(ref.current);
        }
    })
    if (!project) return <h3 className="fw-bold mt-5">Not found</h3>
    return ( 
        <div className="pb-4 pt-2">
            <h2 className="heading-secondary fs-3 text-start mt-2 mb-4 ps-3">{project.name}</h2>
            <Row className="justify-content-center mx-0 px-5">
                <Col sm="11" md="8" className="p-5 border rounded">
                    <Carousel className="carousel" variant="dark">
                        {
                            project.images.map((image, i) => (
                                <Carousel.Item interval={1000} key={i}>
                                    <img
                                        className="d-block w-100"
                                        src={image}
                                        alt={project.name}
                                    />
                                </Carousel.Item>
                            ))
                        }
                        
                    </Carousel>
                </Col>
                <Col sm="11" md="4" className="text-start ps-md-4">
                    <div className="px-4 py-5 rounded shadow bg-body">
                        <h3 className="mb-2 border-bottom pb-4">Project information</h3>
                        <p className="mb-2"><strong>Category</strong>: {project.type}</p>
                        <p className="mb-2"><strong>Client</strong>: {project.client}</p>
                        <p className="mb-2"><strong>Project URL</strong>: <a className="text-break" target="blank" href={project.url}>{project.url}</a></p>
                    </div>
                    <div className="mt-5 p-1">
                        <h4>{project.name}</h4>
                        <p className="mt-2">{project.description}</p>
                    </div>
                </Col>
            </Row>
            <section ref={ref} className="mt-5 text-start px-3" data-animate="contribution">
                <h6 className="heading-secondary fs-5 headShake">Contribution</h6>
                <p className="mt-3 bounceIn">{project.contribution}</p>
            </section>
            
        </div>
     );
}
 
export default ProjectDetails;