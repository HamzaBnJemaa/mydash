import React, { useState } from 'react'
import { WorksTemplate } from './templates'
import { WorkEditModal } from './organisms'
import './Work.css'

const Work = () => {
  const [works, setWorks] = useState([
    {
      id: 1,
      title: 'Frontend Developer',
      description: 'Built responsive web interfaces and interactive components',
      tags: ['React', 'JavaScript', 'CSS', 'Responsive Design'],
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      description: 'Developed and maintained full-stack web applications with modern tech stack',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    },
    {
      id: 3,
      title: 'UI/UX Developer',
      description: 'Created user-centered designs and implemented beautiful interfaces',
      tags: ['Figma', 'UI Design', 'User Research', 'Prototyping'],
    },
  ])
  const [editingWork, setEditingWork] = useState(null)

  const handleEditWork = (workId) => {
    const work = works.find(w => w.id === workId)
    setEditingWork(work)
  }

  const handleCloseModal = () => {
    setEditingWork(null)
  }

  const handleSaveWork = (updatedWork) => {
    setWorks(works.map(w =>
      w.id === updatedWork.id ? updatedWork : w
    ))
  }

  const handleDeleteWork = (workId) => {
    setWorks(works.filter(w => w.id !== workId))
  }

  return (
    <div className="work-page">
      <h1 className="work-title-main">My Work Experience</h1>
      <p className="work-subtitle">A showcase of my professional journey and accomplishments</p>
      <WorksTemplate
        works={works}
        onEdit={handleEditWork}
        onDelete={handleDeleteWork}
      />
      <WorkEditModal
        work={editingWork}
        onClose={handleCloseModal}
        onSave={handleSaveWork}
      />
    </div>
  )
}

export default Work
