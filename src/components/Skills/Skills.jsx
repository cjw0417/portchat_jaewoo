import useReveal from "../../hooks/useReveal";
import { SKILL_GROUPS } from "../../data/skills";
import "./Skills.scss";

export default function Skills() {
  const containerRef = useReveal();

  return (
    <section id="skills" className="skills" ref={containerRef}>
      <div className="skills__inner">
        <p className="skills__label reveal">Skills</p>
        <h2 className="skills__title reveal reveal-delay-1">
          다루는 기술과 도구
        </h2>
        <p className="skills__desc reveal reveal-delay-2">
          HTML/CSS, JavaScript가 베이스고, 요즘은 React/Vue 쓰는 프로젝트가
          많아져서 학습 및 실무 경험 중입니다.
        </p>

        <div className="skills__groups">
          {SKILL_GROUPS.map((group, gIndex) => (
            <div
              className={`skills__group reveal reveal-delay-${(gIndex % 4) + 2}`}
              key={group.id}
            >
              <h3 className="skills__group-title">{group.title}</h3>
              <ul className="skills__tags">
                {group.items.map((item) => (
                  <li className="skills__tag" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
