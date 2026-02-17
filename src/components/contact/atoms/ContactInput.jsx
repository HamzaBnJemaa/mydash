import React from "react";
import "./ContactInput.css";

export default function ContactInput({ type = "text", placeholder, name }) {
  return (
    <input
      className="contact-input"
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
}
