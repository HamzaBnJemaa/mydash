import React from "react";
import { ProjectTitle, ProjectDescription, StatusBadge } from "../atoms";

export default function ProjectMeta({ name, description, status }) {
  return (
    <div className="project-meta">
      <div className="project-meta__content">
        <ProjectTitle>{name}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
      </div>
      <div className="project-meta__footer">
        <StatusBadge status={status} />
      </div>
    </div>
  );
}
