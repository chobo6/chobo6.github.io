import githubLogo from '../assets/icons/github.svg'

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <dl className="contact-info">
        <div>
          <dt>주소</dt>
          <dd>천안시 동남구 용곡동</dd>
        </div>
        <div>
          <dt>TEL</dt>
          <dd>
            <a href="tel:010-6376-2923">010-6376-2923</a>
          </dd>
        </div>
        <div>
          <dt>이메일</dt>
          <dd>
            <a href="mailto:hongjegue@naver.com">hongjegue@naver.com</a>
          </dd>
        </div>
      </dl>
      <a
        className="github-logo-link"
        href="https://github.com/chobo6"
        rel="noreferrer"
        target="_blank"
        aria-label="GitHub 프로필로 이동"
      >
        <img src={githubLogo} alt="" />
      </a>
    </section>
  )
}

export default Contact
