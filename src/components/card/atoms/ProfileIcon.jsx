import React from "react";
import "./ProfileIcon.css";

export default function ProfileIcon({ src, alt = "profile", size = 40, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`profile-icon ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
}
