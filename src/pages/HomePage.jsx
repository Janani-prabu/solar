import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Card from 'react-bootstrap/Card';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.jpg';
import icon5 from '../images/icon5.jpg';
import icon6 from '../images/icon6.png';
import carousal1 from '../images/carousal1.jpg';
import carousal2 from '../images/carousal2.jpg';
import carousal3 from '../images/carousal3.jpg';
import solarimg from '../images/solar.png';


import Styles from '../Stylesheets/HomePage.module.css';




function HomePage(){
    const solar="Solar Energy - Today's Resource for a Brighter Tomorrow"
    return(
        <div>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carousal1}
                alt="First slide"
                height={500}
                />
            </Carousel.Item>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={carousal2}
            alt="Second slide"
            height={500}
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={carousal3}
            alt="Third slide"
            height={500}
            />
            </Carousel.Item>
            </Carousel>
            <br></br>
            <div className={Styles.quote}>
                {solar}
            </div>
            <h3>We provide such Solar Solutions</h3>
            <p>Iayan Solar Source - Service Provider of on grid solar panel, monocrystalline solar panel & solar water pump set since 2017 in Vellore, Tamil Nadu.</p>
            <br></br>
            <br></br>
            <Container >
            <Row>
                <Col>
                {/* <img src={icon1} alt="icon1" height="50" width="50" className={Styles.imageBorder}></img>NATURE OF BUSINESS<p>Exporter and Service Provider</p> */}
                    <Card style={{ width: '18rem' }} className={Styles.card}>
                    <Card.Img variant="top" src= {icon1} alt="icon1" height="200" width="50" className={Styles.imageBorder}/>
                    <Card.Body className={Styles.cardbody}>
                        <Card.Title className={Styles.cardtitle}>Nature of Business</Card.Title>
                        <Card.Text>
                        Exporter and Service Provider
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                {/* <img src={icon2} alt="icon2" height="60" width="60" className={Styles.imageBorder}></img>TOTAL NUMBER OF EMPLOYEES<p>Upto 10 People</p> */}
                    <Card style={{ width: '18rem' }} className={Styles.card}>
                    <Card.Img variant="top" src={icon2} alt="icon2" height="200" width="60" className={Styles.imageBorder}/>
                    <Card.Body className={Styles.cardbody}>
                        <Card.Title className={Styles.cardtitle}>Total Number of Employees</Card.Title>
                        <Card.Text>
                        Upto 10 People
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                {/* <img src={icon3} alt="icon3" height="50" width="50" className={Styles.imageBorder}></img>YEAR OF ESTABLISHMENT<p>2017</p> */}
                    <Card style={{ width: '18rem' }} className={Styles.card}>
                    <Card.Img variant="top" src={icon3} alt="icon3" height="200" width="50" className={Styles.imageBorder}/>
                    <Card.Body className={Styles.cardbody}>
                        <Card.Title className={Styles.cardtitle}>Year Of Establishment</Card.Title>
                        <Card.Text>
                        2017
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br></br>
            <br></br>
            <Row>
                <Col>
                {/* <img src={icon4} alt="icon4" height="50" width="50" className={Styles.imageBorder}></img>LEGAL STATUS OF FIRM<p>Partnership Firm</p> */}
                    <Card style={{ width: '18rem' }} className={Styles.card}>
                    <Card.Img variant="top" src={icon4} alt="icon4" height="200" width="50" className={Styles.imageBorder}/>
                    <Card.Body className={Styles.cardbody}>
                        <Card.Title className={Styles.cardtitle}>Legal Status of Firm</Card.Title>
                        <Card.Text>
                        Partnership Firm
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                {/* <img src={icon5} alt="icon5" height="50" width="50" className={Styles.imageBorder}></img>ANNUAL TURNOVER<p>Upto Rs. 50 Lakh</p> */}
                    <Card style={{ width: '18rem' }} className={Styles.card}>
                    <Card.Img variant="top" src={icon5} alt="icon5" height="200" width="50" className={Styles.imageBorder}/>
                    <Card.Body className={Styles.cardbody}>
                        <Card.Title className={Styles.cardtitle}>Annual Turnover</Card.Title>
                        <Card.Text>
                        Upto Rs. 50 Lakh
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                {/* <img src={icon6} alt="icon6" height="50" width="50" className={Styles.imageBorder}></img>GST NUMBER<p>33AAGFI5236C1ZT</p> */}
                    <Card style={{ width: '18rem' }} className={Styles.card}>
                    <Card.Img variant="top" src={icon6} alt="icon6" height="200" width="50" className={Styles.imageBorder}/>
                    <Card.Body className={Styles.cardbody}>
                        <Card.Title className={Styles.cardtitle}>GST Number</Card.Title>
                        <Card.Text>
                        33AAGFI5236C1ZT
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
            <br></br>
            <br></br>
            <div className={Styles.service}>
                <br></br>
                <h2>From Us...</h2>
                <p>In the world which faces constant surge in energy consumption with quick depletion of existing resources,we need a sustainable solution.
                    Iayan solar source provides one such solution by catering Solar energy to homes and industries across various cities.
                    We provide top quality solar products with guaranteed shelf life and efficiency.We take care of the complete requirements ,
                    setup and installation process inorder to provide you a hassle free experience.
                    Any problems faced with our products...We are just a call away to fix them and render you an uninterrupted sustainable power flow.
                </p>
                <br></br>
                <h2>What do we do ?</h2>
                <p>Our products along with the services that we offer to our products vary over a wide range. 
                    We ensure you a hundred percent when it comes to quality and veracity. Any complaints with the products, we will make sure to appropriately replace them.
                    Proper maintenance is required for any equipment,so we provide services to all the products purchased from us.These services can be availed by booking with us throught his portal.
                </p>
                <br></br>
            </div>
            <div className={Styles.solar}>
            <h1>Why We Go Solar?</h1>
            <img src={solarimg} alt="solar"></img>
            </div>
            <ul>
                <li>Solar power is the key to a clean energy future. Every day, the sun gives off far more energy than 
                    we need to power everything on earth. That’s why we’re investing heavily in solar plants and why we are now offering solar kits to our customers.
                </li>
                <br></br>
                <h5>Renewable</h5>
                <li>
                Solar panels produce electricity by transforming the continuous flow of energy from the sun to electricity.
                </li>
                <br></br>
                <h5>CO₂-free</h5>
                <li>
                No harmful emissions are released into the air when electricity is produced by solar panels.
                </li>
                <br></br>
                <h5>Low operating costs</h5>
                <li>
                The photovoltaic process that transforms sunlight into electricity doesn’t require any fuel and has no variable costs.
                </li>
                
            </ul>
            

           
        </div>
    );
}
export default HomePage