import React, { useState, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

function PdfViewer({ pdf, width }) {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = useCallback(({ numPages: next }) => {
    setNumPages(next);
  }, []);

  const scale = width > 786 ? 1.35 : 0.55;

  return (
    <Document
      file={pdf}
      className="resume-pages"
      onLoadSuccess={onDocumentLoadSuccess}
      loading={<div className="pdf-loading">Preparing pages…</div>}
    >
      {Array.from(new Array(numPages), (_el, index) => (
        <Page
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          scale={scale}
          renderTextLayer
          renderAnnotationLayer
        />
      ))}
    </Document>
  );
}

export default PdfViewer;
