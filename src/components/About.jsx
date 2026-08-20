import { certificates, education } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function About() {
  return (
    <section className="section about-section" id="about">
      <SectionHeading eyebrow="About Me" title="저를 소개합니다" />
      <div className="about-content">
        <div className="about-experience">
          <h3>Education</h3>
          <ol className="timeline">
            {education.map((item) => (
              <li key={item.period}>
                <span>{item.period}</span>
                <div>
                  <p className="timeline-title">{item.school}</p>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="about-experience">
          <h3>Certificates</h3>
          <ol className="timeline">
            {certificates.map((certificate) => (
              <li key={certificate.name}>
                <span>{certificate.date}</span>
                <p>{certificate.name}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default About
