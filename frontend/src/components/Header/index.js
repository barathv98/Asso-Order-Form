import { Navbar, Nav, Container } from "react-bootstrap";
import pic from "../../assets/logo.png";
import "./styles.scss";

function Header() {
    return (
        <Navbar bg="light" expand="lg" variant="light">
            <Container>
                <img src={pic} alt="brand-logo" className="brand-logo" />
                <Navbar.Brand href="/" className="brand-name">ASSOCIATE PRINTS</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" style={{ justifyContent: 'flex-end' }}>
                    <Nav
                        className="mr-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/mynotes">Books Catalogue</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;