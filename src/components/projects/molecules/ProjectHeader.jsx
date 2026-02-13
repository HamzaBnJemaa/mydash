import React from "react";
import { ProjectImage } from "../atoms";

export default function ProjectHeader({ imageUrl, imageName }) {
  return (
    <div className="project-header">
      <ProjectImage src={imageUrl} alt={imageName} />
    </div>
  );
}
