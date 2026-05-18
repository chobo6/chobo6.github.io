import { skills } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeading eyebrow="Skills" title="기술 스택" />
      <ul className="skill-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
