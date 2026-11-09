import React from "react";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Kafka from "../../Assets/TechIcons/Kafka.svg";
import SpringBoot from "../../Assets/TechIcons/SpringBoot.svg";

// Resume-first skills, then remaining icons kept in the set.
const items = [
  { src: Java, label: "Java" },
  { src: SpringBoot, label: "Spring Boot" },
  { src: Javascript, label: "Javascript" },
  { src: Typescript, label: "Typescript" },
  { src: Node, label: "Node.Js" },
  { src: ReactIcon, label: "React.Js" },
  { src: Redux, label: "Redux" },
  { src: Tailwind, label: "Tailwind CSS" },
  { src: SQL, label: "PostgreSQL" },
  { src: Mongo, label: "Mongo DB" },
  { src: Redis, label: "Redis" },
  { src: Kafka, label: "Kafka" },
  { src: Docker, label: "Docker" },
  { src: Kubernates, label: "Kubernetes" },
  { src: AWS, label: "AWS" },
  { src: Git, label: "Git" },
  { src: C, label: "C++" },
  { src: Firebase, label: "Firebase" },
  { src: MUI, label: "Material UI" },
  { src: Postman, label: "Postman" },
];

function Techstack() {
  return (
    <div className="icon-grid" role="list">
      {items.map((item) => (
        <div className="icon-tile" role="listitem" key={item.label}>
          <img src={item.src} alt="" />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
