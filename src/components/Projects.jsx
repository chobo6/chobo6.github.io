import { useState } from 'react'
import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import SectionHeading from './SectionHeading'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className="section" id="projects">
      <SectionHeading eyebrow="Projects" title="주요 프로젝트" />
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} onSelect={setSelectedProject} project={project} />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal onClose={() => setSelectedProject(null)} project={selectedProject} />
      )}
    </section>
  )
}

export default Projects
