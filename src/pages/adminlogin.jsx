import React, { useState } from 'react';
import {Form,Button, Container} from 'react-bootstrap';
import Styles from '../Stylesheets/Adminlogin.module.css';
import firebase from '../firebase';
import { useNavigate } from "react-router-dom";

function Adminlogin(){

    const [email,Setemail]= useState("");
    const [password,Setpassword]= useState("");
    const navigate = useNavigate();


    const log = (e) =>{
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log("logged in");

                navigate('/adminhome');
                // ...
            })
            .catch((error) => {
                alert("Incorrect email or password!!");
            });

       
    }
    
    return(
        <div>
            <h1 className={Styles.head}>Admin Login</h1>
            <br></br>
            <div className={Styles.only_form}>
            <Container>
            <Form onSubmit={(event) => {log(event)}}>
            <br></br>
            <Form.Group className="mb-3" >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" onChange={(e)=>{Setemail(e.target.value)}} required/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" onChange={(e)=>{Setpassword(e.target.value)}} required/>
            </Form.Group>
            <Button variant="flat" type="submit" className={Styles.mybutton}>
                Submit
            </Button>
            </Form>
            <br></br>
            </Container>
            </div>
            <br></br>
            <br></br>


            
        </div>
    );
}
export default Adminlogin;