import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <section className="contact-root">
      <h1>Contact</h1>
      <p>you can contact me via my mail or social media<a href="mailto:hello@example.com">benjemaahamza09@gmail.com</a>.</p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Name
          <input type="text" name="name" placeholder="Your name"  className='label' />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com"  className='label' />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" placeholder="Hi there..."  className='label'></textarea>
        </label>
        <button type="submit" className='send'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFFFFF" d="m3.4 20.4l17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a.993.993 0 0 0-1.39.91L2 9.12c0 .5.37.93.87.99L17 12L2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91"/></svg>
        </button>
      </form>
    </section>
  )
}
