import React from "react";
import {Link} from 'react-router-dom';
import { Container,Row,Col} from 'react-bootstrap';
import Styles from '../Stylesheets/Footer.module.css';
import logo1 from '../images/logo1.jpg';
import {BsInstagram} from 'react-icons/bs';
import {ImLinkedin}  from 'react-icons/im';
import {ImFacebook2} from 'react-icons/im';
import {SiTwitter} from 'react-icons/si';

function Footer(){
    return(
       <div className={Styles.bg}>
           <br></br>
           <Container>
           <Row>
            <Col>
            <h4 className={Styles.foot}>QUICK LINKS</h4>
           <ul className={Styles.links}>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/productsAndServices">Product and Services</Link></li>
               <li><Link to="/service">Service Booking</Link></li>
               <li><Link to="/aboutus">About Us</Link></li>
               <li><Link to="/adminlogin">Admin Login</Link></li>
           </ul>
            </Col>
            <Col>
            <img src={logo1} width="110" height="50" alt="logo"></img>      
            <div className={Styles.name}>Iayan Solar Source</div>
            </Col>
            <Col>
            <h4 className={Styles.foot}>GET IN TOUCH</h4>
            <div className={Styles.icons}> 
            <BsInstagram className={Styles.icons_footer}></BsInstagram>
            <ImFacebook2 className={Styles.icons_footer}></ImFacebook2>
            <a href="https://www.linkedin.com/in/santhosh-kumar-a15a72bb/" target="_blank"><ImLinkedin className={Styles.icons_footer} ></ImLinkedin></a>
            <SiTwitter className={Styles.icons_footer}></SiTwitter>
            </div>
            </Col>
           </Row>
           </Container>
           <br></br>
       </div>
    );
}
export default Footer