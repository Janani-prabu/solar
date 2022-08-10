import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import {Row,Col,Table,Container,Button,Collapse} from 'react-bootstrap'
import battery1 from '../images/battery1.jpg';
import battery2 from '../images/battery2.jpg';
import battery3 from '../images/battery3.jpg';
import inverter1 from '../images/inverter1.jpg';
import inverter2 from '../images/inverter2.jpg';
import inverter3 from '../images/inverter3.jpg';
import inverter4 from '../images/inverter4.jpg';
import inverter5 from '../images/inverter5.jpg';
import inverter6 from '../images/inverter6.jpg';
import inverter7 from '../images/inverter7.jpg';
import Styles from '../Stylesheets/common.module.css'
import {Link} from 'react-router-dom';

function Inverters(){
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    const [open9, setOpen9] = useState(false);
    const [open10, setOpen10] = useState(false);
    return(
        
        <div>
            <Container>
                <br></br>
                <h1>SOLAR BATTERIES AND INVERTERS</h1>
                <br></br>
            <Row>
                <Col>
                    <Card className={Styles.cards}>
                    <Card.Img variant="top" src={battery1}/>
                    <Card.Body>
                    <Card.Title>Solar Tall Tabular Battery</Card.Title>
                    Rs 11,500 / unit
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
                        <td>Warranty</td>
                        <td>60 Months</td>
                        </tr>
                        <tr>
                        <td>Model Number</td>
                        <td>LPTT12150H</td>
                        </tr>
                        <tr>
                        <td>Brand</td>
                        <td>Luminous</td>
                        </tr>
                        <tr>
                        <td>Length</td>
                        <td>503 mm</td>
                        </tr>
                        <tr>
                        <td>Capacity</td>
                        <td>150 Ah</td>
                        </tr>
                        <tr>
                        <td>Technology</td>
                        <td>Tabular</td>
                        </tr>
                        <tr>
                        <td>Width</td>
                        <td>189 mm</td>
                        </tr>
                    </tbody>
                    </Table>
                    To meet the various requirements of the customers, 
                    we are involved in offering a wide assortment of 
                    Solar Tall Tabular Battery.
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
                    <Card.Img variant="top" src={battery2}/>
                    <Card.Body>
                    <Card.Title>Eastman Solar Tall Tubular Battery</Card.Title>
                    Rs 13,800 / unit
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
                        <td>Eastman</td>
                        </tr>
                        <tr>
                        <td>Capacity</td>
                        <td>120 Ah, 150 Ah, 180 Ah, 200 Ah</td>
                        </tr>
                        <tr>
                        <td>Type of Battery</td>
                        <td>Solar Battery</td>
                        </tr>
                        <tr>
                        <td>Voltage</td>
                        <td>12V</td>
                        </tr>
                        <tr>
                        <td>Usage</td>
                        <td>UPS</td>
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
                    <Card.Img variant="top" src={battery3}/>
                    <Card.Body>
                    <Card.Title>Eastman Solar Battery</Card.Title>
                    Rs 14,000 / unit
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
                        <td>Brand</td>
                        <td>Eastman</td>
                        </tr>
                        <tr>
                        <td>Capacity</td>
                        <td>150 Ah</td>
                        </tr>
                        <tr>
                        <td>Type of Battery</td>
                        <td>Solar Battery</td>
                        </tr>
                        <tr>
                        <td>Voltage</td>
                        <td>12V, 6V And 2V</td>
                        </tr>
                        <tr>
                        <td>Usage</td>
                        <td>UPS</td>
                        </tr>
                    </tbody>
                    </Table>
                    Our company is widely appreciated in offering Eastman Solar Battery.
                    Description-
                     Specially designed for arduous SPV application 
                     Intrinsically suited for regular deep cyclic duty – Superior Cycle Life
                     Suit the rigors of Partial State of Charge operation
                     Ultra-low maintenance
                     Factory filled and charged 2V modular cells, easy handling, ready to install
                     Solatubular 12V LMS ranges meet IS13369 & IEC 61427 specification
                     Solatubular 2V LMXT ranges meet IS1651 & IEC 61427 specification
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
                    <Card.Img variant="top" src={inverter1}/>
                    <Card.Body>
                    <Card.Title>Single Phase String Inverter</Card.Title>
                    Rs 16,500 / unit
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
                        <td>Phase</td>
                        <td>Single Phase</td>
                        </tr>
                        <tr>
                        <td>Input DC Voltage</td>
                        <td>140 V</td>
                        </tr>
                        <tr>
                        <td>Input Voltage</td>
                        <td>120 V / 420 V</td>
                        </tr>
                        <tr>
                        <td>Operating Temperature</td>
                        <td>-40 - 50 Degree C</td>
                        </tr>
                        <tr>
                        <td>Input Current</td>
                        <td>13.4 A</td>
                        </tr>
                        <tr>
                        <td>Frequency</td>
                        <td>45 - 65 Hz</td>
                        </tr>
                        <tr>
                        <td>Brand</td>
                        <td>Fronius</td>
                        </tr>
                        <tr>
                        <td>Recommended PV Power</td>
                        <td>1.2 - 2.4 kWp</td>
                        </tr>
                    </tbody>
                    </Table>
                    Our company has set benchmark in providing Single Phase String Inverter.
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
                    <Card.Img variant="top" src={inverter2}/>
                    <Card.Body>
                    <Card.Title>Hybrid Solar Inverter</Card.Title>
                    Rs 15,000 / unit
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
                        <td>Phase</td>
                        <td>Single Phase</td>
                        </tr>
                        <tr>
                        <td>Output Voltage</td>
                        <td>230VA + /- 5%</td>
                        </tr>
                        <tr>
                        <td>Output Current</td>
                        <td>48 A</td>
                        </tr>
                        <tr>
                        <td>Output Frequency</td>
                        <td>50 Hz</td>
                        </tr>
                        <tr>
                        <td>Features</td>
                        <td>24 hour operation</td>
                        </tr>
                        <tr>
                        <td>Operating Temperature</td>
                        <td>0 Degree C - 55 Degree C to -15 Degree C - 60 Degree C</td>
                        </tr>
                        <tr>
                        <td>Watts</td>
                        <td>600 W - 4000 W</td>
                        </tr>
                        <tr>
                        <td>Surge Rating</td>
                        <td>5 seconds max 2x</td>
                        </tr>
                    </tbody>
                    </Table>
                    Our company is highly esteemed in offering Hybrid Solar Inverter.
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
                    <Card.Img variant="top" src={inverter3}/>
                    <Card.Body>
                    <Card.Title>5 KW Solar Inverter</Card.Title>
                    Rs 46,000 / unit
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
                        <td>Brand</td>
                        <td>Sukam</td>
                        </tr>
                        <tr>
                        <td>Phase</td>
                        <td>Single Phase</td>
                        </tr>
                        <tr>
                        <td>Start up Input Voltage</td>
                        <td>200VDC</td>
                        </tr>
                        <tr>
                        <td>Output Power</td>
                        <td>5 kVA</td>
                        </tr>
                        <tr>
                        <td>Input Current</td>
                        <td>16 A</td>
                        </tr>
                        <tr>
                        <td>Mpp Input Voltage</td>
                        <td>163V - 800V</td>
                        </tr>
                        <tr>
                        <td>Frequency Range</td>
                        <td>45 - 65 Hz</td>
                        </tr>
                        <tr>
                        <td>Operating Voltage</td>
                        <td>200V - 1000V</td>
                        </tr>
                    </tbody>
                    </Table>
                    Our company is highly esteemed in offering 5 KW Sukam Solar Inverter.
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
                    <Card.Img variant="top" src={inverter4}/>
                    <Card.Body>
                    <Card.Title>Portable Solar Inverter</Card.Title>
                    Rs 10,000 / unit
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
                        <td>Phase</td>
                        <td>Single And Three Phase</td>
                        </tr>
                        <tr>
                        <td>Start up Input Voltage</td>
                        <td>140 V</td>
                        </tr>
                        <tr>
                        <td>Output Frequency</td>
                        <td>50 Hz</td>
                        </tr>
                        <tr>
                        <td>Operating Temperature</td>
                        <td>0 Degree C to 45 Degree C</td>
                        </tr>
                        <tr>
                        <td>Noise Consumption</td>
                        <td>45 dB</td>
                        </tr>
                        <tr>
                        <td>Efficiency</td>
                        <td>95%</td>
                        </tr>
                    </tbody>
                    </Table>
                    In order to keep pace with the never-ending demands of customers, 
                    we are involved in offering a wide range of Portable Solar Inverter.
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
                    <Card.Img variant="top" src={inverter5}/>
                    <Card.Body>
                    <Card.Title>Three Phase Solar Inverter</Card.Title>
                    Rs 76,000 / unit
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
                        <td>Brand</td>
                        <td>Fronius</td>
                        </tr>
                        <tr>
                        <td>Frequency Range</td>
                        <td>50 - 60 Hz</td>
                        </tr>
                        <tr>
                        <td>Maximum Input Voltage</td>
                        <td>150 V</td>
                        </tr>
                        <tr>
                        <td>Max array short circuit current</td>
                        <td>24.0 A</td>
                        </tr>
                        <tr>
                        <td>AC nominal output</td>
                        <td>3,000 W</td>
                        </tr>
                        <tr>
                        <td>Max Output Power</td>
                        <td>3,000 VA</td>
                        </tr>
                    </tbody>
                    </Table>
                    Boasting power categories ranging from 3.0 to 20.0 kW, 
                    the transformerless Fronius Symo is the three-phase inverter for systems of every size. 
                    Owing to the SuperFlex Design, the Fronius Symo is the perfect answer to irregularly shaped or 
                    multi-oriented roofs. The standard interface to the internet via WLAN or Ethernet and the ease of 
                    integration of third-party components make the Fronius Symo one of the most communicative inverters on 
                    the market. Furthermore, the meter interface permits dynamic feed-in management and a clear 
                    visualisation of the consumption overview.
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
                    <Card.Img variant="top" src={inverter6}/>
                    <Card.Body>
                    <Card.Title>Fronius Primo Solar Inverter</Card.Title>
                    Rs 18,000 / unit
                    <br></br>
                    <br></br>
                    <Button variant="flat" className={Styles.mybutton}
                    onClick={() => setOpen9(!open9)}
                    aria-expanded={open9}>
                    View Details
                    </Button>
                    <Collapse in={open9}>
                    <div className={Styles.division}>
                    <Table striped bordered hover size="sm">
                
                    <tbody>
                        <tr>
                        <td>Brand</td>
                        <td>Fronius</td>
                        </tr>
                        <tr>
                        <td>Phase</td>
                        <td>Single Phase</td>
                        </tr>
                        <tr>
                        <td>Degree of Protection</td>
                        <td>NEMA 4X</td>
                        </tr>
                        <tr>
                        <td>Ambient Temperature</td>
                        <td>- 40 Degree C to 55 Degree C</td>
                        </tr>
                        <tr>
                        <td>Installation</td>
                        <td>Indoor and outdoor installation</td>
                        </tr>
                        <tr>
                        <td>Dimension</td>
                        <td>16.9 x 24.7 x 8.1 in.</td>
                        </tr>
                        <tr>
                        <td>Cooling</td>
                        <td>Variable speed fan</td>
                        </tr>
                    </tbody>
                    </Table>
                    Our company has mastered the art in providing Fronius Primo Solar Inverter.
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
                    <Card.Img variant="top" src={inverter7}/>
                    <Card.Body>
                    <Card.Title>Fronius Eco Solar Inverter</Card.Title>
                    Rs 60,000 / unit
                    <br></br>
                    <br></br>
                    <Button variant="flat" className={Styles.mybutton}
                    onClick={() => setOpen10(!open10)}
                    aria-expanded={open10}>
                    View Details
                    </Button>
                    <Collapse in={open10}>
                    <div className={Styles.division}>
                    <Table striped bordered hover size="sm">
                
                    <tbody>
                        <tr>
                        <td>Brand</td>
                        <td>Fronius</td>
                        </tr>
                        <tr>
                        <td>Phase</td>
                        <td>Three Phase</td>
                        </tr>
                        <tr>
                        <td>Degree of Protection</td>
                        <td>IP 66</td>
                        </tr>
                        <tr>
                        <td>Ambient Temperature</td>
                        <td>-25 - +60 Degree C</td>
                        </tr>
                        <tr>
                        <td>Nominal Voltage</td>
                        <td>580 V</td>
                        </tr>
                        <tr>
                        <td>Dimension</td>
                        <td>725 x 510 x 225 mm</td>
                        </tr>
                        <tr>
                        <td>Cooling</td>
                        <td>Regulated air cooling</td>
                        </tr>
                        <tr>
                        <td>AC nominal output</td>
                        <td>25,000 W</td>
                        </tr>
                    </tbody>
                    </Table>
                    The three-phase Fronius Eco in power categories 25.0 and 27.0 kW perfectly meets 
                    all the requirements of large-scale installations. Thanks to its light weight and 
                    SnapINverter mounting system, this transformerless device can be installed quickly 
                    and easily either indoors or outdoors. This inverter range is setting new standards 
                    with its IP 66 protection class. Furthermore, thanks to its integrated double fuse 
                    holders and optional overvoltage protection, string collection boxes are no longer necessary.
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
                <Col></Col>
                </Row>
                <br></br>
            </Container>
        </div>
    )
}
export default Inverters