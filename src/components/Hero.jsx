function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Portfolio</p>
        <h1>안녕하세요, 개발자 홍제규입니다.</h1>
        <p className="hero-description">
          사용자 경험을 고민하며 문제를 구조적으로 해결하는 프론트엔드
          개발자를 목표로 성장하고 있습니다.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#projects">
            프로젝트 보기
          </a>
          <a className="secondary-button" href="#contact">
            연락하기
          </a>
        </div>
      </div>
      <aside className="hero-panel" aria-label="프로필 요약">
        <span className="profile-mark">HG</span>
        <strong>Frontend Developer</strong>
        <p>React 기반 UI와 반응형 웹을 중심으로 공부하고 있습니다.</p>
      </aside>
    </section>
  )
}

export default Hero
