import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link} from 'react-scroll';
import Logo from '../assets/Logo.png';
import {
  NavLink
} from "react-router-dom";
function Header () {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className="text-decoration-none text-white">
            <div className='OuterWrapperLogoImage'>
              <img src={Logo} alt="Logo" style={{width: '100%',height:"100%",objectFit: "cover"}} />
            </div>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto HeaderLinks">
              <Link
                to="our-services"
                spy={true}
                smooth={true}
                duration={500}
                className="text-decoration-none text-white"
              >
                Our Services
              </Link>
              <Link
                to="book-service"
                spy={true}
                smooth={true}
                duration={500}
                className="text-decoration-none text-white"
              >
                Book Service
              </Link>
              <Link
                to="why-choose-us?"
                spy={true}
                smooth={true}
                duration={500}
                className="text-decoration-none text-white"
              >
                Why Choose us?
              </Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
