import React from "react";
import { ContactLabel, ContactInput } from "../atoms";
import "./FormField.css";

export default function FormField({ label, type = "text", placeholder, name }) {
  return (
    <div className="form-field">
      <ContactLabel>{label}</ContactLabel>
      <ContactInput type={type} placeholder={placeholder} name={name} />
    </div>
  );
}
