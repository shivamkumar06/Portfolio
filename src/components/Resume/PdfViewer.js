import React, { useState, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Isolating pdfjs setup here keeps it out of the main bundle.
// This entire module (+ react-pdf + the worker) is code-split into its
// own chunk and only downloaded when PdfViewer is actually rendered.
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PdfViewer({ pdf, width }) {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
  }, []);

  return (
    <Document
      file={pdf}
      className="d-flex justify-content-center"
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (_el, index) => (
        <Page
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          scale={width > 786 ? 1.7 : 0.6}
        />
      ))}
    </Document>
  );
}

export default PdfViewer;
