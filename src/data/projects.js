import shinhancardImg from "../assets/projects/shinhancard.png";
import ocrImg from "../assets/projects/OCR.png";
import m4aImg from "../assets/projects/m4a.png";
import nhcardImg from "../assets/projects/nhcard.png";

export const PROJECTS = [
  {
    id: "shinhancard",
    order: "01",
    title: "신한카드",
    category: "WEB PUBLISHING",
    period: "2022.04 ~ 2024.12",
    contribution: 80,
    siteUrl: "https://www.shinhancard.com/pconts/html/main.html",
    description: "ICS6 CMS 운영 및 신한카드 서브·이벤트 페이지 마크업/유지보수",
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "Figma", "Swiper"],
    image: shinhancardImg,
    color: "#0046ff",
    tasks: [
      "ICS6 CMS 운영",
      "신한카드 서브 및 이벤트 페이지 UI 개선 요청에 따른 마크업 작업 수행",
      "유지보수 중심 프로젝트에서 UI 가독성을 고려한 모듈화 및 CSS 구조 개선",
      "디자인 변경에 따른 접근성 개선 및 웹표준 준수 마크업 적용",
      "디자이너·기획자·개발자와 협업하여 기획 변경에 유연하게 대응",
      "비대면 카드신청 프로세스 UI 개선",
    ],
    caseStudy: {
      title: "카드신청 비대면 신분증 인증",
      description: "비대면 카드신청 프로세스 내 신분증 인증 단계 UI/UX 퍼블리싱",
      image: ocrImg,
      liveUrl: "https://cjw0417.github.io/React_portfolio/OCR/main.html",
    },
  },
  {
    id: "m4a",
    order: "02",
    title: "미디어포스 얼라이언스",
    category: "WEB PUBLISHING",
    period: "2025.01 ~ 2025.03",
    contribution: 90,
    siteUrl: null,
    description: "사내 홈페이지 반응형 개선 및 리뉴얼",
    tags: ["HTML", "CSS", "JavaScript", "Figma"],
    image: m4aImg,
    color: "#00b894",
    tasks: ["사내 홈페이지 반응형 개선 및 리뉴얼"],
  },
  {
    id: "nhpay",
    order: "03",
    title: "농협카드 · NH Pay 다국어 고도화",
    category: "VUE.JS PUBLISHING",
    period: "2025.03 ~ 2025.11",
    contribution: 85,
    siteUrl: "https://card.nonghyup.com/servlet/IpCc2021R.act",
    description: "기존 NH Pay 시스템에 다국어 지원 기능을 추가하는 Vue 기반 퍼블리싱",
    tags: ["다국어", "Vue.js", "SCSS"],
    image: nhcardImg,
    color: "#fdcb6e",
    tasks: [
      "기존 NH Pay 시스템에 다국어 지원 기능 추가를 위한 퍼블리싱 구조 개선",
      "Vue 기반의 컴포넌트 환경에서 다국어 UI 개선",
      "텍스트 길이·언어 구조 차이에 따른 반응형 적용",
      "언어 변경 시 스타일 깨짐 및 UI 흐름 이상 대응을 위한 테스트 진행",
      "다국어 지원 외에도 기존 코드 정리 및 유지보수 퍼블리싱 수행",
    ],
  },
  {
    id: "hanabank",
    order: "04",
    title: "하나은행 뉴원큐 고도화",
    category: "REACT",
    period: "2026.04 ~ 현재",
    contribution: 75,
    siteUrl: "https://www.kebhana.com/",
    description: "React.js 기반 하나은행 뉴 원큐 서비스 신규 제작 및 개선",
    tags: ["React", "SCSS", "Figma"],
    image: null,
    color: "#00e0c6",
    tasks: [
      "React.js 퍼블리싱",
      '뉴 원큐 "하나기부 서비스" 신규 제작',
      '뉴 원큐 "모임통장 서비스" 개선',
    ],
  },
];

export const PROJECT_FILTERS = [
  "All",
  ...Array.from(new Set(PROJECTS.map((p) => p.category))),
];

export function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id);
}
