import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const NavBar = () => {
    const { username } = useAuth();

    useEffect(() => {
      console.log(username);
    }, [])

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
              {username
              ?
              <>
                <Nav.Link as={Link} to="/Profile">{`${username} |`}</Nav.Link>
                <Nav.Link as={Link} to="/Logout">Log out</Nav.Link>
              </>
              :
              <Nav.Link as={Link} to="/Login">Log in</Nav.Link>}
              
            </Nav>
  
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );

}

export default NavBar;