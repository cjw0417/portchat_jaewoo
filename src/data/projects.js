import shinhancardImg from "../assets/projects/shinhancard.png";
import ocrImg from "../assets/projects/OCR.png";
import m4aImg from "../assets/projects/m4a.png";
import nhcardImg from "../assets/projects/nhcard.png";
import aionOverviewImg from "../assets/projects/aion2/overview.jpg";
import aionLoginImg from "../assets/projects/aion2/login.png";
import aionHeaderImg from "../assets/projects/aion2/header.jpg";
import aionFormImg from "../assets/projects/aion2/form.jpg";
import aionDaySummaryImg from "../assets/projects/aion2/day-summary.jpg";
import aionCalendarImg from "../assets/projects/aion2/calendar.jpg";
import aionMemberImg from "../assets/projects/aion2/member.jpg";
import aionUpdateNotesImg from "../assets/projects/aion2/update-notes.png";

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
  {
    id: "aion2-raid",
    order: "05",
    title: "아이온2 길드 레이드 스케줄",
    category: "SIDE PROJECT",
    period: "2026.09 ~ 현재 진행중",
    contribution: 100,
    siteUrl: "https://raid-calendar-deng-aion-grew-region.vercel.app/",
    description:
      "취미로 즐기는 아이온2 길드원들의 레이드 공략 가능 시간을 모아 파티를 구성하는 공유 스케줄표",
    tags: ["React", "Vite", "Supabase", "Vercel", "SCSS"],
    image: aionOverviewImg,
    color: "#7c9cff",
    tasks: [
      "기획·디자인·퍼블리싱·개발·배포까지 1인 전담",
      "Supabase 기반 닉네임 로그인 및 공유 스케줄 데이터 저장",
      "레이드·난이도·공략 방식별 주간 캘린더 자동 집계 및 A/B 파티 편성",
      "매주 수요일 리셋 카운트다운, 출발·클리어 표시 기능",
      "Vercel 배포로 길드원 누구나 접속 가능한 실서비스 운영",
      "길드원 피드백을 받아 개선하고, 디스코드로 업데이트 안내 공유",
    ],
    showcase: [
      {
        title: "닉네임 로그인",
        image: aionLoginImg,
        description:
          "길드원별 닉네임으로 로그인합니다. 최초 로그인 시 안내받은 초기 비밀번호로 들어와 본인 비밀번호와 찾기 질문을 설정합니다.",
        points: [
          "Supabase에 계정·비밀번호 정보 저장",
          "여러 번 틀리면 5분간 잠금 처리",
          "비밀번호 찾기 질문으로 스스로 재설정",
        ],
      },
      {
        title: "헤더 · 요약 카드",
        image: aionHeaderImg,
        description:
          "실시간 시계와 로그인 사용자 정보, 그리고 한눈에 보는 요약 카드 3종을 상단에 배치했습니다.",
        points: [
          "다음 주간 리셋(수요일 00:00)까지 남은 시간 카운트다운",
          "현재 스케줄에 참여한 전체 인원 집계",
          "파티 조건(2파티 / 10명, 파티당 5명) 안내",
        ],
      },
      {
        title: "나의 레이드 가능 시간",
        image: aionFormImg,
        layout: "side",
        description:
          "레이드·난이도·공략 방식을 먼저 고른 뒤 가능한 요일과 시간대를 선택해 저장하는 입력 패널입니다.",
        points: [
          "레이드 조건마다 요일·시간을 따로 저장",
          "리딩 가능 여부(O/X), 직업, 전투력 선택",
          "선택 내용을 '내 선택 요약'으로 미리 확인 후 캘린더에 저장",
          "저장된 스케줄 개별/전체 삭제",
        ],
      },
      {
        title: "요일별 레이드 신청 현황",
        image: aionDaySummaryImg,
        description:
          "요일마다 어떤 레이드가 몇 시에 몇 명 신청됐는지 인원이 많은 순으로 보여줍니다.",
        points: [
          "레이드 / 난이도 / 공략 방식 단위로 그룹핑",
          "참여자 직업 아이콘 표시, 펼쳐서 인원 확인",
          "출발·클리어 O/X 표시 및 디스코드 알림 연동",
        ],
      },
      {
        title: "주간 레이드 슬롯",
        image: aionCalendarImg,
        description:
          "탭으로 레이드·난이도·공략 방식을 바꾸며, 요일 × 시간대 캘린더에서 파티 구성을 확인합니다.",
        points: [
          "시간칸마다 A/B 파티로 자동 분배 (파티당 5명)",
          "리딩 가능 인원은 별도 표시",
          "주말/공휴일 낮시간 표시 여부 설정",
        ],
      },
      {
        title: "보스 난이도별 선택인원",
        image: aionMemberImg,
        description:
          "보스·난이도·공략 방식 조합별로 어떤 길드원이 신청했는지 직업·전투력과 함께 모아 보여줍니다.",
        points: [
          "직업 아이콘 + 닉네임 + 전투력 구간 칩",
          "리딩 가능 인원 뱃지로 구분",
        ],
      },
      {
        title: "업데이트 안내 공유",
        image: aionUpdateNotesImg,
        description:
          "길드원 피드백을 받아 바로 반영하고, 변경 사항은 디스코드에 업데이트 안내로 정리해 공유합니다.",
        points: [
          "수정 시각과 변경 내용을 항목별로 기록",
          "네이밍 수정, 팝업 추가, 비밀번호 기능 등 피드백 즉시 반영",
          "모바일 UI 대응 등 사용 환경에 맞춘 지속 개선",
        ],
      },
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
