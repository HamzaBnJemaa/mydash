import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Card from './components/card/Card'
import Projects from './components/projects/Projects'
import Work from './components/work/Work'
import About from './components/about/About'
import Contact from './components/contact/Contact'

function App() {
  return (
    <Router>
      <div className="app-root">
        <Navbar />
        <main style={{ padding: '2rem', maxWidth: 1100, margin: '0 auto' }}>
          <Routes>
            <Route path="/" element={<Card />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
