import { useMemo, useState } from "react";
import useReveal from "../../hooks/useReveal";
import { PROJECTS, PROJECT_FILTERS } from "../../data/projects";
import { FiArrowUpRight } from "react-icons/fi";
import "./Projects.scss";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const containerRef = useReveal([activeFilter]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="projects" ref={containerRef}>
      <div className="projects__inner">
        <p className="projects__label reveal">Projects</p>
        <h2 className="projects__title reveal reveal-delay-1">작업물 모음</h2>

        <div className="projects__filters reveal reveal-delay-2">
          {PROJECT_FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`projects__filter ${
                activeFilter === filter ? "is-active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project, index) => (
            <article
              className={`projects__card reveal reveal-delay-${(index % 3) + 1}`}
              key={project.id}
            >
              <div
                className={`projects__thumb ${
                  project.image ? "has-image" : ""
                }`}
                style={{
                  "--accent": project.color,
                  backgroundImage: project.image
                    ? `url(${project.image})`
                    : undefined,
                }}
              >
                <span className="projects__thumb-order">{project.order}</span>
                {!project.image && (
                  <span className="projects__thumb-mark">{project.order}</span>
                )}
                <a
                  href="#"
                  className="projects__thumb-link"
                  aria-label={`${project.title} 자세히 보기`}
                  onClick={(e) => e.preventDefault()}
                >
                  <FiArrowUpRight />
                </a>
              </div>

              <div className="projects__card-body">
                <div className="projects__card-meta">
                  <span className="projects__card-category">
                    {project.category}
                  </span>
                  <span className="projects__card-period">{project.period}</span>
                </div>
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.description}</p>
                <ul className="projects__card-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
