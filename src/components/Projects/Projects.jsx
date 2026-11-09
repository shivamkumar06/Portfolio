import React from "react";
import ProjectCard from "./ProjectCards";
import bookchapter from "../../Assets/Projects/book-chapter.png";
import moviebox from "../../Assets/Projects/moviebox.png";
import foodie from "../../Assets/Projects/foodie.png";
import reetsangeet from "../../Assets/Projects/reet-sangeet.png";
import { useReveal } from "../../hooks/useReveal";

function Projects() {
  useReveal();

  return (
    <>
      <header className="page-head">
        <div className="wrap" data-reveal>
          <h1>
            My recent <span>works</span>
          </h1>
          <p>Here are a few projects I&apos;ve worked on recently.</p>
        </div>
      </header>

      <section className="page-body" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="visually-hidden">
          Projects
        </h2>
        <div className="wrap">
          <div className="project-grid">
            <div data-reveal="scale">
              <ProjectCard
                imgPath={reetsangeet}
                isBlog={false}
                title="Reet Sangeet"
                description="A freelance project for a music school website built with React.js. The website features a user-friendly interface for students to explore courses, book classes, and access learning resources."
                ghLink="https://github.com/shivamkumar06/reet-sangeet"
                demoLink="https://www.reetsangeet.com/"
              />
            </div>
            <div data-reveal="scale">
              <ProjectCard
                imgPath={moviebox}
                isBlog={false}
                title="MovieBox"
                description="A simple gen-ai movie browsing app built with React.js and The Movie Database (TMDb) API. Users can get suggestions for movies based on their preferences."
                ghLink="https://github.com/shivamkumar06/NetFlix-GPT"
                demoLink="https://moviebox6.netlify.app/"
              />
            </div>
            <div data-reveal="scale">
              <ProjectCard
                imgPath={foodie}
                isBlog={false}
                title="Foodie App"
                description="A food recipe app built with React.js and the Swiggy API. Users can search for restaurants, dietary preferences, and cuisine types in their area."
                ghLink="https://github.com/shivamkumar06/namaste-react"
                demoLink="https://serene-jalebi-c5ef84.netlify.app"
              />
            </div>
            <div data-reveal="scale">
              <ProjectCard
                imgPath={bookchapter}
                isBlog={false}
                title="Financial and Banking Services Using Blockchain and Its Open Security Issues"
                description="Chapter published in the book 'Hybridization of Blockchain and Cloud Computing: Overcoming Security Issues in IoT' by Apple Academic Press, 2023. The chapter focuses on the application of blockchain technology in financial and banking services, exploring its potential to enhance security, transparency, and efficiency in the industry. It also discusses the open security issues associated with blockchain implementation in this sector."
                demoLink="https://www.appleacademicpress.com/hybridization-of-blockchain-and-cloud-computing-overcoming-security-issues-in-iot/9781774912164"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
