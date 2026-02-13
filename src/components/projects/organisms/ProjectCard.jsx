import React from "react";
import { ProjectHeader, ProjectMeta } from "../molecules";
import "./ProjectCard.css";

export default function ProjectCard({
  id,
  name,
  description,
  status,
  imageUrl,
  onEdit,
  onDelete,
}) {
  return (
    <article className="project-card">
      <ProjectHeader imageUrl={imageUrl} imageName={name} />
      <div className="project-card__body">
        <ProjectMeta name={name} description={description} status={status} />
      </div>
      {(onEdit || onDelete) && (
        <div className="project-card__actions">
          {onEdit && (
            <button
              className="project-card__action-btn project-card__action-btn--edit"
              onClick={() => onEdit(id)}
              title="Edit project"
            >
              ✎
            </button>
          )}
          {onDelete && (
            <button
              className="project-card__action-btn project-card__action-btn--delete"
              onClick={() => onDelete(id)}
              title="Delete project"
            >
              ✕
            </button>
          )}
        </div>
      )}
    </article>
  );
}
