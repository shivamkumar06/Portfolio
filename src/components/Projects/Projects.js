import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bookchapter from "../../Assets/Projects/book-chapter.png";
import moviebox from "../../Assets/Projects/moviebox.png";
import foodie from "../../Assets/Projects/foodie.png";

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
              imgPath={moviebox}
              isBlog={false}
              title="MovieBox"
              description="A simple gen-ai movie browsing app built with React.js and The Movie Database (TMDb) API. Users can get suggestions for movies based on their preferences."
              ghLink="https://github.com/shivamkumar06/NetFlix-GPT"
              demoLink="https://moviebox6.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodie}
              isBlog={false}
              title="Foodie App"
              description="A food recipe app built with React.js and the Swiggy API. Users can search for restaurants, dietary preferences, and cuisine types in their area."
              ghLink="https://github.com/shivamkumar06/namaste-react"
              demoLink="https://serene-jalebi-c5ef84.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookchapter}
              isBlog={false}
              title="Financial and Banking Services Using Blockchain and Its Open Security Issues"
              description="Chapter published in the book 'Hybridization of Blockchain and Cloud Computing: Overcoming Security Issues in IoT' by Apple Academic Press, 2023. The chapter focuses on the application of blockchain technology in financial and banking services, exploring its potential to enhance security, transparency, and efficiency in the industry. It also discusses the open security issues associated with blockchain implementation in this sector."
              demoLink="https://www.appleacademicpress.com/hybridization-of-blockchain-and-cloud-computing-overcoming-security-issues-in-iot/9781774912164"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
