import { certificates, education } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function About() {
  return (
    <section className="section about-section" id="about">
      <SectionHeading eyebrow="About Me" title="저를 소개합니다" />
      <div className="about-content">
        <p className="section-text">
          새로운 기술을 배우고 실제 화면으로 구현하는 과정을 좋아합니다. 프로젝트를
          진행할 때는 사용자가 무엇을 필요로 하는지 먼저 생각하고, 유지보수하기 쉬운
          코드와 명확한 UI를 만들기 위해 노력합니다.
        </p>
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
