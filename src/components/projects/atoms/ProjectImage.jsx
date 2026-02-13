import React from "react";
import "./ProjectImage.css";

export default function ProjectImage({ src, alt, fallbackIcon }) {
  return (
    <div className="project-image">
      {src ? (
        <img src={src} alt={alt} className="project-image__img" />
      ) : (
        <div className="project-image__placeholder">
          {fallbackIcon || <div className="project-image__default-icon">📁</div>}
        </div>
      )}
    </div>
  );
}
