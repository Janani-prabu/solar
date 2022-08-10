import React from "react";
import {Navbar} from  'react-bootstrap';
import Nav from  'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Container} from  'react-bootstrap';
import logo1 from '../images/logo1.jpg';
import Styles from '../Stylesheets/Header.module.css';
import { LinkContainer } from "react-router-bootstrap";


function Header()
{
    return(
        <div className={Styles.head}>
   <Navbar collapseOnSelect expand="lg"  sticky='top'  variant="dark">
  <Container >
  <Navbar.Brand ><img src={logo1} width="110" height="50" alt="logo"></img>      Iayan Solar Source</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
    <Nav >
      <LinkContainer to="/">
      <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/productsAndServices">
      <Nav.Link>Product and Services</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/service">
      <Nav.Link>Service Booking</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/aboutus">
      <Nav.Link>About Us</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/adminlogin">
      <Nav.Link>Admin Login</Nav.Link>
      </LinkContainer>
      
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  </div>
  );
}
export default Header;
