import React from "react";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";

const items = [
  { src: macOs, label: "Mac Os" },
  { src: chrome, label: "Google Chrome" },
  { src: vsCode, label: "Vs Code" },
  { src: intelliJ, label: "IntelliJ" },
];

function Toolstack() {
  return (
    <div className="icon-grid" role="list">
      {items.map((item) => (
        <div className="icon-tile" role="listitem" key={item.label}>
          <img src={item.src} alt="" className="tech-icon-images" />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default Toolstack;
