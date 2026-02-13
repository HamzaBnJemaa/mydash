import React, { useState } from 'react'
import { ProjectsTemplate } from './templates'
import { EditModal } from './organisms'

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'My Project',
      description: 'A modern web application built with React',
      status: 'In Progress',
      imageUrl: null,
    },
    {
      id: 2,
      name: 'Codini',
      description: 'A platform for coding challenges',
      status: 'Delayed',
      imageUrl: null,
    },
    {
      id: 3,
      name: 'Tayara',
      description: 'E-commerce platform',
      status: 'Completed',
      imageUrl: null,
    },
    {
      id: 4,
      name: 'GYM App',
      description: 'A fitness tracking app',
      status: 'In Progress',
      imageUrl: null,
    },
  ])

  const [editingProject, setEditingProject] = useState(null)

  const handleEditProject = (projectId) => {
    const project = projects.find(p => p.id === projectId)
    setEditingProject(project)
  }

  const handleCloseModal = () => {
    setEditingProject(null)
  }

  const handleSaveProject = (updatedProject) => {
    setProjects(projects.map(p =>
      p.id === updatedProject.id ? updatedProject : p
    ))
  }

  const handleDeleteProject = (projectId) => {
    setProjects(projects.filter(p => p.id !== projectId))
  }

  return (
    <div className="projects-page">
      <h1 className="projects-title">My Projects</h1>
      <ProjectsTemplate
        projects={projects}
        onEdit={handleEditProject}
        onDelete={handleDeleteProject}
      />
      <EditModal
        project={editingProject}
        onClose={handleCloseModal}
        onSave={handleSaveProject}
      />
    </div>
  )
}

export default Projects