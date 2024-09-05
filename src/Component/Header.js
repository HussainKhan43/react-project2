import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'; 
import logo from '../assets/img/logo.png.webp';

function Header() {
  return (
      <>
       <Navbar expand="lg" className=" bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#"><img src={logo} alt=''/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '800px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/Courses">Browse Courses</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/Home">Blog</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
            <Button variant="outline-danger">Sign In</Button>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
  );
}

export default Header;