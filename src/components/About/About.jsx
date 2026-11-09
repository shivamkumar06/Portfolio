import React from "react";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import { useReveal } from "../../hooks/useReveal";

function About() {
  useReveal();

  return (
    <>
      <header className="page-head">
        <div className="wrap" data-reveal>
          <h1>
            Know who <span>I&apos;m</span>
          </h1>
        </div>
      </header>

      <section className="page-body" aria-labelledby="about-heading">
        <h2 id="about-heading" className="visually-hidden">
          About Shivam
        </h2>
        <div className="wrap">
          <Aboutcard />

          <div className="stack-block" data-reveal>
            <h2>
              Professional <span>skillset</span>
            </h2>
            <Techstack />
          </div>

          <div className="stack-block" data-reveal>
            <h2>
              <span>Tools</span> I use
            </h2>
            <Toolstack />
          </div>

          <div data-reveal>
            <Github />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
