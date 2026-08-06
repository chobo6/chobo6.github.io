function ProjectCard({ project, onSelect }) {
  return (
    <article className="project-card spec-panel">
      <button
        className="project-card-trigger"
        onClick={() => onSelect(project)}
        type="button"
        aria-haspopup="dialog"
      >
        <span className="project-thumb" aria-hidden="true">
          {project.image ? (
            <img src={project.image} alt="" />
          ) : (
            <span className="project-thumb-placeholder">이미지 준비 중</span>
          )}
        </span>
        <span className="project-card-body">
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
        </span>
      </button>
      <div className="project-links">
        {project.links.map((link) => (
          <a
            href={link.href}
            key={link.label}
            onClick={(event) => event.stopPropagation()}
            rel="noreferrer"
            target="_blank"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  )
}

export default ProjectCard
