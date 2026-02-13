import React, { useState, useEffect } from 'react'
import './WorkEditModal.css'

export default function WorkEditModal({ work, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: [],
  })
  const [tagInput, setTagInput] = useState('')

  useEffect(() => {
    if (work) {
      setFormData({
        title: work.title || '',
        description: work.description || '',
        tags: work.tags || [],
      })
    }
  }, [work])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }))
      setTagInput('')
    }
  }

  const handleRemoveTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove),
    }))
  }

  const handleSave = () => {
    onSave({
      ...work,
      ...formData,
    })
    onClose()
  }

  if (!work) return null

  return (
    <div className="work-edit-modal-overlay" onClick={onClose}>
      <div className="work-edit-modal" onClick={(e) => e.stopPropagation()}>
        <div className="work-edit-modal__header">
          <h2 className="work-edit-modal__title">Edit Work Experience</h2>
          <button
            className="work-edit-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="work-edit-modal__body">
          <div className="work-edit-modal__form-group">
            <label htmlFor="title" className="work-edit-modal__label">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="work-edit-modal__input"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter job title"
            />
          </div>

          <div className="work-edit-modal__form-group">
            <label htmlFor="description" className="work-edit-modal__label">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="work-edit-modal__textarea"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter work description"
              rows="4"
            />
          </div>

          <div className="work-edit-modal__form-group">
            <label htmlFor="tags" className="work-edit-modal__label">
              Skills & Technologies
            </label>
            <div className="work-edit-modal__tag-input-group">
              <input
                type="text"
                id="tags"
                className="work-edit-modal__input"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                placeholder="Add a skill and press Enter"
              />
              <button
                className="work-edit-modal__add-tag-btn"
                onClick={handleAddTag}
              >
                Add
              </button>
            </div>
            <div className="work-edit-modal__tags">
              {formData.tags.map((tag, index) => (
                <span key={index} className="work-edit-modal__tag">
                  {tag}
                  <button
                    className="work-edit-modal__tag-remove"
                    onClick={() => handleRemoveTag(tag)}
                    aria-label={`Remove ${tag}`}
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="work-edit-modal__footer">
          <button
            className="work-edit-modal__btn work-edit-modal__btn--cancel"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="work-edit-modal__btn work-edit-modal__btn--save"
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
