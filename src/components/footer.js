const Footer = () => {
    return ( 
        <>
             <footer className="footer">
                <div className="footer-container">
                <a href="/" className="footer-logo">Ronny.</a>
                <ul>
                    <li>
                    <a href="#Service" className="footer-text">Service</a>
                    </li>
                    <li>
                    <a href="#Portfolio" className="footer-text">Portfolio</a>
                    </li>
                    <li>
                    <a href="/" className="footer-text">Blog</a>
                    </li>
                    <li>
                    <a href="#Testimonial" className="footer-text">Testimonial</a>
                    </li>
                    <li>
                    <a href="#About" className="footer-text">About</a>
                    </li>
                    <li>
                    <a href="#Contact" className="footer-text">Contact</a>
                    </li>
                </ul>
                <div className="footer-copyright">
                    <p>All right reserved &copy; <span id="year"></span></p>
                </div>
                </div>
            </footer>
        </>
     );
}
 
export default Footer;