import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import {Row,Col,Table,Container,Button,Collapse} from 'react-bootstrap'
import powersystem1 from '../images/powersystem1.jpg';
import power2 from '../images/power2.jpg';
import power3 from '../images/power3.jpg';
import power4 from '../images/power4.jpg';
import power5 from '../images/power5.jpg';
import power6 from '../images/power6.jpg';
import power7 from '../images/power7.jpg';
import power8 from '../images/power8.jpg';
import Styles from '../Stylesheets/common.module.css'
import {Link} from 'react-router-dom';


function Powerplants(){
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    return(
        
        <div>
            <Container>
                <br></br>
                <h1>SOLAR POWER PLANTS & SYSTEMS</h1>
                <br></br>
            <Row>
                <Col>
                    <Card className={Styles.cards}>
                    <Card.Img variant="top" src={powersystem1}/>
                    <Card.Body>
                    <Card.Title>8 W Solar Power System</Card.Title>
                    Rs 8,000 / unit
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
                        <td>Capacity</td>
                        <td>36 Ah (Battery)</td>
                        </tr>
                        <tr>
                        <td>Solar Power</td>
                        <td>8 W</td>
                        </tr>
                        <tr>
                        <td>Voltage Output</td>
                        <td>12 V</td>
                        </tr>
                        <tr>
                        <td>Wind Speed Rating</td>
                        <td>110mph (49m/s)</td>
                        </tr>
                        <tr>
                        <td>Enclosure External Size</td>
                        <td>17.5 x 12.5 x 6 Inch</td>
                        </tr>
                        <tr>
                        <td>Reserve Time at Rated Power</td>
                        <td>27 hrs</td>
                        </tr>
                    </tbody>
                    </Table>
                    To meet the various requirements of the customers, 
                    we are involved in offering a wide assortment of 8W Solar Power System.
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
                    <Card.Img variant="top" src={power2}/>
                    <Card.Body>
                    <Card.Title>315 kW Solar Power Plant</Card.Title>
                    Rs 38,000 / per kw
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
                        <td>Type of Plant</td>
                        <td>Off Grid</td>
                        </tr>
                        <tr>
                        <td>Module Efficiency</td>
                        <td>16.07 %</td>
                        </tr>
                        <tr>
                        <td>Open Circuit Voltage</td>
                        <td>45.1 V</td>
                        </tr>
                        <tr>
                        <td>Short Circuit Current</td>
                        <td>9.25 A</td>
                        </tr>
                        <tr>
                        <td>Operating Temperature</td>
                        <td>-40 Degree C to + 85 Degree C</td>
                        </tr>
                        <tr>
                        <td>Power</td>
                        <td>315 W</td>
                        </tr>
                        <tr>
                        <td>Maximum voltage</td>
                        <td>36.01 V</td>
                        </tr>
                    </tbody>
                    </Table>
                    In order to keep pace with the never-ending demands of customers, 
                    we are involved in offering a wide range of 315 W Solar Power Plant.
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
                    <Card.Img variant="top" src={power3}/>
                    <Card.Body>
                    <Card.Title>250 kw Solar Power Plant</Card.Title>
                    Rs 37,000 / per kw
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
                        <td>Usage/Application</td>
                        <td>Industrial</td>
                        </tr>
                        <tr>
                        <td>Brand</td>
                        <td>Vikram Solar</td>
                        </tr>
                        <tr>
                        <td>Type Of Plant</td>
                        <td>Grid Tie</td>
                        </tr>
                        <tr>
                        <td>Other Components</td>
                        <td>Mounting Structure</td>
                        </tr>
                        <tr>
                        <td>Features</td>
                        <td>Resistant to PID,salt mist and Ammonia</td>
                        </tr>
                        <tr>
                        <td>Module Efficiency</td>
                        <td>15.2 %</td>
                        </tr>
                        <tr>
                        <td>Open Circuit Voltage</td>
                        <td>37.46 V</td>
                        </tr>
                        <tr>
                        <td>Short Circuit Current</td>
                        <td>8.71 A</td>
                        </tr>
                        <tr>
                        <td>Max. System Voltage</td>
                        <td>30.59 V</td>
                        </tr>
                        <tr>
                        <td>Dimensions</td>
                        <td>1660 mm * 992 mm * 35 mm / 40 m (Each)</td>
                        </tr>
                    </tbody>
                    </Table>
                    Leveraging the skills of our qualified team of professionals, 
                    we are instrumental in offering a wide range of 250 kw Solar Power Plant.
                    <br></br>
                    <Link to="/orders">
                    <Button variant="flat" className={Styles.btn}>ENQUIRE</Button>
                    </Link>
                    </div>
                    </Collapse>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <Card className={Styles.cards}>
                    <Card.Img variant="top" src={power4}/>
                    <Card.Body>
                    <Card.Title>100 Kwp Solar Power Plant</Card.Title>
                    Rs 38,000 / per kw
                    <br></br>
                    <br></br>
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
                        <td>Type of Plant</td>
                        <td>Off Grid</td>
                        </tr>
                        <tr>
                        <td>Maximum Power</td>
                        <td>100 W</td>
                        </tr>
                        <tr>
                        <td>Type of Solar Panel</td>
                        <td>Mono Crystalline</td>
                        </tr>
                        <tr>
                        <td>Features</td>
                        <td>High Grade Solar Cells</td>
                        </tr>
                        <tr>
                        <td>Maximum Power Voltage</td>
                        <td>18 V</td>
                        </tr>
                        <tr>
                        <td>Short Circuit Current at NOCT</td>
                        <td>6.1 A</td>
                        </tr>
                        <tr>
                        <td>Open Circuit Voltage</td>
                        <td>22.3</td>
                        </tr>
                    </tbody>
                    </Table>
                    Matching up with the ever increasing requirements of the customers, our company is 
                    engaged in providing 100 W Solar Power Plant.
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
                    <Card.Img variant="top" src={power5}/>
                    <Card.Body>
                    <Card.Title>Polycrystalline Solar Power Plant</Card.Title>
                    Rs 40,000 / per kw<br></br>
                    Minimum Order Quantity: 4 per kw
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
                        <td>Maximum Power</td>
                        <td>300 W</td>
                        </tr>
                        <tr>
                        <td>Type of Portable Solar Panel</td>
                        <td>Poly Crystalline</td>
                        </tr>
                        <tr>
                        <td>Dimensions</td>
                        <td>1960 x 990 x 42 mm (Each)</td>
                        </tr>
                        <tr>
                        <td>Output Current</td>
                        <td>8.2 mA</td>
                        </tr>
                        <tr>
                        <td>Glass Type</td>
                        <td>High Transmission, Low lron, Tempered Glass</td>
                        </tr>
                    </tbody>
                    </Table>
                    We are a most trusted name among the topmost companies in this 
                    business, involved in offering  Polycrystalline Solar Power Plant.<br></br>
                    Additional Information:
                    Delivery Time: 3 to 5 days
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
                    <Card.Img variant="top" src={power6}/>
                    <Card.Body>
                    <Card.Title>500 kW Solar Power Plant</Card.Title>
                    Rs 37,000 / Kilowatt
                    <br></br>
                    <br></br>
                    <br></br>
                    <Button variant="flat" className={Styles.mybutton}
                    onClick={() => setOpen6(!open6)}
                    aria-expanded={open6}>
                    View Details
                    </Button>
                    <Collapse in={open6}>
                    <div className={Styles.division}>
                    <Table striped bordered hover size="sm">
                
                    <tbody>
                        <tr>
                        <td>Type Of Plant</td>
                        <td>Grid Tie</td>
                        </tr>
                    </tbody>
                    </Table>
                    Our company holds immense experience in this domain and is involved in 
                    offering a wide assortment of 500 Kw Solar Power Plant.
                    <br></br>
                    <Link to="/orders">
                    <Button variant="flat" className={Styles.btn}>ENQUIRE</Button>
                    </Link>
                    </div>
                    </Collapse>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <Card className={Styles.cards}>
                    <Card.Img variant="top" src={power7}/>
                    <Card.Body>
                    <Card.Title>Off Grid Solar Power Plant</Card.Title>
                    Rs 68,000 / per kw
                    <br></br>
                    <br></br>
                    <Button variant="flat" className={Styles.mybutton}
                    onClick={() => setOpen7(!open7)}
                    aria-expanded={open7}>
                    View Details
                    </Button>
                    <Collapse in={open7}>
                    <div className={Styles.division}>
                    <Table striped bordered hover size="sm">
                
                    <tbody>
                        <tr>
                        <td>Capacity</td>
                        <td>300 W</td>
                        </tr>
                        <tr>
                        <td>Open Circuit Voltage</td>
                        <td>44.83 V</td>
                        </tr>
                        <tr>
                        <td>Short Circuit Current</td>
                        <td>8.90 A</td>
                        </tr>
                        <tr>
                        <td>Module Efficiency</td>
                        <td>15.30 %</td>
                        </tr>
                        <tr>
                        <td>Operating Temperature</td>
                        <td>-40 Degree C to + 85 Degree C</td>
                        </tr>
                        <tr>
                        <td>Max. System Voltage</td>
                        <td>35.61 V</td>
                        </tr>
                        <tr>
                        <td>Cell Type</td>
                        <td>72 multi-crystalline solar cells</td>
                        </tr>
                        <tr>
                        <td>Pmax At NOCT</td>
                        <td>217.9</td>
                        </tr>
                    </tbody>
                    </Table>
                    We have carved a niche amongst the most trusted names in this business, 
                    engaged in offering a comprehensive range of Off Grid Solar Power Plant.
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
                    <Card.Img variant="top" src={power8}/>
                    <Card.Body>
                    <Card.Title>Roof Top Solar Power Plant</Card.Title>
                    Rs 40,000 / per kw
                    <br></br>
                    <br></br>
                    <Button variant="flat" className={Styles.mybutton}
                    onClick={() => setOpen8(!open8)}
                    aria-expanded={open8}>
                    View Details
                    </Button>
                    <Collapse in={open8}>
                    <div className={Styles.division}>
                    <Table striped bordered hover size="sm">
                
                    <tbody>
                        <tr>
                        <td>Capacity</td>
                        <td>1 Kw</td>
                        </tr>
                        <tr>
                        <td>Type of Plant</td>
                        <td>Off Grid</td>
                        </tr>
                        <tr>
                        <td>Open Circuit Voltage</td>
                        <td>38.1 V - 38.4 V</td>
                        </tr>
                        <tr>
                        <td>Module Efficiency</td>
                        <td>15.6 % to 16.5 %</td>
                        </tr>
                        <tr>
                        <td>Max Power Voltage</td>
                        <td>30.5 V - 30.9 V</td>
                        </tr>
                    </tbody>
                    </Table>
                    To meet the various requirements of the customers, 
                    we are involved in offering a wide assortment of Roof Top Solar Power Plant.
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
export default Powerplants