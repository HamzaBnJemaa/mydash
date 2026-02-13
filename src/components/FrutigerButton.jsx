import React from 'react'
import './FrutigerButton.css'

export default function FrutigerButton() {
  return (
    <div className="frutiger-page">
      <button className="frutiger-button" onClick={() => {}}>
        <div className="inner">
          <div className="top-white"></div>
          <span className="text">HELL YEAH</span>
        </div>
      </button>

      <img
        className="frutiger-gif"
        src="/spino.gif"
        alt="decorative gif"
      />
    </div>
  )
}
