import shinhancardImg from "../assets/projects/shinhancard.png";
import ocrImg from "../assets/projects/OCR.png";
import m4aImg from "../assets/projects/m4a.png";
import nhcardImg from "../assets/projects/nhcard.png";

export const PROJECTS = [
  {
    id: "shinhancard",
    order: "01",
    title: "신한카드 운영",
    category: "WEB PUBLISHING",
    period: "2022.04 ~ 2024.12",
    description: "신한카드 웹 유지보수 운영 및 신규 서비스 퍼블리싱",
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "Figma", "Swiper"],
    image: shinhancardImg,
    color: "#0046ff",
  },
  {
    id: "ocr-auth",
    order: "02",
    title: "카드신청 비대면 신분증 인증",
    category: "UI/UX PUBLISHING",
    period: "2024.05 ~ 2024.11",
    description: "비대면 신분증 인증 시스템 UI/UX 퍼블리싱",
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "Figma"],
    image: ocrImg,
    color: "#6c5ce7",
  },
  {
    id: "m4a",
    order: "03",
    title: "M4A 사내 홈페이지 리뉴얼",
    category: "WEB PUBLISHING",
    period: "2025.01 ~ 2025.04",
    description: "M4A 사내 홈페이지 전면 리뉴얼 퍼블리싱",
    tags: ["HTML", "CSS", "JavaScript", "Figma"],
    image: m4aImg,
    color: "#00b894",
  },
  {
    id: "nhpay",
    order: "04",
    title: "NH Pay 다국어 고도화",
    category: "VUE.JS PUBLISHING",
    period: "2025.03 ~ 2025.11",
    description: "NH Pay 글로벌 서비스 다국어 퍼블리싱",
    tags: ["다국어", "Vue.js", "SCSS"],
    image: nhcardImg,
    color: "#fdcb6e",
  },
  {
    id: "hanabank",
    order: "05",
    title: "하나은행 서비스 고도화",
    category: "REACT",
    period: "2026.04 ~ 현재",
    description: "하나은행 웹 서비스 고도화 퍼블리싱",
    tags: ["React", "SCSS", "Figma"],
    image: null,
    color: "#00e0c6",
  },
];

export const PROJECT_FILTERS = [
  "All",
  ...Array.from(new Set(PROJECTS.map((p) => p.category))),
];
