import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/RESUME_SHIVAM_KUMAR_SEP.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// react-pdf (+ pdfjs worker) only downloads when PdfViewer first mounts —
// completely absent from every other route's bundle.
const PdfViewer = lazy(() => import("./PdfViewer"));

function PdfLoadingSpinner() {
  return (
    <Row
      style={{
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
        color: "white",
        fontSize: "1.2rem",
        gap: "0.6rem",
      }}
    >
      <AiOutlineLoading3Quarters
        className="pdf-spinner"
        style={{ fontSize: "2rem", animation: "spin 1s linear infinite" }}
      />
      <span>Loading PDF…</span>

      {/* Inline keyframes — no extra CSS file needed */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </Row>
  );
}

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    handleResize();                              // set correct width on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          {/* Inner Suspense: shows spinner while react-pdf chunk + PDF file load */}
          <Suspense fallback={<PdfLoadingSpinner />}>
            <PdfViewer pdf={pdf} width={width} />
          </Suspense>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
