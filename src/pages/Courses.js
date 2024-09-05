import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import client from "../assets/img/founder-img.png.webp";
import course1 from "../assets/img/courses1.jpg.webp";
import course2 from "../assets/img/courses2.jpg.webp";
import course3 from "../assets/img/courses3.jpg.webp";
import course4 from "../assets/img/courses4.jpg.webp";
import course5 from "../assets/img/courses5.jpg.webp";
import course6 from "../assets/img/courses6.jpg.webp";
import course7 from "../assets/img/courses7.jpg.webp";
import course8 from "../assets/img/courses8.jpg.webp";
import categories1 from "../assets/img/categories1.jpg.webp";
import categories2 from "../assets/img/categories2.jpg.webp";
import categories3 from "../assets/img/categories3.jpg.webp";
import categories4 from "../assets/img/categories4.jpg.webp";
import categories5 from "../assets/img/categories5.jpg.webp";
import categories6 from "../assets/img/categories6.jpg.webp";
import categories7 from "../assets/img/categories7.jpg.webp";
import categories8 from "../assets/img/categories8.jpg.webp";
import "../App.css";
import logo from '../assets/img/logo.png.webp';
import React from "react";


function Courses(){
    return(
        <>
      
        <section>
            <Container>
                <Row>
                    <Col lg="12">
                    
                    </Col>
                </Row>
            </Container>
        </section>
        
        <section className=" course-head mt-5 pt-5">
        <Container>
          <Row>
            <h2 className="text-center">
              The world's largest selection of courses
            </h2>
            <p className="text-center">
              Choose from 130,000 online video courses with new additions
              published every month
            </p>
            <Col lg="3" className="course-part pt-4">
              <img src={course1} alt="" fluid/>
              <h5>Python for Data Science and Machine Learning</h5>
              <p>by Mario Speedwagon</p>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <span>4.9 (120 Review)</span>
            </Col>
            <Col lg="3" className="course-part pt-4">
              <img src={course2} alt="" fluid/>
              <h5>Python for Data Science and Machine Learning</h5>
              <p>by Mario Speedwagon</p>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <span>4.9 (120 Review)</span>
            </Col>
            <Col lg="3" className="course-part pt-4">
              <img src={course3} alt="" fluid/>
              <h5>Python for Data Science and Machine Learning</h5>
              <p>by Mario Speedwagon</p>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <span>4.9 (120 Review)</span>
            </Col>
            <Col lg="3" className="course-part pt-4">
              <img src={course4} alt="" fluid/>
              <h5>Python for Data Science and Machine Learning</h5>
              <p>by Mario Speedwagon</p>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <span>4.9 (120 Review)</span>
            </Col>
          </Row>
        </Container>
      </section>
       

      <section className=" course-head  pt-4">
        <Container>
          <Row>
            <Col lg="3" className="course-part pt-4">
              <img src={course5} alt="" fluid/>
              <h5>Python for Data Science and Machine Learning</h5>
              <p>by Mario Speedwagon</p>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <span>4.9 (120 Review)</span>
            </Col>
            <Col lg="3" className="course-part pt-4">
              <img src={course6} alt="" fluid/>
              <h5>Python for Data Science and Machine Learning</h5>
              <p>by Mario Speedwagon</p>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <span>4.9 (120 Review)</span>
            </Col>
            <Col lg="3" className="course-part pt-4">
              <img src={course7} alt="" fluid/>
              <h5>Python for Data Science and Machine Learning</h5>
              <p>by Mario Speedwagon</p>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <span>4.9 (120 Review)</span>
            </Col>
            <Col lg="3" className="course-part pt-4">
              <img src={course8} alt="" fluid/>
              <h5>Python for Data Science and Machine Learning</h5>
              <p>by Mario Speedwagon</p>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <span>4.9 (120 Review)</span>
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

export default Courses;