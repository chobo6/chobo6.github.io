import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = overflow
    }
  }, [onClose])

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        aria-labelledby="project-modal-title"
        aria-modal="true"
        className="modal-panel spec-panel"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <button
          aria-label="닫기"
          className="modal-close"
          onClick={onClose}
          ref={closeButtonRef}
          type="button"
        >
          ✕
        </button>

        <span className="project-thumb project-thumb-large" aria-hidden="true">
          {project.image ? (
            <img src={project.image} alt="" />
          ) : (
            <span className="project-thumb-placeholder">이미지 준비 중</span>
          )}
        </span>

        <h3 id="project-modal-title">{project.title}</h3>
        <p className="modal-summary">{project.summary}</p>

        <dl className="modal-meta">
          <div>
            <dt>기간</dt>
            <dd>{project.period || '작성 예정'}</dd>
          </div>
          <div>
            <dt>역할</dt>
            <dd>{project.role || '작성 예정'}</dd>
          </div>
        </dl>

        <section className="modal-section">
          <h4>사용 기술</h4>
          <ul className="modal-stack">
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          {project.techDecisions.length > 0 ? (
            <ul className="modal-list">
              {project.techDecisions.map((item) => (
                <li key={item.tech}>
                  <strong>{item.tech}</strong> — {item.reason}
                </li>
              ))}
            </ul>
          ) : (
            <p className="modal-placeholder">선택 이유 작성 예정</p>
          )}
        </section>

        <section className="modal-section">
          <h4>주요 기능</h4>
          {project.features.length > 0 ? (
            <ul className="modal-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          ) : (
            <p className="modal-placeholder">작성 예정</p>
          )}
        </section>

        <section className="modal-section">
          <h4>트러블슈팅</h4>
          {project.troubleshooting.length > 0 ? (
            <ul className="modal-list modal-list-troubleshooting">
              {project.troubleshooting.map((item) => (
                <li key={item.problem}>
                  <p className="modal-problem">문제: {item.problem}</p>
                  <p className="modal-solution">해결: {item.solution}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="modal-placeholder">작성 예정</p>
          )}
        </section>

        <section className="modal-section">
          <h4>회고</h4>
          {project.retrospective ? (
            <p>{project.retrospective}</p>
          ) : (
            <p className="modal-placeholder">작성 예정</p>
          )}
        </section>

        <div className="project-links">
          {project.links.map((link) => (
            <a href={link.href} key={link.label} rel="noreferrer" target="_blank">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default ProjectModal
