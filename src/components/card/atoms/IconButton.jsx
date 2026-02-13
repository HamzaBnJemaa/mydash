import React from "react";
import "./IconButton.css";

export default function IconButton({
  onClick,
  children,
  className = "",
  variant = "default",
  ariaLabel = "button",
}) {
  return (
    <button
      className={`icon-button icon-button--${variant} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
