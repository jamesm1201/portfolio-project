import Container from 'react-bootstrap/Container';
import * as Bs from 'react-bootstrap'
import jmLogo from '../assets/jm-no-back.png'
import './header.css'

export default function Header(){
    return(
        <Bs.Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top" id='header'>
      <Container >
        <Bs.Navbar.Brand href="/home" style={{marginRight: 150}}>
                <img src={jmLogo} 
                     width="50" height="50" 
                     alt="Logo" id='nav-link'/></Bs.Navbar.Brand>
        <Bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Bs.Navbar.Collapse id="basic-navbar-nav">
          <Bs.Nav className="me-auto">
            <Bs.Nav.Link href="/projects" style={{marginRight: 50}} id='nav-link'>Projects</Bs.Nav.Link>
            <Bs.Nav.Link href="/about" style={{marginRight: 50}} id='nav-link'>About Me</Bs.Nav.Link>
            <Bs.Nav.Link href="/contact" style={{marginRight: 50}} id='nav-link'>Contact</Bs.Nav.Link>
          </Bs.Nav>
          <Bs.Nav>
          <Bs.NavDropdown title="Links" id="basic-nav-dropdown">
              <Bs.NavDropdown.Item href="https://github.com/jamesm1201">
                GitHub
              </Bs.NavDropdown.Item>
              <Bs.NavDropdown.Item href="https://www.linkedin.com/in/james-morley-736b79209">
                LinkedIn
              </Bs.NavDropdown.Item>
            </Bs.NavDropdown>
          </Bs.Nav>
        </Bs.Navbar.Collapse>
      </Container>
    </Bs.Navbar>
    );
}