import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import heart_disease from "../../Assets/Projects/heart_disease.webp";
import emotion from "../../Assets/Projects/emotion.png";
import url_shortner from "../../Assets/Projects/url-shortener.webp";
import dinner from "../../Assets/Projects/dinner-builder.png";
import ecom from "../../Assets/Projects/shopping-apps.jpg"
import CTR from "../../Assets/Projects/CTR.gif";
import router from "../../Assets/Projects/routing_optimizer.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="E-Commerce App"
              description="E-commerce website clone using Python Django framework, replicating the core functionalities of popular platforms including user authentication, product catalog management, and secure payment gateways. Essential features such as product search, cart management, and order processing has also been integrated."
              demoLink="https://fardeenhasib.github.io/online-store"
              ghLink="https://github.com/fardeenhasib/E-Commerce-Website"
            />


          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dinner}
              isBlog={false}
              title="Dinner Builder"
              description="An application build on ReactJS, Redux State Management tool, Firebase Database which helps an user to select ingredients of preferences to customise his/her dinner order."
              ghLink="https://github.com/fardeenhasib/burger_builder"
              demoLink="https://fardeenhasib.github.io/burger-builder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={url_shortner}
              isBlog={false}
              title="URL Shortner with Node.js"
              description="An application which effortlessly shorten long URLs utilizing Node.js and Express.js, offering a sleek and intuitive interface for quick link management."
              ghLink="https://github.com/fardeenhasib/url-shortener"
            // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={router}
              isBlog={false}
              title="Network Router"
              description="Implemented Dijktra's Algorithm with Max Heap Data Structure in Python to detect maximum bandwidth path in a densely connected network. "
              ghLink="https://github.com/fardeenhasib/CSCE-629-Project"
            // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heart_disease}
              isBlog={false}
              title="AI For Heart Disease Detection"
              description="Using SVM, KNN and Decision Tree classifiers for the detection of heart disease in a patient and thus helping in heart attack prevention."
              ghLink="https://github.com/fardeenhasib/ECEN-649-final-Project"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CTR}
              isBlog={false}
              title="NLP for Hypothesis Testing of Clinical Trial Reports"
              description="Implemented BERT based classifiers to predict if a medical hypothesis is an entailment or a contradiction of a given CTR. Infused disease knowledge on the models to increase the accuracy by around 3% on average from the base models. Frameworks and libraries used for this project are Pytorch and HuggingFace."
              ghLink="https://github.com/fardeenhasib/NLP-Final-Report/"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
