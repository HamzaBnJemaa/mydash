import React from "react";
import { ContactLabel, ContactTextarea } from "../atoms";
import "./TextAreaField.css";

export default function TextAreaField({ label, placeholder, name, rows = 5 }) {
  return (
    <div className="textarea-field">
      <ContactLabel>{label}</ContactLabel>
      <ContactTextarea placeholder={placeholder} name={name} rows={rows} />
    </div>
  );
}
