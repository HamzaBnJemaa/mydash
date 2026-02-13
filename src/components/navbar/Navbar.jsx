import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav-root">
      <nav className="nav-container">
        <Link to="/" className="nav-brand">MyDash</Link>
        <button
          className="navtoggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="nav-bar" />
          <span className="nav-bar" />
          <span className="nav-bar" />
        </button>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/projects" className="nav-link">Projects</Link></li>
          <li><Link to="/work" className="nav-link">Work</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}