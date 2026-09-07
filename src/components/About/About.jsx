import useReveal from "../../hooks/useReveal";
import "./About.scss";

const CAREER = [
  {
    period: "2026.04 ~ 2026.09",
    role: "(주)미디어포스 얼라이언스 · 프리랜서 (계약 만료)",
  },
  {
    period: "2022.02 ~ 2025.11",
    role: "(주)미디어포스 얼라이언스 · 퍼블리싱팀 주임",
  },
];

const KEYWORDS = ["사용자 중심", "꼼꼼함", "소통", "문제 해결"];

export default function About() {
  const containerRef = useReveal();

  return (
    <section id="about" className="about" ref={containerRef}>
      <div className="about__inner">
        <div className="about__intro">
          <p className="about__label reveal">About Me</p>
          <h2 className="about__title reveal reveal-delay-1">
            디자인과 코드 사이,
            <br />
            사용자를 먼저 생각하는 사람
          </h2>
        </div>

        <div className="about__content">
          <div className="about__portrait reveal reveal-delay-1">
            <div className="about__portrait-frame">
              <span className="about__portrait-initials">JC</span>
            </div>
            <div className="about__portrait-badge">
              <strong>4+</strong>
              <span>Years Experience</span>
            </div>
          </div>

          <div className="about__text">
            <p className="reveal reveal-delay-2">
              안녕하세요. (주)미디어포스 얼라이언스에서 퍼블리셔로 일해온
              조재우입니다. 신한카드 운영으로 시작했는데 어쩌다 보니
              금융권 프로젝트가 계속 이어지는 덕분에 복잡한 UI 구조 다루는
              건 꽤 익숙해졌어요.
            </p>
            <p className="reveal reveal-delay-3">
              마크업이 그냥 껍데기라는 생각은 없어요. 결국 사용자가 직접
              보고 만지는 부분이라서, 꼼꼼하게 짚고 넘어가는 편이에요.
            </p>

            <blockquote className="about__quote reveal reveal-delay-3">
              “디자인 시안이 들어오면 ‘어떻게 구현하지’보다 ‘어떻게 하면 더
              꼼꼼하게 사용자의 편의성을 위해 잘 만들 수 있을까’를 먼저
              생각해요.”
            </blockquote>

            <div className="about__career">
              <h3 className="about__career-title reveal reveal-delay-4">
                주요 경력
              </h3>
              <ul className="about__career-list">
                {CAREER.map((item, i) => (
                  <li
                    className={`reveal reveal-delay-${i + 4}`}
                    key={item.period}
                  >
                    <span className="about__career-period">
                      {item.period}
                    </span>
                    <span className="about__career-role">{item.role}</span>
                  </li>
                ))}
              </ul>
            </div>

            <ul className="about__keywords reveal reveal-delay-5">
              {KEYWORDS.map((keyword) => (
                <li key={keyword}>{keyword}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
