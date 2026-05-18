import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHeading eyebrow="Projects" title="주요 프로젝트" />
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
