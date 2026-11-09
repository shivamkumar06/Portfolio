import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Java Spring Boot Developer",
          "Node.js Developer",
          "Full Stack Developer",
          "Freelancer",
          "Open Source Contributor",
          "Java Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
