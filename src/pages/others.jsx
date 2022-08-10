import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import {Row,Col,Table,Container,Button,Collapse} from 'react-bootstrap'
import other1 from '../images/other1.jpg';
import other2 from '../images/other2.jpg';
import other3 from '../images/other3.jpg';
import Styles from '../Stylesheets/common.module.css'
import {Link} from 'react-router-dom';

function Others(){
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    return(
        
        <div>
            <Container>
                <br></br>
                <h1>OTHER SOLAR PRODUCTS</h1>
                <br></br>
                <Row>
                <Col>
                    <Card className={Styles.cards}>
                    <Card.Img variant="top" src={other1}/>
                    <Card.Body>
                    <Card.Title>CCTV Camera</Card.Title>
                    Minimum Order Quantity: 5 Set
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
                        <td>Brand</td>
                        <td>Hikvision</td>
                        </tr>
                        <tr>
                        <td>Application</td>
                        <td>Home and Commercial & Industrial</td>
                        </tr>
                        <tr>
                        <td>Pixel</td>
                        <td>Customized</td>
                        </tr>
                        <tr>
                        <td>Camera Resolution</td>
                        <td>5 MP</td>
                        </tr>
                        <tr>
                        <td>Operating Temperature</td>
                        <td>All Weather Condition</td>
                        </tr>
                        <tr>
                        <td>Focal Length</td>
                        <td>Customized</td>
                        </tr>
                        <tr>
                        <td>Camera Range</td>
                        <td>10 to 15 m,15 to 20 m,20 to 25 m,25 to 30 m,30 to 35 m</td>
                        </tr>
                        <tr>
                        <td>Camera Technology</td>
                        <td>Analog Camera,Digital Camera</td>
                        </tr>
                    </tbody>
                    </Table>
                    Iayan Solar Source the leaading solar, Surveillance &
                    Fire Alarm Syatem to various Residintial, Commericial &
                    Industrial Clients. Our Company Provide end to end
                    service to plan, Design, Construct and Maintenance &
                    Service throught out all over South India.
                    Additional Information:
                    Item Code: ISS050CCTV
                    Production Capacity: As per Requirement
                    Delivery Time: With in Couple of day
                    Packaging Details: Cotton Box
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
                    <Card.Img variant="top" src={other2}/>
                    <Card.Body>
                    <Card.Title>Solar LED Street Light</Card.Title>
                    Rs 8,000 / unit
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
                        <td>Lighting Type</td>
                        <td>LED</td>
                        </tr>
                        <tr>
                        <td>Power</td>
                        <td>9W</td>
                        </tr>
                        <tr>
                        <td>Power Source</td>
                        <td>Solar</td>
                        </tr>
                        <tr>
                        <td>Voltage</td>
                        <td>12V(DC)</td>
                        </tr>
                        <tr>
                        <td>Operating Voltage</td>
                        <td>220 V to 240 V</td>
                        </tr>
                        <tr>
                        <td>Resolution</td>
                        <td>650*650</td>
                        </tr>
                    </tbody>
                    </Table>
                    We are a highly acknowledged organization, engaged in presenting a remarkable 
                    range of Solar LED Street Light.
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
                    <Card.Img variant="top" src={other3}/>
                    <Card.Body>
                    <Card.Title>20 W Solar LED Street Light</Card.Title>
                    Rs 11,000 / Piece
                    Minimum Order Quantity: 10 Piece
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
                        <td>Lighting Type</td>
                        <td>LED</td>
                        </tr>
                        <tr>
                        <td>Power Source</td>
                        <td>Solar</td>
                        </tr>
                        <tr>
                        <td>Wattage</td>
                        <td>20 W</td>
                        </tr>
                        <tr>
                        <td>Capacity</td>
                        <td>11.1v 15.6ah,15.6 Ah</td>
                        </tr>
                        <tr>
                        <td>Lumen Output</td>
                        <td>1800 IM</td>
                        </tr>
                        <tr>
                        <td>Max Output Current</td>
                        <td>10 A</td>
                        </tr>
                        <tr>
                        <td>Color Temperature</td>
                        <td>3000k - 6500k</td>
                        </tr>
                    </tbody>
                    </Table>
                    Our company is widely appreciated in offering Solar LED Street Light.
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
            </Container>
        </div>
    )
}
export default Others