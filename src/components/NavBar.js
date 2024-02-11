import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>Online Chat</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/ChatRoom">ChatRoom</Nav.Link>
            </Nav>
  
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/Login">Log in</Nav.Link>
            </Nav>
  
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );

}

export default NavBar;