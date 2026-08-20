import profilePhoto from '../assets/images/profile-photo.png'

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
          궁금한 걸 대충 넘기지 못해서, 늘 "그래서 정확히 어떻게 되는 거지?"까지
          파고듭니다. 그렇게 이해한 것들을 직접 만들어보며, 조금씩 나아가는
          중입니다.
        </p>
      </div>
      <aside className="hero-panel spec-panel" aria-label="프로필 사진">
        <img alt="홍제규" className="profile-photo" src={profilePhoto} />
      </aside>
    </section>
  )
}

export default Hero
