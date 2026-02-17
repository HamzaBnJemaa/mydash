import React from "react";
import "./SubmitButton.css";

export default function SubmitButton({ children }) {
  return <button className="submit-button" type="submit">{children}</button>;
}
