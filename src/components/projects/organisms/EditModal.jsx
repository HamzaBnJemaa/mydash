import React, { useState, useEffect } from 'react'
import './EditModal.css'

export default function EditModal({ project, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    status: 'In Progress',
  })

  useEffect(() => {
    if (project) {
      setFormData({
        name: project.name || '',
        description: project.description || '',
        status: project.status || 'In Progress',
      })
    }
  }, [project])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = () => {
    onSave({
      ...project,
      ...formData,
    })
    onClose()
  }

  if (!project) return null

  return (
    <div className="edit-modal-overlay" onClick={onClose}>
      <div className="edit-modal" onClick={(e) => e.stopPropagation()}>
        <div className="edit-modal__header">
          <h2 className="edit-modal__title">Edit Project</h2>
          <button
            className="edit-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="edit-modal__body">
          <div className="edit-modal__form-group">
            <label htmlFor="name" className="edit-modal__label">
              Project Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="edit-modal__input"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter project name"
            />
          </div>

          <div className="edit-modal__form-group">
            <label htmlFor="description" className="edit-modal__label">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="edit-modal__textarea"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter project description"
              rows="4"
            />
          </div>

          <div className="edit-modal__form-group">
            <label htmlFor="status" className="edit-modal__label">
              Status
            </label>
            <select
              id="status"
              name="status"
              className="edit-modal__select"
              value={formData.status}
              onChange={handleInputChange}
            >
              <option value="In Progress">In Progress</option>
              <option value="Delayed">Delayed</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        <div className="edit-modal__footer">
          <button
            className="edit-modal__btn edit-modal__btn--cancel"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="edit-modal__btn edit-modal__btn--save"
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
