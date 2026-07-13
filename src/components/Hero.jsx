function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Portfolio</p>
        <h1>
          안녕하세요,
          <br />
          개발자 홍제규입니다.
        </h1>
        <p className="hero-description">
          Java와 Spring을 기반으로 안정적인 서버 로직과 API를 설계하고,
          데이터베이스 구조까지 고려하는 백엔드 개발자를 목표로 성장하고
          있습니다.
        </p>
      </div>
      <aside className="hero-panel spec-panel" aria-label="프로필 요약">
        <span className="profile-mark">HG</span>
        <strong>Backend Developer</strong>
        <p>Spring MVC와 MyBatis 기반 서버 개발을 중심으로 공부하고 있습니다.</p>
      </aside>
    </section>
  )
}

export default Hero
