import React from "react";
import { WorkTag } from "../atoms";
import "./WorkTags.css";

export default function WorkTags({ tags }) {
  return (
    <div className="work-tags">
      {tags && tags.map((tag, index) => (
        <WorkTag key={index}>{tag}</WorkTag>
      ))}
    </div>
  );
}
