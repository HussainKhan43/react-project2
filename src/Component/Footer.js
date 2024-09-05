import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "../App.css";
import { Link } from 'react-router-dom'; 
import logo from '../assets/img/logo.png.webp';


function Footer(){
    return(
        <>
        <section className=" footer-part pt-5">
            <Container>
                <Row>
                    <Col lg="3">
                    <img src={logo} alt=""/><br/><br/>
                    <p>The automated process starts as soon as your clothes go into the machine.</p>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-github"></i>
                    </Col>
                    <Col lg="3">
                    <h4>Community</h4>
                    <ul>
                        <li><a href="#">Design & creatives</a></li>
                        <li><a href="#">Telecommunication</a></li>
                        <li><a href="#">Restaurant</a></li>
                        <li><a href="#">Programing</a></li>
                        <li><a href="#">Architecture</a></li>
                    </ul>
                    </Col>
                    <Col lg="3">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">Design & creatives</a></li>
                        <li><a href="#">Telecommunication</a></li>
                        <li><a href="#">Restaurant</a></li>
                        <li><a href="#">Programing</a></li>
                        <li><a href="#">Architecture</a></li>
                    </ul>
                    </Col>
                    <Col lg="3">
                    <h4>Newsletter</h4>
                    <p>Subscribe our newsletter to get updates.</p>
                    
                    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" placeholder="Enter your email" rows={1} />
      </Form.Group></Form>
      <Button variant="danger" size="lg">
                Submit
              </Button>
                    </Col>
                    <p className="text-center pt-5 pb-2">Copyright © 2024 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i> by Hussain</p>
                </Row>
            </Container>
        </section>
        </>
    );
}

export default Footer;