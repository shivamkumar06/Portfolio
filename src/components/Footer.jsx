import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
// import ViewerCount from "./ViewerCount";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <h3>Designed and Developed by Shivam Kumar</h3>
        <div className="site-footer__mid">
          <h3>Copyright © {year} Shivam</h3>
          {/* <ViewerCount /> */}
        </div>
        <ul className="site-footer__social">
          <li>
            <a
              href="https://github.com/shivamkumar06"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <AiFillGithub aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/ShivamSaha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <AiOutlineTwitter aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/shivamkumar06/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/shivam._.kumar_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <AiFillInstagram aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}


export default Footer;
