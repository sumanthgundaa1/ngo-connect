import React, {Fragment} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.scss';

const authenticatedOptions = (
  <Fragment>
    <NavDropdown.Item href="#change-password">Change Password</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#sign-out">Sign Out</NavDropdown.Item>
  </Fragment>
);

const unauthenticatedOptions = (
  <Fragment>
    <NavDropdown.Item href="#sign-in">Sign In</NavDropdown.Item>
  </Fragment>
);

const alwaysOptions = (
  <Fragment>
    <Nav.Link className="nav-item" href="#home">
      Home
    </Nav.Link>
    <Nav.Link className="nav-item" href="#volunteer/openings">
      Volunteering Opportunities
    </Nav.Link>
    <Nav.Link className="nav-item" href="#about">
      About
    </Nav.Link>
    <Nav.Link className="nav-item" href="#contact">
      Contact Us
    </Nav.Link>
  </Fragment>
);

const Header = ({user}) => (
  <Fragment>
    <Navbar className="main-navbar fixed-top" variant="light" expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">{alwaysOptions}</Nav>
        <NavDropdown
          id="basic-nav-dropdown"
          title={
            <img
              src="https://icongr.am/clarity/login.svg?size=30&color=ffffff"
              alt="Admin"
            />
          }
        >
          {user ? authenticatedOptions : unauthenticatedOptions}
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  </Fragment>
);

export default Header;
