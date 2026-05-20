function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <dl>
        <div>
          <dt>기술</dt>
          <dd>{project.stack.join(', ')}</dd>
        </div>
      </dl>
      <div className="project-links">
        {project.links.map((link) => (
          <a href={link.href} key={link.label} rel="noreferrer" target="_blank">
            {link.label}
          </a>
        ))}
      </div>
    </article>
  )
}

export default ProjectCard
