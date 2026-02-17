import React from "react";
import "./ContactInfo.css";

export default function ContactInfo({ title, description, email }) {
  return (
    <div className="contact-info">
      <h2 className="contact-info__title">{title}</h2>
      <p className="contact-info__description">
        {description}
        {email && (
          <a href={`mailto:${email}`} className="contact-info__email">
            {email}
          </a>
        )}
      </p>
    </div>
  );
}
