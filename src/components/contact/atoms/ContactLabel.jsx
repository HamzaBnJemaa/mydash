import React from "react";
import "./ContactLabel.css";

export default function ContactLabel({ children }) {
  return <label className="contact-label">{children}</label>;
}
