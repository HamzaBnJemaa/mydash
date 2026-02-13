import React from "react";
import { WorkTitle, WorkDescription } from "../atoms";
import "./WorkMeta.css";

export default function WorkMeta({ title, description }) {
  return (
    <div className="work-meta">
      <WorkTitle>{title}</WorkTitle>
      <WorkDescription>{description}</WorkDescription>
    </div>
  );
}
