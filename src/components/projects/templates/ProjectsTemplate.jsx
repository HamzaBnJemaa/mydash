import React from "react";
import { ProjectCard } from "../organisms";
import "./ProjectsTemplate.css";

export default function ProjectsTemplate({
  projects = [],
  onEdit = null,
  onDelete = null,
  loading = false,
  emptyMessage = "No projects yet",
}) {
  return (
    <section className="projects-template">
      {loading ? (
        <div className="projects-template__loading">Loading projects...</div>
      ) : projects && projects.length > 0 ? (
        <div className="projects-template__grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              description={project.description}
              status={project.status}
              imageUrl={project.imageUrl}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      ) : (
        <div className="projects-template__empty">
          <p>{emptyMessage}</p>
        </div>
      )}
    </section>
  );
}
