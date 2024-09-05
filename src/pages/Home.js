
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import hero from "../assets/img/h1_hero1.jpg.webp";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import client from "../assets/img/founder-img.png.webp";
import course1 from "../assets/img/courses1.jpg.webp";
import course2 from "../assets/img/courses2.jpg.webp";
import course3 from "../assets/img/courses3.jpg.webp";
import course4 from "../assets/img/courses4.jpg.webp";
import categories1 from "../assets/img/categories1.jpg.webp";
import categories2 from "../assets/img/categories2.jpg.webp";
import categories3 from "../assets/img/categories3.jpg.webp";
import categories4 from "../assets/img/categories4.jpg.webp";
import categories5 from "../assets/img/categories5.jpg.webp";
import categories6 from "../assets/img/categories6.jpg.webp";
import categories7 from "../assets/img/categories7.jpg.webp";
import categories8 from "../assets/img/categories8.jpg.webp";
import about from "../assets/img/about1.jpg.webp";
import about2  from "../assets/img/about2.jpg.webp"
import "../App.css";
import React from "react";

function Home() {
  return (
    <>

      <section className="hero-part">
        <Container fluid>
          <Row>
            <Col lg="7" style={{ backgroundColor: "#5A4E8C" }}>
              <h1>
                Learn new skills online <br /> with top educators
              </h1>
              <br />
              <p>
                Learn 100% online with world-class universities <br /> and
                industry experts.
              </p>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="What do you want to learn?"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </InputGroup.Text>
              </InputGroup>
              <br />
            </Col>
            <Col lg="5">
              <img
                src={hero}
                alt=""
                style={{ height: "650px" }}
                className="img-fluid"
              />
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
      <section className=" course-head mt-5 pt-5">
        <Container>
          <Row>
            <h2 className="text-center">Students are viewing</h2>
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
      <section className="gallery-part pt-4 mt-5">
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
      <section className="about2-part mt-5 pt-5">
        <Container>
          <Row>
            <Col lg="6">
            <h2 className="pt-4">Become an Instructor</h2>
            <p className="pt-3">The automated process all your website tasks. Discover tools and
            techniques to engage effectively with vulnerable children and young people.</p>
            <ul>
              <li>Techniques to engage effectively with vulnerable children and young people.</li>
              <br/>
              <li>Join millions of people from around the world learning together.</li>
              <br/>
              <li>Join millions of people from around the world learning together.</li>
            </ul><br/>
            <Button variant="danger" size="lg">
                Become a Instructor
              </Button>
            </Col>
            <Col lg="6">
            <img src={about2} alt="" fluid />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
