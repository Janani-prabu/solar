import React, { useState } from 'react';
import {Form,Button, Container,Row,Col} from 'react-bootstrap';
import Styles from '../Stylesheets/service.module.css';
//import db from '../firebase';
import firebase from '../firebase';
import service2 from '../images/service2.png';



function Service() {


    // const [value, setValue] = useState(),
    //     onInput = ({target:{value}}) => setValue(value)
    //     console.log(value)
    //     onSubmit =( e) => {
    //       e.preventDefault()
    //       console.log(value)
    //       setValue()
    //     }
    const [name,Setname]=useState("");
    const [address,Setaddress]=useState("");
    const [email,Setemail]=useState("");
    const [number,Setnumber]=useState("");
    const [product,Setproduct]=useState("");
    const [issue,Setissue]=useState("");
    const [date,Setdate]=useState("");
    const sub = (e) =>{
        e.preventDefault();

        firebase.firestore().collection("bookings").add({
            Name:name,
            Address:address,
            Email:email,
            Contact_Number:number,
            Product_name:product,
            Issue:issue,
            Preferred_date:date
        })
        .then((docRef) => {
            alert("Service Booked Successfully");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
    
  return (    
    <div>
        <h1 className={Styles.head}>Service Booking</h1>
        <Container>
        <p>
        Services for all products purchased with us can be booked from here.We offer services ONLY to the products purchased from us.To avail a services,the form below has to be filled.Once you fill the 
        form we will contact you to book an appointment with us and inspect the product for potential malfunctions.
        </p>
        <br></br>
        <Row>
            <Col>
              <img src={service2} alt="service" height="700" width="500"></img>
            </Col>

            <Col>
            <div className={Styles.only_form}>
            <Container>
            <Form onSubmit={(event) => {sub(event)}}>
                <br></br>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" onChange={(e)=>{Setname(e.target.value)}} required/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter address" onChange={(e)=>{Setaddress(e.target.value)}} required/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{Setemail(e.target.value)}} required/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="text" placeholder="Enter contact number" onChange={(e)=>{Setnumber(e.target.value)}} required/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter product to be serviced" onChange={(e)=>{Setproduct(e.target.value)}} required/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Issue</Form.Label>
                <Form.Control type="text" placeholder="Enter issues faced" onChange={(e)=>{Setissue(e.target.value)}} required/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Preferred Date</Form.Label>
                <Form.Control type="text" placeholder="Enter preferred date to service" onChange={(e)=>{Setdate(e.target.value)}} required/>
            </Form.Group>
            
            <Button  variant="flat" type="submit" className={Styles.mybutton}>
                Submit
            </Button>
            <br></br>
            <br></br>
            </Form>
            </Container>
            </div>
            </Col>
        </Row>
        </Container>
        <br></br>
        <br></br>
    </div>
  )
}

export default Service