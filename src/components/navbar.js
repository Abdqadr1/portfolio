import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../images/logo.png";
import { Icon } from '@iconify/react';
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
                    <Nav.Link href="#Service">Service</Nav.Link>
                    <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#Contact">Contact</Nav.Link>
                </Nav>
                <Nav className="ms-auto text-start flex-row">
                    <Nav.Link className="me-2 me-md-0" href="https://twitter.com/olaleyone">
                        <Icon className="fs-5" icon="akar-icons:twitter-fill" />
                    </Nav.Link>
                    <Nav.Link className="mx-2 mx-md-0" href="https://web.facebook.com/abolarinwa.quadri/">
                        <Icon className="fs-5" icon="brandico:facebook" />
                    </Nav.Link>
                    <Nav.Link className="mx-2 mx-md-0" href="https://www.linkedin.com/in/abolarinwa-quadri-a08b39144">
                        <Icon className="fs-5" icon="akar-icons:linkedin-box-fill" />
                    </Nav.Link>
                    <Nav.Link className="mx-2 mx-md-0" href="https://github.com/abdqadr1">
                        <Icon className="fs-5" icon="akar-icons:github-fill" />
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default NavBar