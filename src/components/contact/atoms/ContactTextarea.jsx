import React from "react";
import "./ContactTextarea.css";

export default function ContactTextarea({ placeholder, name, rows = 5 }) {
  return (
    <textarea
      className="contact-textarea"
      placeholder={placeholder}
      name={name}
      rows={rows}
    ></textarea>
  );
}
