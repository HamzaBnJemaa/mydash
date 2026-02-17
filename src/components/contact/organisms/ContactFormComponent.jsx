import React from "react";
import { FormField, TextAreaField } from "../molecules";
import { SubmitButton } from "../atoms";
import "./ContactFormComponent.css";

export default function ContactFormComponent() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <form className="contact-form-component" onSubmit={handleSubmit}>
      <FormField
        label="Name"
        type="text"
        placeholder="Your full name"
        name="name"
      />
      <FormField
        label="Email"
        type="email"
        placeholder="your@email.com"
        name="email"
      />
      <TextAreaField
        label="Message"
        placeholder="Your message here..."
        name="message"
        rows={5}
      />
      <div className="contact-form-component__actions">
        <SubmitButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m3.4 20.4l17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a.993.993 0 0 0-1.39.91L2 9.12c0 .5.37.93.87.99L17 12L2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91"
            />
          </svg>
          Send Message
        </SubmitButton>
      </div>
    </form>
  );
}
