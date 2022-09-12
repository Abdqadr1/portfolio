/* eslint-disable jsx-a11y/anchor-is-valid */
import { Nav } from "react-bootstrap";
import arrow from "../images/icons/arrow-up.svg";
import { useRef, useEffect } from "react";
const Footer = () => {
    const bRef = useRef();

    useEffect(() => {
        if (bRef.current) {
            let backtotop = bRef.current;
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 100) {
                    backtotop.classList.add('active')
                } else {
                    backtotop.classList.remove('active')
                }
            })
        }
        
    })

    return ( 
        <>
            <a ref={bRef} href="#Navbar" className="back-to-top d-flex align-items-center justify-content-center">
                <img src={arrow} alt="" />
            </a>
             <footer className="footer">
                <div className="footer-container">
                <a href="#" className="footer-logo">Quadri</a>
                <ul className="text-white">
                    <li>
                        <Nav.Link href="#Service" className="footer-text">Service</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link href="#Portfolio" className="footer-text">Portfolio</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link href="#About" className="footer-text">About</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link href="#Contact" className="footer-text">Contact</Nav.Link>
                    </li>
                </ul>
                <div className="footer-copyright">
                        <p>All right reserved &copy; <span id="year">{new Date().getFullYear()}</span></p>
                </div>
                </div>
            </footer>
        </>
     );
}
 
export default Footer;