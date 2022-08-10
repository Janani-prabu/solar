import React from "react";
import { Container,Row,Col} from 'react-bootstrap';
import about1 from '../images/about1.jpg';
import about2 from '../images/about2.jpg';
import vision_mission from '../images/vision_mission.jpg';
import { ImOffice } from "react-icons/im";
import { ImMobile } from "react-icons/im";
import { ImMail } from "react-icons/im";
import Styles from '../Stylesheets/Aboutus.module.css';
function Aboutus()
{
    return(
    <div>
     <h1>About Us</h1>
     <br></br>
     <p>
        Iayan Solar Source is proud to be a privately-held solar products and service provider in Vellore. 
        Since our inception in 2017, we have had a proven history and reputation. We offer the best quality 
        solar products and are committed to excellent customer service. In addition to that our prices are 
        competitive.</p>
     <br></br>
     <p>From design through installation, we manage the entire process and provide flexible, innovative 
        solutions that are custom tailored to your needs.
         Our work is 100% completed by our team, and we will never outsource our work.
     </p>
     <Container>
     <Row>
        <Col>
        <img src={about1} alt="about" height="300" width="500"></img>
        </Col>
        <Col>
        <img src={about2} alt="about" height="300" width="500"></img>
        </Col>
     </Row>
     </Container>
     <br></br>
     <div className={Styles.contactus}>
      <br></br>
      <h1>Let's make something great together....</h1>
     <div className={Styles.contact}>Contact us via</div>
     <br></br>
     <Container>
      <Row>
         <Col>
         <ImOffice className={Styles.icons}/>
         <h4>Address</h4>
         
         55, Pillyar Kovil Street,<br></br>
         Kammasamuthiram, Vill Post, <br></br>
         Near Canara Bank, Vellore-632319, <br></br>
         Tamil Nadu,<br></br>
         India.
         </Col>
         <Col>
         <ImMobile className={Styles.icons}/>
         <h4>Mobile</h4>
         Call : 08048372713<br></br>
         Dial Ext 521 when connected
         </Col>
         <Col>
         <ImMail className={Styles.icons}/>
         <h4>Mail</h4>
         </Col>
      </Row>
     </Container>
     <br></br>
     </div>
     <h1>Our Vision and Missions</h1>
     <br></br>
     <Container>
     <Row>
      <Col> <img src={vision_mission} alt="vision and mission" ></img></Col>
      <Col>
      <Row>
         <h3>VISION</h3>
         <p>Our goal is to educate our customers and find the best solutions for their needs.
            Going solar is more affordable than you would think when you add in the available tax credits,
            warranties, and financing options. It provides savings from day one and adds value to your home.
            Solar energy is clean, renewable, and abundant. Unlike fossil fuels, solar energy does not 
            generate harmful carbon emissions and other greenhouse gases that are known to contribute to 
            global warming.
            So,You can Save money and save the planet.</p>
      </Row>
      <Row>
         <h3>MISSION</h3>
         <p>To guarantee all of our installations meet the local municipal and national building codes.

         To stand behind every solar system we install and that is why we offer a 10-year warranty on 
         the craftsmanship of all installed solar systems.
         Most importantly, to become a local, relationship-based contractor that is always striving for
         perfection and never more than a phone call away.</p>
      </Row>
      </Col>
     </Row>
     </Container>
     <br></br>
    </div>
    )
}
export default Aboutus