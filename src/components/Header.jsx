import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import jmLogo from '../assets/jm-no-back.png'
import './header.css'

export default function Header(){
    return(
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
      <Container id='header'>
        <Navbar.Brand href="/home" style={{marginRight: 150}}>
                <img src={jmLogo} 
                     width="50" height="50" 
                     alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/projects" style={{marginRight: 50}}>Projects</Nav.Link>
            <Nav.Link href="/about" style={{marginRight: 50}}>About Me</Nav.Link>
            <Nav.Link href="/contact" style={{marginRight: 50}}>Contact</Nav.Link>
          </Nav>
          <Nav>
          <NavDropdown title="Links" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://github.com/jamesm1201">
                GitHub
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/james-morley-736b79209">
                LinkedIn
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}