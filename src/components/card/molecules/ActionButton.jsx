import React from "react";
import { IconButton } from "../atoms";
import "./ActionButton.css";

export default function ActionButton({
  icon: IconComponent,
  onClick,
  ariaLabel,
  title,
}) {
  return (
    <IconButton
      onClick={onClick}
      className="action-button"
      ariaLabel={ariaLabel || title}
      title={title}
    >
      <IconComponent />
    </IconButton>
  );
}
