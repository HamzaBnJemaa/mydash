import React from "react";
import { WorkCard } from "../organisms";
import "./WorksTemplate.css";

export default function WorksTemplate({ works = [], onEdit, onDelete }) {
  return (
    <section className="works-template">
      <div className="works-template__grid">
        {works.length > 0 ? (
          works.map((work) => (
            <WorkCard
              key={work.id}
              {...work}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))
        ) : (
          <p className="works-template__empty">No work experience added yet.</p>
        )}
      </div>
    </section>
  );
}
