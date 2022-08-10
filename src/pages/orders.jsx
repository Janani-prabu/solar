import React, { useState } from 'react';
import {Form,Button, Container,Row,Col} from 'react-bootstrap';
import Styles from '../Stylesheets/Orders.module.css';
import firebase from '../firebase';



function Orders() {
    const [name,Setname]=useState("");
    const [email,Setemail]=useState("");
    const [number,Setnumber]=useState("");
    const [product,Setproduct]=useState("");
    const [comments,Setcomment]=useState("");
    const sub = (e) =>{
        e.preventDefault();

        firebase.firestore().collection("orders").add({
            Name:name,
            Email:email,
            Contact_Number:number,
            Product_name:product,
            Comments:comments,
        })
        .then((docRef) => {
            alert("Details submitted successfully");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
    
  return (    
    <div className={Styles.bg}>
        <h1 className={Styles.head}>Orders and Enquiry</h1>
        <Container>
            <div className={Styles.only_form}>
            <Container>
            <Form onSubmit={(event) => {sub(event)}} className={Styles.forms}>
                <br></br>
            <Form.Group className="mb-3">
                <Form.Label><b>Name</b></Form.Label>
                <Form.Control type="text" placeholder="Enter name" onChange={(e)=>{Setname(e.target.value)}} required/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label><b>Email</b></Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{Setemail(e.target.value)}} required/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label><b>Contact Number</b></Form.Label>
                <Form.Control type="text" placeholder="Enter contact number" onChange={(e)=>{Setnumber(e.target.value)}} required/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label><b>Product Name</b></Form.Label>
                <Form.Control type="text" placeholder="Enter product to be enquired" onChange={(e)=>{Setproduct(e.target.value)}} required/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label><b>Comments</b></Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your comments to enquire" onChange={(e)=>{Setcomment(e.target.value)}} required/>
            </Form.Group>
            
            <Button  variant="flat" type="submit" className={Styles.mybutton}>
                <b>Submit</b>
            </Button>
            <br></br>
            <br></br>
            </Form>
            </Container>
            </div>
        </Container>
        <br></br>
        <br></br>
    </div>
  )
}

export default Orders