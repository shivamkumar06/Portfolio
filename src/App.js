import React, { useState, useEffect, lazy, Suspense } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Particle from "./components/Particle";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Route-level code splitting — each page loads only when first visited
const Home    = lazy(() => import("./components/Home/Home"));
const About   = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Resume  = lazy(() => import("./components/Resume/ResumeNew"));

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {/* Single Particle instance — lives outside Routes so it is never
            unmounted on navigation; React.memo + stable params ref keep it
            from re-initialising the canvas. */}
        <Particle />
        <Navbar />
        <ScrollToTop />
        <Suspense fallback={<div id="preloader" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
