import client from "../assets/img/founder-img.png.webp";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "../App.css";
import logo from '../assets/img/logo.png.webp';
import about from "../assets/img/about1.jpg.webp";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import categories1 from "../assets/img/categories1.jpg.webp";
import categories2 from "../assets/img/categories2.jpg.webp";
import categories3 from "../assets/img/categories3.jpg.webp";
import categories4 from "../assets/img/categories4.jpg.webp";
import categories5 from "../assets/img/categories5.jpg.webp";
import categories6 from "../assets/img/categories6.jpg.webp";
import categories7 from "../assets/img/categories7.jpg.webp";
import categories8 from "../assets/img/categories8.jpg.webp";
import "../App.css";
import React from "react";



function About(){
    return(
        <>
        <section className="mt-5 pt-5">
        <Container>
          <Row>
            <Col lg="5">
              <img src={about} alt="" fluid/>
            </Col>
            <Col lg="7" className=" about-part px-5">
              <h2>
                The world’s largest <br /> selection of online courses
              </h2>
              <p>
                Millions of people have used Kingster to decide which online
                course to take.
                <br /> We aggregate courses from many universities to help you
                find the best courses on almost any subject, wherever they
                exist. Our goal is to make online education work for everyone.
              </p>
              <br />
              <Button variant="danger" size="lg">
                Browse Courses
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-us text-center">
        <Container>
          <Row>
            <h2>Student says about us</h2>
            <p>
              Everybody is different, which is why we offer styles for every
              body.<br/> Laborum fuga incidunt laboriosam voluptas iure, delectus<br/>
              dignissimos facilis neque nulla earum.
            </p>
           <Col lg="12" className="d-flex justify-content-center pt-3">
            <img src={client} alt="" fluid/>
            <span className="px-3">Petey Cruiser <br/>Student at Onedu</span>
            </Col>
          </Row>
        </Container>
      </section>
        
      <section className="gallery-part pt-4 mt-5 pb-5">
        <Container>
          <Row>
            <h2 className="text-center">Explore top categories</h2>
            <Col lg="3" className="pt-5">
            <img src={categories1} alt="" fluid/>
            </Col>
            <Col lg="3" className="pt-5">
            <img src={categories2} alt="" fluid/>
            </Col>
            <Col lg="3" className="pt-5">
            <img src={categories3} alt="" fluid />
            </Col>
            <Col lg="3" className="pt-5">
            <img src={categories4} alt=""fluid />
            </Col>
          </Row>
          <Row>
            <Col lg="3" className="pt-4">
            <img src={categories5} alt="" fluid/>
            </Col>
            <Col lg="3" className="pt-4">
            <img src={categories6} alt="" fluid/>
            </Col>
            <Col lg="3" className="pt-4">
            <img src={categories7} alt="" fluid/>
            </Col>
            <Col lg="3" className="pt-4">
            <img src={categories8} alt="" fluid/>
            </Col>
          </Row>
        </Container>
      </section>
        
        </>
    );
}

export default About;