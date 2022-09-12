import { useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import observe from "./observer";

const Contact = () => {
    const ref = useRef();
    useEffect(() => {
        if (ref.current) {
            observe(ref.current);
        }
    })
    return ( 
        <>
            <section ref={ref} id="Contact" className="contact" data-animate="jack">
                <div className="sub-heading">
                <h2 className="heading-secondary">Contact me</h2>
                <p className="text-paragraph-16">Contact me for freelance/contract work, consulting, or if you want to chat! I'd be
                    happy to hear from you.</p>
                </div>
                
                <Row className="justify-content-center mx-0">

                    <Col lg="6" className="text-paragraph-14">

                        <div className="row">
                        <div className="col-md-12">
                            <div className="info-box">
                            <i className="bi bi-geo-alt fs-2"></i>
                            <h3>Address</h3>
                            <p>10A Elenusonso Eleyele, Ibadan, Oyo state, Nigeria 200229</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-box mt-4">
                                <i className="bi bi-envelope fs-2"></i>
                                <h4 className="mb-3">Email Me</h4>
                                <a className="d-block text-paragraph-14 text-decoration-none" href="mailto: abolarinwaquadri@gmail.com">abolarinwaquadri@gmail.com</a>
                                <a className="d-block text-paragraph-14 text-decoration-none" href="mailto: abdqadr95@gmail.com">abdqadr95@gmail.com</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-box mt-4">
                            <i className="bi bi-telephone fs-2"></i>
                            <h4 className="mb-3">Call Me</h4>
                            <a className="d-block text-paragraph-14 text-decoration-none" href="tel: +2349038539654">+234 9038539654</a>
                            <a className="d-block text-paragraph-14 text-decoration-none" href="tel: +2348115213342">+2348115213342</a>
                            </div>
                        </div>
                        </div>

                    </Col>

                </Row>
            </section>
        </>
     );
}
 
export default Contact;