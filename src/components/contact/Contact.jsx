import React from 'react'
import { ContactTemplate } from './templates'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-page">
      <h1 className="contact-page__title">Contact Me</h1>
      <p className="contact-page__subtitle">
        Let's get in touch!
      </p>
      <ContactTemplate />
    </div>
  )
}
