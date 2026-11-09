import React from "react";
import { Link } from "react-router-dom";
import Home2 from "./Home2";
import Type from "./Type";
import { useReveal } from "../../hooks/useReveal";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  useReveal();

  return (
    <>
      <section className="hero" data-enter>
        <div className="hero__glow" aria-hidden="true" />
        <div className="wrap hero__content">
          <h1 className="hero__name" data-enter-item="1">
            Shivam <span>Kumar</span>
          </h1>
          <p className="hero__fact" data-enter-item="2">
            Software Developer at <strong>GFK-NielsenIQ</strong>. Java Spring
            Boot and Node.js backends that hold up, with interfaces that feel
            natural.
          </p>
          <div className="hero__roles" data-enter-item="3" aria-live="polite">
            <Type />
          </div>
          <div className="hero__actions" data-enter-item="4">
            <Link className="btn btn-primary" to="/project">
              View projects
            </Link>
            <Link className="btn btn-ghost" to="/resume">
              Open resume
            </Link>
          </div>
        </div>
      </section>

      <Home2 />

      <section className="section" aria-labelledby="connect-heading">
        <div className="wrap" data-reveal>
          <div className="section__head">
            <h2 id="connect-heading">Find me on</h2>
            <p>
              Feel free to <span className="accent">connect</span> with me
            </p>
          </div>
          <ul className="social-row">
            <li>
              <a
                href="https://github.com/shivamkumar06"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/ShivamSaha"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <AiOutlineTwitter aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/shivamkumar06/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/shivam._.kumar_/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <AiFillInstagram aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Home;
