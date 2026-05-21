import htmlIcon from '../assets/icons/html.svg'
import javaIcon from '../assets/icons/java.svg'
import javascriptIcon from '../assets/icons/javascript.svg'
import jwtIcon from '../assets/icons/jwt.svg'
import mavenIcon from '../assets/icons/maven.svg'
import mybatisIcon from '../assets/icons/mybatis.png'
import nextjsIcon from '../assets/icons/nextjs.svg'
import oracleDbIcon from '../assets/icons/oracle-db.svg'
import pythonIcon from '../assets/icons/python.svg'
import reactIcon from '../assets/icons/react.svg'
import reduxToolkitIcon from '../assets/icons/redux-toolkit.svg'
import springMvcIcon from '../assets/icons/spring-mvc.svg'
import { skills } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const skillIcons = {
  html: htmlIcon,
  java: javaIcon,
  javascript: javascriptIcon,
  jwt: jwtIcon,
  maven: mavenIcon,
  mybatis: mybatisIcon,
  nextjs: nextjsIcon,
  oracleDb: oracleDbIcon,
  python: pythonIcon,
  react: reactIcon,
  reduxToolkit: reduxToolkitIcon,
  springMvc: springMvcIcon,
}

function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeading eyebrow="Skills" title="기술 스택" />
      <div className="skill-groups">
        {skills.map((group) => (
          <article className="skill-group" key={group.category}>
            <h3>{group.category}</h3>
            <ul className="skill-list">
              {group.items.map((skill) => (
                <li key={skill.name} style={{ '--skill-color': skill.color }}>
                  <span className="skill-icon" aria-hidden="true">
                    {skill.icon ? (
                      <img src={skillIcons[skill.icon]} alt="" />
                    ) : (
                      skill.mark
                    )}
                  </span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
