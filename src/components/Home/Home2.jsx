import React from "react";

function Home2() {
  return (
    <section className="section" id="about" aria-labelledby="intro-heading">
      <div className="wrap">
        <div className="section__head" data-reveal>
          <h2 id="intro-heading">
            Let me <span className="accent">introduce</span> myself
          </h2>
        </div>
        <div className="intro-grid">
          <div className="copy" data-reveal>
            <p>
              Some engineers write code. I translate ideas into infrastructure.
              My journey in tech has taken me across the full stack from
              designing systems that hold up under pressure, to building
              interfaces that feel natural to use. Along the way, I found my
              sweet spot: high-performance backends and intuitive frontend
              experiences, working in harmony.
            </p>
            <p>
              I&apos;m fluent in{" "}
              <span className="accent">
                Java, Spring Boot, JavaScript, TypeScript, and Node.js
              </span>{" "}
              and I&apos;ve built a deep appreciation for tools that are both
              powerful and expressive.
            </p>
            <p>
              <span className="accent">React.js</span> is where I reach when I
              want to build something great on the frontend.{" "}
              <span className="accent">Java Spring Boot</span> and{" "}
              <span className="accent">Node.js</span> are where I stay when
              things need to be fast, flexible, and built to last.
            </p>
          </div>
          <aside className="intro-panel" data-reveal="scale">
            <strong>Now</strong>
            <span>Software Developer · GFK-NielsenIQ</span>
            <strong style={{ marginTop: "1.25rem" }}>Base</strong>
            <span>Pune, India</span>
            <strong style={{ marginTop: "1.25rem" }}>Focus</strong>
            <span>Java Spring Boot · React · Node.js</span>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Home2;
