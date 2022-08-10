import React from "react";
import {Navbar} from  'react-bootstrap';
import Nav from  'react-bootstrap/Nav'
import {Container} from  'react-bootstrap';
import logo1 from '../images/logo1.jpg';
import Styles from '../Stylesheets/Header.module.css';
import { LinkContainer } from "react-router-bootstrap";
import firebase from '../firebase';
import { useNavigate } from "react-router-dom";

function Adminheader()
{
    const navigate = useNavigate();
    const log = (e) =>{
        e.preventDefault();
        firebase.auth().signOut().then(() => {
            console.log("logged out");
            navigate('/');
        });

       
    }
    return(
        <div className={Styles.head}>
   <Navbar collapseOnSelect expand="lg"  sticky='top'  variant="dark">
  <Container >
  <Navbar.Brand ><img src={logo1} width="110" height="50" alt="logo"></img>      Iayan Solar Source</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
    <Nav >
      <LinkContainer to="/">
      <Nav.Link onClick={(event) => {log(event)}}>Logout</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  </div>
  );
}
export default Adminheader;