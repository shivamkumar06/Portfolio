import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function PageTransition({ children }) {
  const location = useLocation();
  const [phase, setPhase] = useState("enter");

  useEffect(() => {
    setPhase("enter");
    const id = requestAnimationFrame(() => setPhase("idle"));
    return () => cancelAnimationFrame(id);
  }, [location.pathname]);

  return (
    <div className={`page-transition page-transition--${phase}`} key={location.pathname}>
      {children}
    </div>
  );
}

export default PageTransition;
