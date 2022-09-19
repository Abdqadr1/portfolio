import { useEffect, useRef } from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router";
import projects from "./allproject";
import observe from "./observer";
import DarkMode from "./dark-mode";
import { motion } from "framer-motion";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

const ProjectDetails = () => {
    const { name } = useParams();
    const project = projects.find(p => p.name.toLocaleLowerCase() === name.toLocaleLowerCase());
    const ref = useRef();
    useEffect(() => {
        if (ref.current) {
            observe(ref.current);
        }
    });

    // animation 
    const containerVariants = {
        hidden: {
            opacity: 0,
            x: "100vw"
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                delay: .8,
                duration: 2
            }
        },
        exit: {
            x: "-100vw",
            transition: {
                ease: "easeInOut",
                duration: 1
            }
        }
    }

    if (!project) return <h3 className="fw-bold mt-5">Not found</h3>
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="motioning"
        >
        <div className="pb-4 pt-2">
            <Container>
                <div className="d-flex justify-content-between position-relative">
                    <div className="d-flex justify-content-start">
                        <Link to="/" className="home-icon me-4">
                            <Icon className="fs-4 dark-toggle" icon="mdi:home" />
                        </Link>
                        <h2 className="heading-secondary fs-3 text-start mt-2 mb-4 ms-5">{project.name}</h2>
                    </div>
                    <div className="my-position ms-3">
                        <DarkMode />
                    </div>
                </div>
            </Container>
            <Row className="justify-content-center mx-0 px-5">
                <Col sm="11" md="8">
                    <Carousel className="carousel p-3 shadow rounded" variant="dark">
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
        </motion.div> 
     );
}
 
export default ProjectDetails;