import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../images/logo.png";
import twitter from "../images/twiter.png";
import github from "../images/github.png";
import figma from "../images/figma.png";
import dribble from '../images/dribbble.png';
const NavBar = () => {
    return ( 
        <Navbar bg="white" expand="md">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto text-start">
                    <Nav.Link href="#service">Service</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                <Nav className="ms-auto text-start flex-row">
                    <Nav.Link className="me-2 me-md-0" href="#home">
                        <img
                            alt=""
                            src={twitter}
                            width="22"
                            height="22"
                            className="d-inline-block align-top"
                            />
                        </Nav.Link>
                    <Nav.Link className="mx-2 mx-md-0" href="#home">
                        <img
                            alt=""
                            src={dribble}
                            width="22"
                            height="22"
                            className="d-inline-block align-top"
                            />
                    </Nav.Link>
                    <Nav.Link className="mx-2 mx-md-0" href="#home">
                        <img
                            alt=""
                            src={figma}
                            width="22"
                            height="22"
                            className="d-inline-block align-top"
                            />
                        </Nav.Link>
                    <Nav.Link className="mx-2 mx-md-0" href="#home">
                        <img
                            alt=""
                            src={github}
                            width="22"
                            height="22"
                            className="d-inline-block align-top"
                            />
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default NavBar