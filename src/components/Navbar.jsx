import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/project", label: "Projects" },
  { to: "/resume", label: "Resume", primary: true },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY >= 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className={`site-nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap site-nav__inner">
        <Link to="/" className="site-nav__brand" aria-label="Home">
          Shivam<span>.</span>
        </Link>

        <button
          type="button"
          className="site-nav__toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="site-menu"
          className={`site-nav__menu${open ? " is-open" : ""}`}
          aria-label="Primary"
        >
          <ul className="site-nav__links">
            {links.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={item.primary ? "nav-cta" : undefined}
                  aria-current={
                    location.pathname === item.to ? "page" : undefined
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                className="site-nav__fork"
                href="https://github.com/shivamkumar06/Portfolio"
                target="_blank"
                rel="noreferrer"
                aria-label="Star this portfolio on GitHub"
              >
                <CgGitFork aria-hidden="true" />
                <AiFillStar aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
