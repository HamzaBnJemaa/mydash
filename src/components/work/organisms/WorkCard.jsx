import React from "react";
import { WorkMeta, WorkTags } from "../molecules";
import "./WorkCard.css";

export default function WorkCard({
  id,
  title,
  description,
  tags,
  onEdit,
  onDelete,
}) {
  return (
    <article className="work-card">
      <div className="work-card__body">
        <WorkMeta
          title={title}
          description={description}
        />
        <WorkTags tags={tags} />
      </div>
      {(onEdit || onDelete) && (
        <div className="work-card__actions">
          {onEdit && (
            <button
              className="work-card__action-btn work-card__action-btn--edit"
              onClick={() => onEdit(id)}
              title="Edit work"
            >
              ✎
            </button>
          )}
          {onDelete && (
            <button
              className="work-card__action-btn work-card__action-btn--delete"
              onClick={() => onDelete(id)}
              title="Delete work"
            >
              ✕
            </button>
          )}
        </div>
      )}
    </article>
  );
}
