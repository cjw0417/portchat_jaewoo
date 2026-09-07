import { useState } from "react";
import useReveal from "../../hooks/useReveal";
import { FiGithub, FiMail, FiSend } from "react-icons/fi";
import "./Contact.scss";

const INITIAL_FORM = { name: "", email: "", message: "" };

export default function Contact() {
  const containerRef = useReveal();
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sent");
    setForm(INITIAL_FORM);

    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="contact" ref={containerRef}>
      <div className="contact__inner">
        <div className="contact__info">
          <p className="contact__label reveal">Contact</p>
          <h2 className="contact__title reveal reveal-delay-1">
            함께 만들고 싶은
            <br />
            프로젝트가 있다면
          </h2>
          <p className="contact__desc reveal reveal-delay-2">
            새로운 작업, 협업 제안 모두 환영합니다. 편하게 연락 주세요.
          </p>

          <ul className="contact__list reveal reveal-delay-3">
            <li>
              <FiMail />
              <a href="mailto:824621@naver.com">824621@naver.com</a>
            </li>
            <li>
              <FiGithub />
              <a href="https://github.com/cjw04" target="_blank" rel="noreferrer">
                github.com/cjw04
              </a>
            </li>
          </ul>

          <div className="contact__socials reveal reveal-delay-4">
            <a href="https://github.com/cjw04" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="mailto:824621@naver.com" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <form className="contact__form reveal reveal-delay-2" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label htmlFor="name">이름</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="홍길동"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="email">이메일</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message">메시지</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="전달하고 싶은 내용을 적어주세요."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contact__submit">
            {status === "sent" ? "전송 완료!" : "메시지 보내기"}
            <FiSend />
          </button>
        </form>
      </div>
    </section>
  );
}
