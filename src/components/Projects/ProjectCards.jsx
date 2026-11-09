import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ imgPath, title, description, ghLink, demoLink, isBlog }) {
  return (
    <article className="project-card">
      <div className="project-card__media">
        <img src={imgPath} alt="" />
      </div>
      <div className="project-card__body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-card__actions">
          {ghLink && (
            <a
              className="btn btn-ghost"
              href={ghLink}
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub aria-hidden="true" />
              {isBlog ? "Blog" : "GitHub"}
            </a>
          )}
          {!isBlog && demoLink && (
            <a
              className="btn btn-primary"
              href={demoLink}
              target="_blank"
              rel="noreferrer"
            >
              <CgWebsite aria-hidden="true" />
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCards;
