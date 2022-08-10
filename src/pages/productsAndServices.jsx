import React from 'react'
import homepro1 from '../images/homepro1.jpeg';
import homepro2 from '../images/homepro2.jpg';
import homepro3 from '../images/homepro3.jpg';
import homepro4 from '../images/homepro4.jpg';
import homepro5 from '../images/homepro5.jpg';
import homepro6 from '../images/homepro6.jpg';
import {Row,Col,Table,Container,Button} from 'react-bootstrap'
import Styles from '../Stylesheets/Products.module.css'
import {Link} from 'react-router-dom';

function ProductsAndServices() {

    
  return (
    <Container>
        <h1>OUR PRODUCTS</h1>
    <p>
    We have a wide variety of products available with us.All the specifications of the products will be listed along with it. To purchase a product,click Enquire and you will be displayed with a form.Once you fill the required details , 
    we will contact you with the provide contact number or mail id .
    </p>
    <br></br>
    <Row className={Styles.rows}>
        <Col className={Styles.column}>
        <img src={homepro1} height="250" width="400"></img>
        </Col>
        <Col>
        <h1>SOLAR POWER PLANTS & SYSTEMS</h1>
        <p>Solar power plant system is a setup to generate solar power.Includes panel, battery,inverter
             and a proper setup of the network planned according to your commercial needs</p>
        <Link to="/powerplants">
        <Button variant="flat" className={Styles.buttons} size="lg" active>
        View Products
        </Button>
        </Link>
        </Col>
       
    </Row>
    <br></br>
    <Row className={Styles.rows}>
    <Col>
        <h1>SOLAR PANELS</h1>
        <p>Our solar panel brands include the most respected manufacturers in the solar panel business.
            These brands include such names as BP Solar, 
            General Electric, and Sharp, among others.</p>
        <Link to="/panels">
        <Button variant="flat" className={Styles.buttons} size="lg" active>
        View Products
        </Button>
        </Link>
        </Col>
        <Col className={Styles.column}>
        <img src={homepro2} height="250" width="400"></img>
        </Col>
    </Row>
    <br></br>
    <Row className={Styles.rows}>
        <Col className={Styles.column}>
        <img src={homepro3} height="250" width="400"></img>
        </Col>
        <Col>
        <h1>SOLAR WATER HEATERS AND PUMP SYSTEMS</h1>
        <p>Purchase solar water heaters with low height,light weight and compact looks along with
             highly reliable and durable easy to operate solar pumps.</p>
        <Link to="/pumps">
        <Button variant="flat" className={Styles.buttons} size="lg" active>
        View Products
        </Button>
        </Link>
        </Col>
       
    </Row>
    <br></br>
    <Row className={Styles.rows}>
    <Col>
        <h1>SOLAR BATTERIES AND INVERTERS</h1>
        <p>We supply all the leading brands of solar batteries in the most competitive prices with 
            maximum shelf life ,low self discharging and quick recharging capabilities along with best inverters for 
            serving backup for running heavy power consumption appliances</p>
        <Link to="/inverters">
        <Button variant="flat" className={Styles.buttons} size="lg" active>
        View Products
        </Button>
        </Link>
        </Col>
        <Col className={Styles.column}>
        <img src={homepro4} height="250" width="400"></img>
        </Col>
    </Row>
    <br></br>
    <Row className={Styles.rows}>
        <Col className={Styles.column}>
        <img src={homepro5} height="250" width="400"></img>
        </Col>
        <Col>
        <h1>SOLAR CONNECTORS</h1>
        <p>You can find here a collection of high grade reliable, 
            budget friendly fast mounting connectors for both commercial and domestic setup.</p>
        <Link to="/connectors">
        <Button variant="flat" className={Styles.buttons} size="lg" active>
        View Products
        </Button>
        </Link>
        </Col>
       
    </Row>
    <br></br>
    <Row className={Styles.rows}>
    <Col>
        <h1>OTHER SOLAR PRODUCTS</h1>
        <p>Other than the main stream solar services ,
            we also offer some innovative small scale solar products like street lights and camera.</p>
        <Link to="/others">
        <Button variant="flat" className={Styles.buttons} size="lg" active>
        View Products
        </Button>
        </Link>
        </Col>
        <Col className={Styles.column}>
        <img src={homepro6} height="250" width="400"></img>
        </Col>
    </Row>
    <br></br>
    </Container>

  )
}

export default ProductsAndServices