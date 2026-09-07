import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FiArrowDown, FiGithub, FiMail } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useReveal from "../../hooks/useReveal";
import Magnetic from "../common/Magnetic/Magnetic";
import "./Hero.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useReveal();
  const orbOneRef = useRef(null);
  const orbTwoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(orbOneRef.current, {
        yPercent: 40,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(orbTwoRef.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);

  return (
    <section id="home" className="hero" ref={containerRef}>
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__orb hero__orb--one" ref={orbOneRef} />
        <span className="hero__orb hero__orb--two" ref={orbTwoRef} />
        <span className="hero__grid" />
      </div>

      <div className="hero__inner">
        <p className="hero__eyebrow reveal">Frontend Publisher / Developer</p>

        <h1 className="hero__title reveal reveal-delay-1">
          픽셀 하나까지 <br />
          <span className="hero__title-highlight">완벽을 조각하는</span>
          <br />
          퍼블리셔, 조재우입니다.
        </h1>

        <p className="hero__desc reveal reveal-delay-2">
          시맨틱 마크업과 정교한 인터랙션으로 브랜드 경험을 완성합니다.
          <br />
          HTML · CSS(Scss) · JavaScript · React · Vue 기반으로 작업합니다.
        </p>

        <div className="hero__actions reveal reveal-delay-3">
          <Magnetic>
            <Link to="projects" smooth duration={600} className="hero__btn hero__btn--primary">
              프로젝트 보기
            </Link>
          </Magnetic>
          <Magnetic>
            <Link to="contact" smooth duration={600} className="hero__btn hero__btn--ghost">
              연락하기
            </Link>
          </Magnetic>
        </div>

        <div className="hero__socials reveal reveal-delay-4">
          <a href="https://github.com/cjw04" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="mailto:824621@naver.com" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>

      <Link
        to="about"
        smooth
        duration={600}
        className="hero__scroll"
        aria-label="다음 섹션으로 스크롤"
      >
        <span>Scroll</span>
        <FiArrowDown />
      </Link>
    </section>
  );
}
