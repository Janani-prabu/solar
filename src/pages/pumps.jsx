import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import {Row,Col,Table,Container,Button,Collapse} from 'react-bootstrap'
import pump1 from '../images/pump1.jpg';
import pump2 from '../images/pump2.jpg';
import pump3 from '../images/pump3.jpg';
import pump4 from '../images/pump4.png';
import pump5 from '../images/pump5.jpg';
import Styles from '../Stylesheets/common.module.css';
import {Link} from 'react-router-dom';

function Pumps(){
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    return(
        
        <div>
            <Container>
                <br></br>
                <h1>SOLAR WATER HEATERS AND PUMP SYSTEMS</h1>
                <br></br>
                <Row>
                <Col>
                    <Card className={Styles.cards}>
                    <Card.Img variant="top" src={pump1}/>
                    <Card.Body>
                    <Card.Title>Solar Water Pump Set</Card.Title>
                    Rs 65,000 / Unit<br></br>
                    Minimum Order Quantity: 1 Unit
                    <br></br>
                    <br></br>
                    <Button variant="flat" className={Styles.mybutton}
                    onClick={() => setOpen1(!open1)}
                    aria-expanded={open1}>
                    View Details
                    </Button>
                    <Collapse in={open1}>
                    <div className={Styles.division}>
                    <Table striped bordered hover size="sm">
                
                    <tbody>
                        <tr>
                        <td>Motor Horsepower</td>
                        <td>5 - 27 HP</td>
                        </tr>
                        <tr>
                        <td>Pipe Material</td>
                        <td>Stainless steel</td>
                        </tr>
                        <tr>
                        <td>Motor Phase</td>
                        <td>Single Phase</td>
                        </tr>
                        <tr>
                        <td>Type of End Use</td>
                        <td>Agricultural</td>
                        </tr>
                        <tr>
                        <td>Voltage</td>
                        <td>24v 48v 60v 96v 110v</td>
                        </tr>
                        <tr>
                        <td>Motor Speed</td>
                        <td>3500 rpm</td>
                        </tr>
                        <tr>
                        <td>Maximum Head</td>
                        <td>260 m</td>
                        </tr>
                        <tr>
                        <td>Solar Panel W</td>
                        <td>250W - 2200w</td>
                        </tr>
                    </tbody>
                    </Table>
                    We are a most trusted name among the topmost companies in 
                    this business, involved in offering  Solar Water Pump Set.
                    <br></br>
                    <Link to="/orders">
                    <Button variant="flat" className={Styles.btn}>ENQUIRE</Button>
                    </Link>
                    </div>
                    </Collapse>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={Styles.cards}>
                    <Card.Img variant="top" src={pump2}/>
                    <Card.Body>
                    <Card.Title>V Guard Solar Water Heater</Card.Title>
                    Rs 17,000 / Unit
                    <br></br>
                    <br></br>
                    <br></br>
                    <Button variant="flat" className={Styles.mybutton}
                    onClick={() => setOpen2(!open2)}
                    aria-expanded={open2}>
                    View Details
                    </Button>
                    <Collapse in={open2}>
                    <div className={Styles.division}>
                    <Table striped bordered hover size="sm">
                
                    <tbody>
                        <tr>
                        <td>Capacity</td>
                        <td>100 lpd -300 lpd</td>
                        </tr>
                        <tr>
                        <td>Brand</td>
                        <td>V-Guard</td>
                        </tr>
                        <tr>
                        <td>Tank Material</td>
                        <td>SS304</td>
                        </tr>
                        <tr>
                        <td>Puff Insulated</td>
                        <td>Polyurethane Foam</td>
                        </tr>
                        <tr>
                        <td>Size of Evacuated Tubes</td>
                        <td>58 x 1800 mm</td>
                        </tr>
                        <tr>
                        <td>Outer Cover</td>
                        <td>Aluminium Stucco Sheet</td>
                        </tr>
                        <tr>
                        <td>Operating Pressure</td>
                        <td>Max .4 kg/cm2</td>
                        </tr>
                        <tr>
                        <td>Inlet Pipe Dimension</td>
                        <td>3/4 inch - 1 Inch</td>
                        </tr>
                        <tr>
                        <td>Coating</td>
                        <td>AlN-SS-Cu coating</td>
                        </tr>
                        <tr>
                        <td>Material</td>
                        <td>Mild Steel with Black Powder Coating</td>
                        </tr>
                        <tr>
                        <td>Connection</td>
                        <td>3 / 4 Input/Output</td>
                        </tr>
                        <tr>
                        <td>Number of Evacuated Glass Tubes</td>
                        <td>10-29</td>
                        </tr>
                    </tbody>
                    </Table>
                    Our company has mastered the art in providing Solar Tall Tubular Battery.
                    <br></br>
                    <Link to="/orders">
                    <Button variant="flat" className={Styles.btn}>ENQUIRE</Button>
                    </Link>
                    </div>
                    </Collapse>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={Styles.cards}>
                    <Card.Img variant="top" src={pump3}/>
                    <Card.Body>
                    <Card.Title>Solar Water Heater</Card.Title>
                    Rs 14,000 / Unit<br></br>
                    Minimum Order Quantity: 50
                    <br></br>
                    <br></br>
                    <Button variant="flat" className={Styles.mybutton}
                    onClick={() => setOpen3(!open3)}
                    aria-expanded={open3}>
                    View Details
                    </Button>
                    <Collapse in={open3}>
                    <div className={Styles.division}>
                    <Table striped bordered hover size="sm">
                
                    <tbody>
                        <tr>
                        <td>Capacity</td>
                        <td>100 lpd, 200 lpd, 500 lpd, 250 lpd, 150 lpd, 300 lpd</td>
                        </tr>
                        <tr>
                        <td>Brand</td>
                        <td>Hitech Solar</td>
                        </tr>
                        <tr>
                        <td>Tank Material</td>
                        <td>Stainless Steel, Aluminium, Copper</td>
                        </tr>
                        <tr>
                        <td>Type of Collector</td>
                        <td>Evacuated Tube Collector (ETC), Integral Collector (Batch System)</td>
                        </tr>
                        <tr>
                        <td>Installation provided</td>
                        <td>Free</td>
                        </tr>
                        <tr>
                        <td>Warranty</td>
                        <td>5 Years</td>
                        </tr>
                        <tr>
                        <td>Stand Frame</td>
                        <td>GI & SS</td>
                        </tr>
                        <tr>
                        <td>Frame Angle</td>
                        <td>GI & SS Rust quoted</td>
                        </tr>
                        <tr>
                        <td>Features</td>
                        <td>Low Maintenance</td>
                        </tr>
                        <tr>
                        <td>Usage/Application</td>
                        <td>Fully Green Energy</td>
                        </tr>
                        <tr>
                        <td>Inner Tank Thickness</td>
                        <td>1.2 mm 100LPD, 1.5 mm 200LPD to 500LPD</td>
                        </tr>
                        <tr>
                        <td>Shadow Free Reqired Area</td>
                        <td>yes</td>
                        </tr>
                    </tbody>
                    </Table>
                    Non-Pressurized, Inner GI Tank Pressurized, Inner GI Tank
                    Best for salt water and high hard water content conditions
                    1.2 mm thickness for capacity up to 200 LPD
                    1.5 mm thickness from 200 LPD to 500 LPD
                    Special Salt Water Protection Coating with Cold Galvanizing for Weld Joints
                    <br></br>
                    <Link to="/orders">
                    <Button variant="flat" className={Styles.btn}>ENQUIRE</Button>
                    </Link>
                    </div>
                    </Collapse>
                    </Card.Body>
                    </Card>
                </Col>
            </Row><Row>
                <Col>
                    <Card className={Styles.cards}>
                    <Card.Img variant="top" src={pump4}/>
                    <Card.Body>
                    <Card.Title>Solar Water Pump System</Card.Title>
                    Rs 18,000 / Unit<br></br>
                    Minimum Order Quantity: 1 Unit
                    <br></br>
                    <Button variant="flat" className={Styles.mybutton}
                    onClick={() => setOpen4(!open4)}
                    aria-expanded={open4}>
                    View Details
                    </Button>
                    <Collapse in={open4}>
                    <div className={Styles.division}>
                    <Table striped bordered hover size="sm">
                
                    <tbody>
                        <tr>
                        <td>Usage/Application</td>
                        <td>Agriculture</td>
                        </tr>
                        <tr>
                        <td>Motor Horsepower</td>
                        <td>2 - 5 HP</td>
                        </tr>
                        <tr>
                        <td>Pressure</td>
                        <td>Low to High Pressure</td>
                        </tr>
                        <tr>
                        <td>Pump Head</td>
                        <td>30 mtr</td>
                        </tr>
                        <tr>
                        <td>Pipe Material</td>
                        <td>SS</td>
                        </tr>
                        <tr>
                        <td>Suction/Discharge</td>
                        <td>25LPM</td>
                        </tr>
                        <tr>
                        <td>Motor Voltage</td>
                        <td>160V</td>
                        </tr>
                    </tbody>
                    </Table>
                    Our company holds immense experience in this 
                    domain and is involved in offering a wide assortment of 
                    Solar Water Pump System.
                    <br></br>
                    <Link to="/orders">
                    <Button variant="flat" className={Styles.btn}>ENQUIRE</Button>
                    </Link>
                    </div>
                    </Collapse>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={Styles.cards}>
                    <Card.Img variant="top" src={pump5}/>
                    <Card.Body>
                    <Card.Title>3 Hp Solar Water Pump System</Card.Title>
                    Rs 1.65 Lakhs / Unit
                    <br></br>
                    <br></br>
                    <Button variant="flat" className={Styles.mybutton}
                    onClick={() => setOpen5(!open5)}
                    aria-expanded={open5}>
                    View Details
                    </Button>
                    <Collapse in={open5}>
                    <div className={Styles.division}>
                    <Table striped bordered hover size="sm">
                
                    <tbody>
                        <tr>
                        <td>Usage/Application</td>
                        <td>Irrigation</td>
                        </tr>
                        <tr>
                        <td>Motor Horsepower</td>
                        <td>2 - 5 HP</td>
                        </tr>
                        <tr>
                        <td>Motor Speed</td>
                        <td>2500 - 3000 rpm</td>
                        </tr>
                        <tr>
                        <td>Solar Panel W</td>
                        <td>250 W</td>
                        </tr>
                    </tbody>
                    </Table>
                    To meet the various requirements of the customers, we are 
                    involved in offering a wide assortment of 3 Hp Solar Water Pump System.
                    <br></br>
                    <Link to="/orders">
                    <Button variant="flat" className={Styles.btn}>ENQUIRE</Button>
                    </Link>
                    </div>
                    </Collapse>
                    </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
            <br></br>
            </Container>
        </div>
    )
}
export default Pumps