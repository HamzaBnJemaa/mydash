import React from "react";
import { ContactInfo } from "../molecules";
import { ContactFormComponent } from "../organisms";
import "./ContactTemplate.css";

export default function ContactTemplate() {
  return (
    <section className="contact-template-card">
      <div className="contact-template-card__inner">
        <ContactInfo
          title="Get In Touch"
          description="Feel free to reach out:"
          email="benjemaahamza09@gmail.com"
        />
        <ContactFormComponent />
      </div>
    </section>
  );
}
