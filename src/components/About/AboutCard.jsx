import React from "react";

function AboutCard() {
  return (
    <div className="about-story" data-reveal>
      <p>
        Hi everyone! I&apos;m <span className="accent">Shivam Kumar</span> from{" "}
        <span className="accent">Pune, India</span>.
      </p>
      <p>
        I&apos;m currently working as a{" "}
        <span className="accent">Software Developer</span> focused on{" "}
        <span className="accent">Java Spring Boot</span> and{" "}
        <span className="accent">Node.js</span> at{" "}
        <span className="accent">GFK-NielsenIQ</span>.
      </p>
      <p>
        I hold a Master&apos;s in{" "}
        <span className="accent">Computer Applications</span> from{" "}
        <span className="accent">VIT Vellore</span>.
      </p>
      <p>
        Outside of coding, I love engaging in activities that keep me creative
        and inspired.
      </p>
      <ul className="chip-list">
        <li>Playing Games</li>
        <li>Gym</li>
        <li>Traveling</li>
      </ul>
      <p
        style={{
          marginTop: "1.5rem",
          fontStyle: "italic",
          color: "var(--accent)",
          fontSize: "1.15rem",
        }}
      >
        &ldquo;Strive to build things that make a difference!&rdquo;
      </p>
      <p style={{ marginTop: "0.5rem", color: "var(--muted)", fontSize: "0.95rem" }}>
        - Shivam
      </p>
    </div>
  );
}

export default AboutCard;
