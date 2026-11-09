import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
import pdf from "../../Assets/RESUME_SHIVAM_KUMAR_NOV.pdf";
import { AiOutlineDownload, AiOutlineLoading3Quarters } from "react-icons/ai";
import { useReveal } from "../../hooks/useReveal";

const PdfViewer = lazy(() => import("./PdfViewer"));

function PdfLoadingSpinner() {
  return (
    <div className="pdf-loading" role="status">
      <AiOutlineLoading3Quarters className="pdf-spinner" aria-hidden="true" />
      <span>Loading PDF…</span>
    </div>
  );
}

function ResumeNew() {
  useReveal();
  const [width, setWidth] = useState(1200);

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <>
      <header className="page-head">
        <div className="wrap" data-reveal>
          <h1>Resume</h1>
        </div>
      </header>

      <section className="resume-section" aria-labelledby="resume-heading">
        <h2 id="resume-heading" className="visually-hidden">
          Resume document
        </h2>
        <div className="wrap">
          <div className="resume-toolbar" data-reveal>
            <a
              className="btn btn-primary"
              href={pdf}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineDownload aria-hidden="true" />
              Download CV
            </a>
          </div>

          <Suspense fallback={<PdfLoadingSpinner />}>
            <PdfViewer pdf={pdf} width={width} />
          </Suspense>

          <div className="resume-toolbar">
            <a
              className="btn btn-primary"
              href={pdf}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineDownload aria-hidden="true" />
              Download CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResumeNew;
