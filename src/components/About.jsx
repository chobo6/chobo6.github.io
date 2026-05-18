import SectionHeading from './SectionHeading'

function About() {
  return (
    <section className="section" id="about">
      <SectionHeading eyebrow="About Me" title="저를 소개합니다" />
      <p className="section-text">
        새로운 기술을 배우고 실제 화면으로 구현하는 과정을 좋아합니다.
        프로젝트를 진행할 때는 사용자가 무엇을 필요로 하는지 먼저 생각하고,
        유지보수하기 쉬운 코드와 명확한 UI를 만들기 위해 노력합니다.
      </p>
    </section>
  )
}

export default About
