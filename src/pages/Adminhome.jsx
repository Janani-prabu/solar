import React from 'react';
import firebase from '../firebase';
import { useEffect,useState } from 'react';
import {Table,Row,Col,Tab,Nav} from 'react-bootstrap';
import Styles from '../Stylesheets/Adminhome.module.css';
import logout from '../images/logout.PNG';
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
function Adminhome(){

    const navigate = useNavigate();
    const log = (e) =>{
        e.preventDefault();
        firebase.auth().signOut().then(() => {
            console.log("logged out");
            navigate('/');
        });
    }



    const [infos,setInfo]=useState([]);
    const ref = firebase.firestore().collection("bookings");
    useEffect(()=>{
        function getInfo(){
            ref.onSnapshot((querySnapshot)=>{
                const details=[];
                querySnapshot.forEach((doc)=>{
                    details.push(doc.data());
                });
                console.log(details)
                setInfo(details);
            });

        }
        getInfo();
    },[])



    const [values,setValue]=useState([]);
    const result = firebase.firestore().collection("orders");
    useEffect(()=>{
        function getInfo2(){
            result.onSnapshot((querySnapshot)=>{
                const details2=[];
                querySnapshot.forEach((doc)=>{
                    details2.push(doc.data());
                });
                console.log(details2)
                setValue(details2);
            });

        }
        getInfo2();
    },[])



    
    return (
            <Tab.Container  defaultActiveKey="first">
            <Row>
                <Col sm={3} className={Styles.mycol}>
                <Nav variant="tabs" className="flex-column">
                    <Nav.Item>
                    <Nav.Link eventKey="first" >
                        Services
                    </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second">
                        Orders and Enquiries
                    </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="third">
                         Logout
                    </Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="first" >
                            <h1>Service Booking Details</h1>
                            <br></br>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Contact_Number</th>
                        <th>Product_name</th>
                        <th>Issue</th>
                        <th>Preferred_date</th>
                        </tr>
                    </thead>
                    
                        {infos.map((info)=>( 
                            <tbody key={info.key}>
                                <tr key={info.key}>
                                    <td>{info.Name}</td>
                                    <td>{info.Address}</td>
                                    <td>{info.Email}</td>
                                    <td>{info.Contact_Number}</td>
                                    <td>{info.Product_name}</td>
                                    <td>{info.Issue}</td>
                                    <td>{info.Preferred_date}</td>

                                </tr>
                            </tbody>
                        ))}
                    
                    </Table>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <h1>Orders and Enquiry Details</h1>
                    <br></br>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact_Number</th>
                        <th>Product_name</th>
                        <th>Comments</th>
                        </tr>
                    </thead>
                    
                        {values.map((value)=>( 
                            <tbody>
                                <tr>
                                    <td>{value.Name}</td>
                                    <td>{value.Email}</td>
                                    <td>{value.Contact_Number}</td>
                                    <td>{value.Product_name}</td>
                                    <td>{value.Comments}</td>
                                </tr>
                            </tbody>
                        ))}
                    
                    </Table>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <h1>LOGOUT</h1>
                        <br></br>
                        <br></br>
                        <div className={Styles.logoutimg}>
                        <img src={logout} alt="logout"></img>
                        </div>
                        <br></br>
                        <br></br>
                        <h3>
                        <LinkContainer to="/">
                        <Nav.Link onClick={(event) => {log(event)}}>Click here to Logout</Nav.Link>
                        </LinkContainer>
                        </h3>
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
    );
}
export default Adminhome