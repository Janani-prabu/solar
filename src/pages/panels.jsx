import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import {Row,Col,Table,Container,Button,Collapse} from 'react-bootstrap'
import panel1 from '../images/panel1.jpg';
import panel2 from '../images/panel2.jpg';
import panel3 from '../images/panel3.jpg';
import panel4 from '../images/panel4.jpg';
import panel5 from '../images/panel5.jpg';
import panel6 from '../images/panel6.jpg';
import panel7 from '../images/panel7.jpg';
import panel8 from '../images/panel8.jpg';
import panel9 from '../images/panel9.jpg';
import Styles from '../Stylesheets/common.module.css'
import {Link} from 'react-router-dom';
function Panels(){
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    const [open9, setOpen9] = useState(false);
    return(
        
        <div>
            <Container>
                <br></br>
                <h1>SOLAR PANELS</h1>
                <br></br>
            <Row>
                <Col>
                    <Card className={Styles.cards}>
                    <Card.Img variant="top" src={panel1}/>
                    <Card.Body>
                    <Card.Title>Duo Max 72 Cell Solar Panel</Card.Title>
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
                        <td>Type of Solar Panel</td>
                        <td>Poly Crystalline</td>
                        </tr>
                        <tr>
                        <td>Brand</td>
                        <td>Trina Solar</td>
                        </tr>
                        <tr>
                        <td>Maximum Power Voltage</td>
                        <td>36.8 - 37.4 V</td>
                        </tr>
                        <tr>
                        <td>Number Of Cells</td>
                        <td>72</td>
                        </tr>
                        <tr>
                        <td>Power Output Tolerance</td>
                        <td>0 - + 5 %</td>
                        </tr>
                        <tr>
                        <td>Efficiency</td>
                        <td>16.6 %</td>
                        </tr>
                        <tr>
                        <td>Maximum Power Current</td>
                        <td>8.42 -8.69 A A</td>
                        </tr>
                        <tr>
                        <td>Short Circuit Current</td>
                        <td>8.91 -9.14 A</td>
                        </tr>
                        <tr>
                        <td>Open Circuit Voltage</td>
                        <td>45.6 - 46.1 V</td>
                        </tr>
                        <tr>
                        <td>Maximum Power</td>
                        <td>310 - 325 W</td>
                        </tr>
                        
                    </tbody>
                    </Table>
                    Highly reliable due to stringent quality control
                    PID resistant and free of snail trails
                    Increased module robustness to minimize micro-cracks
                    100% EL double inspection
                    Enhanced safety
                    Fire class A certified by TUV Rheinland according to fire test
                    IEC 61730-2 / MST 23
                    Certified for fire type13 (UL 1703)
                    Increased value
                    Higher maximum system voltage reduces BOS costs
                    30 year linear warranty
                    0.5% annual degradation
                    Available with transparent encapsulant to increase value for
                    greenhouse or carport applications
                    Certified to withstand the most challenging environmental conditions
                    Module coating resistant to sand, acid, and alkali
                    2400 Pa wind load*
                    5400 Pa snow load*
                    35 mm hail stones at 97 km/h
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
                    <Card.Img variant="top" src={panel2}/>
                    <Card.Body>
                    <Card.Title>Waaree 72 Cell Solar Panel</Card.Title>
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
                        <td>Type of Solar Panel</td>
                        <td>Poly Crystalline</td>
                        </tr>
                        <tr>
                        <td>Maximum Power Voltage</td>
                        <td>36.30 V</td>
                        </tr>
                        <tr>
                        <td>Dimensions</td>
                        <td>1960 * 660 * 42 mm</td>
                        </tr>
                        <tr>
                        <td>Mounting Holes Pitch</td>
                        <td>942 mm</td>
                        </tr>
                        <tr>
                        <td>Open Circuit Voltage</td>
                        <td>44.80 V</td>
                        </tr>
                        <tr>
                        <td>Short Circuit Current</td>
                        <td>8.63 A</td>
                        </tr>
                        <tr>
                        <td>Maximum Power Current</td>
                        <td>7.99 A</td>
                        </tr>
                        <tr>
                        <td>Weight</td>
                        <td>22.5 Kg</td>
                        </tr>
                        <tr>
                        <td>Temperature</td>
                        <td>- 40 Degree C to 85 Degree C</td>
                        </tr>
                        <tr>
                        <td>Module Efficiency at STC</td>
                        <td>14%</td>
                        </tr>
                        <tr>
                        <td>Temperature Coefficient of ICC</td>
                        <td>0.0681 Degree C</td>
                        </tr>
                        <tr>
                        <td>Front Cover</td>
                        <td>Tempered And Low Glass 3.22 mm ( Thickness)</td>
                        </tr>
                        <tr>
                        <td>Power Tolerance</td>
                        <td>0 / + 5 W</td>
                        </tr>
                        <tr>
                        <td>Solar Cell Type</td>
                        <td>Poly Crystalline Silicon</td>
                        </tr>
                    </tbody>
                    </Table>
                    We have gained a remarkable position in the market that is involved in offering Waaree 72 Cell Solar Panel.
                    Description-
                    Superior Module Efficiency as per International Benchmarks
                    PID Resistant with long term reliability
                    Glass with Anti Reflective Coating Improves light transmission 
                    Salt mist, Ammonia and Hail Resistant
                    Sustain Heavy Wind & Snow loads (2400 Pa & 7500 Pa)  
                    Excellent Performance in low light 
                    Sand and Dust Storm Resistant  
                    10 years Limited Product Warranty 
                    25 years Limited Power Output Warranty**
                    Minimum 90% at the end of 10 years 
                    Minimum 80% at the end of 25 years
                    Over 20 in house tests (DH: Damp heat test TC
                    Thermal cycling test HF: Humidity freeze test).
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
                    <Card.Img variant="top" src={panel3}/>
                    <Card.Body>
                    <Card.Title>Waaree 60 Cell Solar Panel</Card.Title>
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
                        <td>Waaree Solar</td>
                        </tr>
                        <tr>
                        <td>Mounting Holes Pitch</td>
                        <td>942 mm</td>
                        </tr>
                        <tr>
                        <td>Type of Solar Panel</td>
                        <td>Poly Crystalline</td>
                        </tr>
                        <tr>
                        <td>Dimensions</td>
                        <td>1640 mm * 990 mm* 42 mm</td>
                        </tr>
                        <tr>
                        <td>Short Circuit Current</td>
                        <td>8.65 A</td>
                        </tr>
                        <tr>
                        <td>Maximum Power Voltage</td>
                        <td>30 .60 V</td>
                        </tr>
                        <tr>
                        <td>Maximum Power Current</td>
                        <td>7.85 A</td>
                        </tr>
                        <tr>
                        <td>Temperature</td>
                        <td>- 40 Degree C to 85 Degree C</td>
                        </tr>
                        <tr>
                        <td>Cables</td>
                        <td>4 sq meter cross section,1200 mm long</td>
                        </tr>
                        <tr>
                        <td>Module Efficiency at STC</td>
                        <td>14%</td>
                        </tr>
                        <tr>
                        <td>Front Cover</td>
                        <td>Tempered And Low Glass 3.22 mm ( Thickness)</td>
                        </tr>
                        <tr>
                        <td>Solar Cell Type</td>
                        <td>Poly Crystalline Silicon</td>
                        </tr>
                        <tr>
                        <td>Max System Voltage</td>
                        <td>1000 V</td>
                        </tr>
                    </tbody>
                    </Table>
                    In order to keep pace with the never-ending demands of customers, 
                    we are involved in offering a wide range of Waaree 60 Cell Solar Panel.
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
                    <Card.Img variant="top" src={panel4}/>
                    <Card.Body>
                    <Card.Title>Trina Solar 72 Cell Solar Panel</Card.Title>
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
                        <td>Brand</td>
                        <td>Trina Solar</td>
                        </tr>
                        <tr>
                        <td>Maximum Power Voltage</td>
                        <td>37.0 - 37.1 V</td>
                        </tr>
                        <tr>
                        <td>Dimensions</td>
                        <td>1956 * 992 * 40 mm</td>
                        </tr>
                        <tr>
                        <td>Number Of Cells</td>
                        <td>72</td>
                        </tr>
                        <tr>
                        <td>Material</td>
                        <td>3.2 mm (0.13 inches), High Transmission, AR Coated Tempered Glass</td>
                        </tr>
                        <tr>
                        <td>Solar Cells</td>
                        <td>Multicrystalline 156 * 156 mm (6 inch )</td>
                        </tr>
                    </tbody>
                    </Table>
                    Owing to our in-depth knowledge of this domain, we are specialized in providing Trina Solar 72 Cell Solar Panel.

                    Description -

                    Ideal for large scale installation
                    High power footprint reduces installation time and BOS costs 
                    1000V UL/1000V IEC certified

                    One of the industry’s most trusted modules
                    Field proven performance 
                    Strong, reliable supplier 

                    Highly reliable due to stringent quality control 
                    Over 30 in-house tests (UV, TC, HF, and many more) 
                    In-house testing goes well beyond certification requirements
                    100% EL double inspection
                    Certified to withstand challenging environmental conditions2400 Pa wind load 5400 Pa snow load35 mm hail stones at 97 km/hPID resistance.
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
                    <Card.Img variant="top" src={panel5}/>
                    <Card.Body>
                    <Card.Title>On Grid Solar Panel</Card.Title>
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
                        <td>Type of Solar Panel</td>
                        <td>Mono Crystalline</td>
                        </tr>
                        <tr>
                        <td>Brand</td>
                        <td>Su-Kam</td>
                        </tr>
                        <tr>
                        <td>Maximum Power</td>
                        <td>5 W to 500 W</td>
                        </tr>
                        <tr>
                        <td>Efficiency</td>
                        <td>97 %</td>
                        </tr>
                        <tr>
                        <td>Capacity</td>
                        <td>20 to 2000 Kwh</td>
                        </tr>
                        <tr>
                        <td>Phase</td>
                        <td>Single Phase And Three Phase</td>
                        </tr>
                        <tr>
                        <td>Modules</td>
                        <td>16*325wp - 1539*325wp</td>
                        </tr>
                    </tbody>
                    </Table>
                    We are a highly acknowledged organization, engaged in presenting a remarkable range ofOn Grid Solar Panel.

                    Description-
                    Multi brand integrated – capable of providing the best brand across the globe,
                    High efficiency MMPT based inverter for maximum output
                    High efficiency, German and Europe based technology, Tier 1 durable imported panels with 25 years performance warranty.
                    Remote monitoring system.
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
                    <Card.Img variant="top" src={panel6}/>
                    <Card.Body>
                    <Card.Title>Monocrystalline Solar Panel</Card.Title>
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
                        <td>Trina Solar</td>
                        </tr>
                        <tr>
                        <td>Maximum Power Voltage</td>
                        <td>30.5 V - 30.9 V</td>
                        </tr>
                        <tr>
                        <td>Solar Cells</td>
                        <td>Multicrystalline 156 x 156 mm (6 inches)</td>
                        </tr>
                        <tr>
                        <td>Maximum Power</td>
                        <td>255 - 270W</td>
                        </tr>
                        <tr>
                        <td>Open Circuit Voltage</td>
                        <td>38.1 V - 38.4 V</td>
                        </tr>
                        <tr>
                        <td>Short Circuit Current</td>
                        <td>8.88 A - 9.18 A</td>
                        </tr>
                        <tr>
                        <td>Maximum Power Current</td>
                        <td>8.37 - 8.73 A</td>
                        </tr>
                        <tr>
                        <td>Temperature Coefficient of ICC</td>
                        <td>X - 0.41% / Degree C</td>
                        </tr>
                        <tr>
                        <td>Module Efficiency</td>
                        <td>15.6 % to 16.5 %</td>
                        </tr>
                        <tr>
                        <td>Cell Temperature</td>
                        <td>25 Degree C</td>
                        </tr>
                        <tr>
                        <td>Test Tolerance</td>
                        <td>+ / - 3%.</td>
                        </tr>
                    </tbody>
                    </Table>
                    We are a highly acknowledged organization, engaged in presenting a remarkable range ofMonocrystalline Solar Panel. 

                    Description:

                    Excellent  Low Light Performance On Cloudy days Days, Mornings And Evenings Certified to Withstand Challenging Environmental Conditions 
                    Over 30 International Tests (UV, TC, HF, And many more); PID Resitant 


                    Our most versatile product
                    Compatible with all major BOS components and system designs.
                    Maximize Limited Space
                    60-cell module power output up to 270W
                    Up to 165 W/m² power density
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
                    <Card.Img variant="top" src={panel7}/>
                    <Card.Body>
                    <Card.Title>Off Grid Solar Panel</Card.Title>
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
                        <td>Type of Solar Panel</td>
                        <td>Poly Crystalline</td>
                        </tr>
                        <tr>
                        <td>Brand</td>
                        <td>Adani</td>
                        </tr>
                        <tr>
                        <td>Maximum Power Current</td>
                        <td>8.71 A - 8.87 A</td>
                        </tr>
                        <tr>
                        <td>Maximum Power Voltage</td>
                        <td>35.61 V - 37.21 V</td>
                        </tr>
                        <tr>
                        <td>Solar Cells</td>
                        <td>Multicrystalline 156.75 * 156.75 mm</td>
                        </tr>
                        <tr>
                        <td>Peak Power</td>
                        <td>310 - 330 Wp</td>
                        </tr>
                        <tr>
                        <td>Cell Orientation</td>
                        <td>72 cells (6 * 12)</td>
                        </tr>
                        <tr>
                        <td>Module Dimension</td>
                        <td>1976 * 992 * 35 mm / 40 mm</td>
                        </tr>
                    </tbody>
                    </Table>
                    To meet the various requirements of the customers, we are involved in offering a wide assortment of Off Grid Solar Panel.
                    Description-
                    More Power Per Meter Square Compared to  Industry  Average
                    Superior Low Light Irradication Performance 200W Per Meter Square
                    Anti PID Technology and  made in india.
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
                    <Card.Img variant="top" src={panel8}/>
                    <Card.Body>
                    <Card.Title>60 Cell Duomax Module Solar Panel</Card.Title>
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
                        <td>Trina Solar</td>
                        </tr>
                        <tr>
                        <td>Maximum Power Voltage</td>
                        <td>30.5 - 31.1 V</td>
                        </tr>
                        <tr>
                        <td>Number Of Cells</td>
                        <td>60 Cell</td>
                        </tr>
                        <tr>
                        <td>Solar Cells</td>
                        <td>Multicrystalline 156 * 156 mm (6 inches)</td>
                        </tr>
                        <tr>
                        <td>Maximum Power</td>
                        <td>250 W - 270 W</td>
                        </tr>
                    </tbody>
                    </Table>
                    Description-

                    Highly reliable due to stringent quality control• PID resistant and free of snail trails
                    Increased module robustness to minimize micro-cracks• 100% EL double inspection
                    Enhanced safety
                    Fire class A certified by TUV Rheinland according to fire testIEC 61730-2 / MST 23
                    Certified for fire type13 (UL 1703)Increased value 
                    Higher maximum system voltage reduces BOS costs• 30 year linear warranty
                    0.5% annual degradation• Available with transparent encapsulant to increase value forgreenhouse or carport applications
                    Certified to withstand the most challengingenvironmental conditions• Module coating resistant to sand, acid, and alkali• 2400 Pa wind load*• 5400 Pa snow load*• 35 mm hail stones at 97 km/h
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
                    <Card.Img variant="top" src={panel9}/>
                    <Card.Body>
                    <Card.Title>Solar Panel Installation Service</Card.Title>
                    Rs 2,000 / per kw
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
                        <td>Plant Capacity</td>
                        <td>1 MW, 10 KW, 1 KW, 5 KW, 25 KW, 100 KW</td>
                        </tr>
                        <tr>
                        <td>Service Location</td>
                        <td>Local</td>
                        </tr>
                        <tr>
                        <td>Feature</td>
                        <td>Skilled Professional</td>
                        </tr>
                    </tbody>
                    </Table>
                    We are a highly acknowledged organization, engaged in presenting a remarkable range of 
                    Solar Panel Installation Service.
                    <br></br>
                    <Link to="/orders">
                    <Button variant="flat" className={Styles.btn}>ENQUIRE
                    </Button>
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
export default Panels