/* eslint-disable jsx-a11y/anchor-is-valid */
import { Nav } from "react-bootstrap";
import { useEffect } from "react";
const Footer = () => {

    useEffect(() => {
        const backtotop = document.querySelector(".back-to-top");
        const scrollFunc = () => {
                if (window.pageYOffset > 100) {
                    backtotop.classList.add('active')
                } else {
                    backtotop.classList.remove('active')
                }
            }
        if (backtotop) {
            window.addEventListener('scroll', scrollFunc);
        }
        return () => {
            window.removeEventListener('scroll', scrollFunc);
            backtotop.classList.remove("active");
        }
    })

    return ( 
        <>
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