import { experiences } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function Experience() {
  return (
    <section className="section timeline-section" id="experience">
      <SectionHeading eyebrow="Experience" title="경험과 교육" />
      <ol className="timeline">
        {experiences.map((experience) => (
          <li key={experience.year}>
            <span>{experience.year}</span>
            <p>{experience.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experience
