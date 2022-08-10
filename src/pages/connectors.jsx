import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import {Row,Col,Table,Container,Button,Collapse} from 'react-bootstrap'
import conn1 from '../images/conn1.jpg';
import conn2 from '../images/conn2.jpg';
import conn3 from '../images/conn3.jpg';
import conn4 from '../images/conn4.jpg';
import conn5 from '../images/conn5.jpeg';
import Styles from '../Stylesheets/common.module.css'
import {Link} from 'react-router-dom';

function Connectors(){
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    return(
        
        <div>
            <Container>
                <br></br>
                <h1>SOLAR CONNECTORS</h1>
                <br></br>
                <Row>
                <Col>
                    <Card className={Styles.cards}>
                    <Card.Img variant="top" src={conn1}/>
                    <Card.Body>
                    <Card.Title>Solar Combiner Box</Card.Title>
                    Rs 3,000 / Unit
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
                        <td>Voltage</td>
                        <td>150 V - 300 V</td>
                        </tr>
                        <tr>
                        <td>Number of Strings</td>
                        <td>2 Strings to 8 Strings</td>
                        </tr>
                        <tr>
                        <td>Material</td>
                        <td>Powder coated aluminum with stainless hardware</td>
                        </tr>
                        <tr>
                        <td>Frequency</td>
                        <td>50 -60 Hz</td>
                        </tr>
                        <tr>
                        <td>Maximum Output Amps</td>
                        <td>80 amps for fused, 120 amp for breaker</td>
                        </tr>
                        <tr>
                        <td>Output wire range</td>
                        <td>14 to 1/0 AWG</td>
                        </tr>
                    </tbody>
                    </Table>
                    We have carved a niche amongst the most trusted names in this business, 
                    engaged in offering a comprehensive range of Solar Combiner Box.
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
                    <Card.Img variant="top" src={conn2}/>
                    <Card.Body>
                    <Card.Title>Solar Array Junction Box</Card.Title>
                    Rs 2,000 / Unit
                    Minimum Order Quantity: 1 Unit
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
                        <td>Brand</td>
                        <td>Anchor</td>
                        </tr>
                        <tr>
                        <td>Voltage</td>
                        <td>220 V - 240 V</td>
                        </tr>
                        <tr>
                        <td>Phase</td>
                        <td>Single Phase And Three Phase Available</td>
                        </tr>
                        <tr>
                        <td>Capacity</td>
                        <td>1 KW to 1 MW</td>
                        </tr>
                        <tr>
                        <td>Frequency</td>
                        <td>50 - 60 Hz</td>
                        </tr>
                        <tr>
                        <td>Condition</td>
                        <td>New</td>
                        </tr>
                        <tr>
                        <td>IP Rating</td>
                        <td>IP65</td>
                        </tr>
                    </tbody>
                    </Table>
                    Leveraging the skills of our qualified team of professionals, 
                    we are instrumental in offering a wide range of Solar 
                    Array Junction Box.
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
                    <Card.Img variant="top" src={conn3}/>
                    <Card.Body>
                    <Card.Title>Solar ACDB Box</Card.Title>
                    Rs 3,500 / unit
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
                        <td>Power</td>
                        <td>Single Phase , 220 - 240 V</td>
                        </tr>
                        <tr>
                        <td>Capacity</td>
                        <td>500 W - 1 kW</td>
                        </tr>
                        <tr>
                        <td>Ambient Temperature</td>
                        <td>-10 to 60 Degree C</td>
                        </tr>
                        <tr>
                        <td>Type Of Enclosure Material</td>
                        <td>Polycarbonate</td>
                        </tr>
                    </tbody>
                    </Table>
                    Our company holds immense experience in this 
                    domain and is involved in offering a wide assortment of 
                    Solar ACDB Box.
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
                    <Card.Img variant="top" src={conn4}/>
                    <Card.Body>
                    <Card.Title>Solar DCDB Box</Card.Title>
                    Rs 3,500 / Unit
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
                        <td>Conductor Material</td>
                        <td>Copper</td>
                        </tr>
                        <tr>
                        <td>Ambient Temperature</td>
                        <td>-10 to 55 Degree C</td>
                        </tr>
                        <tr>
                        <td>Material</td>
                        <td>Aluminium enclosure</td>
                        </tr>
                        <tr>
                        <td>Degree Of Protection</td>
                        <td>iP65</td>
                        </tr>
                    </tbody>
                    </Table>
                    In order to keep pace with the never-ending demands of customers, 
                    we are involved in offering a wide range of Solar DCDB Box.
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
                    <Card.Img variant="top" src={conn5}/>
                    <Card.Body>
                    <Card.Title>Solar DC Cable</Card.Title>
                    Rs 27 / Meter
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
                        <td>Length</td>
                        <td>100 meter</td>
                        </tr>
                        <tr>
                        <td>Conductor Material</td>
                        <td>Copper</td>
                        </tr>
                        <tr>
                        <td>Material</td>
                        <td>Pvc</td>
                        </tr>
                        <tr>
                        <td>Packing Type</td>
                        <td>Roll</td>
                        </tr>
                        <tr>
                        <td>Current Carrying Capacity</td>
                        <td>56 Amp</td>
                        </tr>
                    </tbody>
                    </Table>
                    We have carved a niche amongst the most trusted names in this business, 
                    engaged in offering a comprehensive range of Solar DC Cable
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
export default Connectors