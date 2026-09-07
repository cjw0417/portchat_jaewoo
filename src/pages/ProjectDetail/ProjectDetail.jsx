import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { getProjectById } from "../../data/projects";
import MobileFrame from "../../components/common/MobileFrame/MobileFrame";
import "./ProjectDetail.scss";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) {
    return (
      <div className="project-detail project-detail--empty">
        <p>존재하지 않는 프로젝트입니다.</p>
        <Link to="/">홈으로 돌아가기</Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <header className="project-detail__header">
        <Link to="/" className="project-detail__logo">
          JAE<span>WOO</span>
        </Link>
        <Link to="/" className="project-detail__back">
          <FiArrowLeft /> 목록으로
        </Link>
      </header>

      <div className="project-detail__inner">
        <div className="project-detail__meta">
          <span className="project-detail__category">{project.category}</span>
          <span className="project-detail__period">{project.period}</span>
        </div>

        <h1 className="project-detail__title">{project.title}</h1>
        <p className="project-detail__desc">{project.description}</p>

        {project.siteUrl && (
          <a
            className="project-detail__site-link"
            href={project.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ "--accent": project.color }}
          >
            <FiExternalLink /> 페이지 바로가기
          </a>
        )}

        <ul className="project-detail__tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        {typeof project.contribution === "number" && (
          <div
            className="project-detail__contribution"
            style={{ "--accent": project.color }}
          >
            <span className="project-detail__contribution-label">기여도</span>
            <div className="project-detail__contribution-bar">
              <span style={{ width: `${project.contribution}%` }} />
            </div>
            <span className="project-detail__contribution-value">
              {project.contribution}%
            </span>
          </div>
        )}

        {project.image && (
          <div
            className="project-detail__image"
            style={{ "--accent": project.color }}
          >
            <img src={project.image} alt={project.title} />
          </div>
        )}

        <div className="project-detail__tasks">
          <h2>담당 업무</h2>
          <ul>
            {project.tasks?.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>

        {project.caseStudy && (
          <div className="project-detail__case">
            <h2>케이스 스터디 · {project.caseStudy.title}</h2>
            <p>{project.caseStudy.description}</p>

            {project.caseStudy.image && (
              <div
                className="project-detail__image"
                style={{ "--accent": project.color }}
              >
                <img src={project.caseStudy.image} alt={project.caseStudy.title} />
              </div>
            )}

            <div className="project-detail__demo">
              <MobileFrame
                src={project.caseStudy.liveUrl}
                title={project.caseStudy.title}
                emptyMessage="모바일 데모 연결 준비 중입니다."
              />
              {project.caseStudy.liveUrl && (
                <a
                  className="project-detail__site-link"
                  href={project.caseStudy.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ "--accent": project.color }}
                >
                  <FiExternalLink /> 새 탭에서 열기
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
