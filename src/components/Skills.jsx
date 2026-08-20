import awsIcon from '../assets/icons/aws.svg'
import dockerIcon from '../assets/icons/docker.svg'
import elasticsearchIcon from '../assets/icons/elasticsearch.svg'
import expressIcon from '../assets/icons/express.svg'
import htmlIcon from '../assets/icons/html.svg'
import javaIcon from '../assets/icons/java.svg'
import javascriptIcon from '../assets/icons/javascript.svg'
import jwtIcon from '../assets/icons/jwt.svg'
import kafkaIcon from '../assets/icons/kafka.svg'
import kubernetesIcon from '../assets/icons/kubernetes.svg'
import mavenIcon from '../assets/icons/maven.svg'
import mybatisIcon from '../assets/icons/mybatis.png'
import nextjsIcon from '../assets/icons/nextjs.svg'
import oracleDbIcon from '../assets/icons/oracle-db.svg'
import postgresqlIcon from '../assets/icons/postgresql.svg'
import pythonIcon from '../assets/icons/python.svg'
import reactIcon from '../assets/icons/react.svg'
import reduxToolkitIcon from '../assets/icons/redux-toolkit.svg'
import redisIcon from '../assets/icons/redis.svg'
import socketIoIcon from '../assets/icons/socket-io.svg'
import springMvcIcon from '../assets/icons/spring-mvc.svg'
import sqliteIcon from '../assets/icons/sqlite.svg'
import typescriptIcon from '../assets/icons/typescript.svg'
import { skills } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const skillIcons = {
  aws: awsIcon,
  docker: dockerIcon,
  elasticsearch: elasticsearchIcon,
  express: expressIcon,
  html: htmlIcon,
  java: javaIcon,
  javascript: javascriptIcon,
  jwt: jwtIcon,
  kafka: kafkaIcon,
  kubernetes: kubernetesIcon,
  maven: mavenIcon,
  mybatis: mybatisIcon,
  nextjs: nextjsIcon,
  oracleDb: oracleDbIcon,
  postgresql: postgresqlIcon,
  python: pythonIcon,
  react: reactIcon,
  reduxToolkit: reduxToolkitIcon,
  redis: redisIcon,
  socketIo: socketIoIcon,
  springMvc: springMvcIcon,
  sqlite: sqliteIcon,
  typescript: typescriptIcon,
}

function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeading eyebrow="Skills" title="기술 스택" />
      <div className="skill-groups">
        {skills.map((group) => (
          <article className="skill-group spec-panel" key={group.category}>
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
