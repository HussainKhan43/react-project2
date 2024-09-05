import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "../App.css";
import about from "../assets/img/about1.jpg.webp";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "../App.css";
import React from "react";



function Contact(){
    return(
        <>
      <section className=" mt-5 pt-5 pb-5 contact-part">
        <Container>
          <Row>
            <Col lg="7">
            <h2>Get in Touch</h2>
            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" placeholder="Enter your email" rows={4} />
      </Form.Group>
      <FloatingLabel
        controlId="floatingInput"
        label="Enter your name"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <br/><br/>
      <Button variant="danger" size="lg">
                Submit
              </Button>
      </Form>
      
            </Col>
            <Col lg="5 pt-3">
            <i class="fa-solid fa-house"></i>
            <h5>Buttonwood, California.</h5>
            <p>Rosemead, CA 91770</p>
            <br/><br/>
            <i class="fa-solid fa-phone"></i>
            <h5>+1 253 565 2365</h5>
            <p>Mon to Fri 9am to 6pm</p>
            <br/><br/>
            <i class="fa-solid fa-envelope"></i>
            <h5>support@colorlib.com</h5>
            <p>Send us your query anytime!</p>
            </Col>
          </Row>
        </Container>
      </section>
       
        <br/><br/><br/><br/>
        </>
    );
}

export default Contact;