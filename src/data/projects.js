import shinhancardImg from "../assets/projects/shinhancard.png";
import ocrImg from "../assets/projects/OCR.png";
import m4aImg from "../assets/projects/m4a.png";
import nhcardImg from "../assets/projects/nhcard.png";
import aionOverviewImg from "../assets/projects/aion2/overview.jpg";
import aionLoginImg from "../assets/projects/aion2/login.jpg";
import aionHeaderImg from "../assets/projects/aion2/header.jpg";
import aionFormImg from "../assets/projects/aion2/form.jpg";
import aionDaySummaryImg from "../assets/projects/aion2/day-summary.jpg";
import aionCalendarImg from "../assets/projects/aion2/calendar.jpg";
import aionMemberImg from "../assets/projects/aion2/member.jpg";
import aionUpdateNotesImg from "../assets/projects/aion2/update-notes.png";
import aionMobileImg from "../assets/projects/aion2/mobile.jpg";
import ncDashboardImg from "../assets/projects/nc/nc-1.png";
import ncProgramImg from "../assets/projects/nc/nc-2.png";
import ncAttendanceImg from "../assets/projects/nc/nc-3.png";
import ncHospitalImg from "../assets/projects/nc/nc-4.png";
import ncResidentImg from "../assets/projects/nc/nc-5.png";
import ncWeightImg from "../assets/projects/nc/nc-6.png";

// 작성 순서(오래된 순). 화면에는 최신순으로 보여주고, 번호는 보이는 순서대로 매긴다.
const PROJECT_LIST = [
  {
    id: "shinhancard",
    title: "신한카드",
    category: "WEB PUBLISHING",
    period: "2022.04 ~ 2024.12",
    contribution: 80,
    siteUrl: "https://www.shinhancard.com/pconts/html/main.html",
    description:
      "신한카드 홈페이지 서브 · 이벤트 페이지 마크업과 CMS 기반 콘텐츠 운영 · 유지보수",
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "Figma", "Swiper"],
    image: shinhancardImg,
    color: "#0046ff",
    tasks: [
      "CMS(ICS6)로 서브 · 이벤트 페이지 콘텐츠 등록 및 운영",
      "신한카드 서비스 · 이벤트 페이지의 UI 개선 요청에 따른 마크업 작업 수행",
      "유지보수 중심 프로젝트에서 기존 마크업 구조를 분석하고, 반복되는 UI를 모듈 단위로 정리해 CSS 구조 개선",
      "디자인 변경에 따른 웹 접근성 개선 및 웹표준 준수 마크업 적용",
      "비대면 카드신청 프로세스(신분증 인증 단계 포함) UI 개선 및 퍼블리싱 수행",
      "디자이너 · 기획자 · 개발자와 협업하여 변경된 기획 · 디자인에 유연하게 대응",
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
    title: "미디어포스 얼라이언스",
    category: "WEB PUBLISHING",
    period: "2025.01 ~ 2025.03",
    contribution: 90,
    siteUrl: null,
    description: "기존 HTML 사내 홈페이지를 CSS Grid 기반 반응형 페이지로 리뉴얼",
    tags: ["HTML", "CSS", "CSS Grid", "JavaScript", "Figma"],
    image: m4aImg,
    color: "#00b894",
    tasks: [
      "기존 HTML 사내 홈페이지의 레이아웃을 CSS Grid 기반으로 다시 구성",
      "그리드 영역을 해상도별로 재배치해 PC · 태블릿 · 모바일 반응형 웹 개선",
      "리뉴얼 페이지 퍼블리싱 수행",
    ],
  },
  {
    id: "nhpay",
    title: "농협카드 · NH Pay 다국어 고도화",
    category: "VUE.JS PUBLISHING",
    period: "2025.03 ~ 2025.11",
    contribution: 85,
    siteUrl: "https://card.nonghyup.com/servlet/IpCc2021R.act",
    description: "기존 NH Pay 시스템에 다국어를 지원하기 위한 Vue 기반 퍼블리싱",
    tags: ["Vue.js", "i18n", "SCSS"],
    image: nhcardImg,
    color: "#fdcb6e",
    tasks: [
      "기존 NH Pay 화면에 다국어를 적용할 수 있도록 퍼블리싱 구조 개선",
      "Vue.js 기반 컴포넌트 환경에서 다국어 UI 구현",
      "언어마다 다른 텍스트 길이 · 문장 구조에도 레이아웃이 유지되도록 반응형 적용",
      "언어 전환 시 스타일 깨짐 · UI 흐름 이상을 찾기 위한 화면 테스트 진행",
      "다국어 작업과 함께 기존 코드 정리 및 유지보수 퍼블리싱 수행",
    ],
  },
  {
    id: "hanabank",
    title: "하나은행 뉴원큐 고도화",
    category: "REACT PUBLISHING",
    period: "2026.04 ~ 2026.09",
    contribution: 75,
    siteUrl: "https://www.kebhana.com/",
    description:
      "React.js 기반 하나은행 뉴 원큐 앱의 '하나기부' 신규 서비스 제작과 '모임통장' 서비스 개선 퍼블리싱",
    tags: ["React", "SCSS", "Figma"],
    image: null,
    imageNote: "보안 정책에 따라 화면 이미지는 공개하지 않습니다.",
    color: "#00e0c6",
    tasks: [
      "React.js 기반 기존 컴포넌트를 활용한 웹 화면 퍼블리싱",
      "React 컴포넌트 구조를 활용한 UI 구현 및 스타일 적용",
      "신규 UI 컴포넌트 1종 직접 제작 및 구현",
      "원큐 서비스 내 '하나기부 서비스' 화면 신규 제작",
      "기존 원큐 서비스 내 '모임통장 서비스' UI 개선 및 고도화",
    ],
  },
  {
    id: "s-noblecounty",
    title: "S 노블카운티 시스템 구축",
    category: "VUE.JS PUBLISHING",
    period: "2026.10 ~ 2026.12",
    contribution: 70,
    siteUrl: null,
    description:
      "Markdown 규칙 문서 기반 AI-Driven 개발 프로세스로 설계 산출물을 Vue 화면으로 전환하고 퍼블리싱",
    tags: [
      "Vue.js",
      "Claude Code",
      "Storybook",
      "AI-Driven Development",
      "Prompt Engineering",
    ],
    image: ncDashboardImg,
    color: "#b08d57",
    tasks: [
      "S사 노블카운티 웹사이트 UI 퍼블리싱 및 화면 개선 — 고객지원 · 리빙 · 건강관리 · 돌봄 · 식음 · 시설관리 등 11개 업무 영역(GNB)으로 구성된 대규모 통합 운영 시스템",
      "prompt.md · skills.md 등 Markdown 규칙 문서로 AI 작업 기준을 정의하고, 설계 → Vue 전환 → 퍼블리싱 단계로 진행하는 AI 100% 기반 개발 프로세스 참여",
      "Claude Code를 활용해 디자인 시안 · 화면 설계 산출물을 Vue.js 웹 화면과 UI 컴포넌트로 구현",
      "Storybook 기반 로컬 환경에서 화면을 작업하고, 개발 서버 기준으로 매일 싱크 및 현행화 진행",
      "AI 프롬프트와 프로젝트 Context를 활용해 UI 코드를 생성 · 수정하고, 마크업 구조 · 웹표준 준수 여부를 검수",
      "화면마다 달라지는 AI 결과물의 클래스 네이밍 · 레이아웃 패턴을 검수 단계에서 정리하고, 반복되는 이슈는 규칙 문서에 반영해 재발 방지",
    ],
    showcase: [
      {
        title: "프로그램관리 · 주간 시간표",
        image: ncProgramImg,
        description:
          "그룹 · 여가 수업과 1:1 기능회복 훈련을 탭으로 나누고, 요일 × 시간대 시간표에서 수업 현황을 관리하는 화면입니다.",
        points: [
          "분류 · 프로그램명 · 요일 · 운영상태 복합 검색 영역",
          "수업 카드에 단가 · 정원 대비 인원 · 단가 변경 / 결강 / 개강 뱃지 표시",
          "시간표 / 목록 보기 전환과 우측 수업 상세 · 월별 수업일정 패널",
        ],
      },
      {
        title: "프로그램출석관리",
        image: ncAttendanceImg,
        description:
          "선택한 날짜의 수업을 고르면 출석 현황 요약, 회차별 출석부, 카드 태그 기록을 한 화면에서 확인합니다.",
        points: [
          "출석 대상 · 출석 · 카드 태그 · 수기 체크 · 미체크 · 예외 요약 카드",
          "회차별 출석 상태(출석 · 미체크 · 결석 · 예외)를 색상 뱃지로 구분",
          "카드 리더기 태그 안내와 실시간 태그 기록 패널",
        ],
      },
      {
        title: "입원관리",
        image: ncHospitalImg,
        description:
          "입원 중인 입주자 목록과 선택한 입주자의 입원 정보를 좌우 분할 레이아웃으로 구성한 화면입니다.",
        points: [
          "입주동 · 입원상태 · 입원일자 기간 검색",
          "입원일자 · 병원명 · 진단명 · 입원/퇴원 결식 입력 폼",
          "상세 영역 전체화면 전환",
        ],
      },
      {
        title: "너싱홈 입주자정보관리",
        image: ncResidentImg,
        description:
          "입주자 목록과 상세정보 · 기본정보 · 건강정보 등 여러 탭으로 나뉜 상세 화면을 함께 보여주는 정보 관리 화면입니다.",
        points: [
          "입주실 · 성별 · 나이 · 케어등급 목록과 입원중 상태 행 강조",
          "상세정보 · 입·퇴원이력 · 가족정보 · 장기요양등급 등 탭 구성",
          "이름표 출력 · 입원등록 · 입주실 변경 등 업무 버튼 그룹",
        ],
      },
      {
        title: "체중측정등록",
        image: ncWeightImg,
        description:
          "정기측정 대상 입주자를 고르면 최근 체중 · 직전 대비 · 신장 · BMI 요약과 체중 추이 차트, 측정 이력을 보여줍니다.",
        points: [
          "요약 카드 4종과 기간별 체중 추이 라인 차트",
          "측정 / 검진 구분 범례와 직전 대비 증감 표시",
          "일자별 체중 이력 테이블",
        ],
      },
    ],
  },
  {
    id: "aion2-raid",
    title: "아이온2 길드 레이드 스케줄",
    category: "SIDE PROJECT",
    period: "2026.09 ~ 현재",
    contribution: 100,
    siteUrl: "https://raid-calendar-deng-aion-grew-region.vercel.app/",
    description:
      "아이온2 길드원들의 레이드 신청부터 파티 편성, 준비 확인, 클리어 기록까지 한 곳에서 관리하는 실시간 공유 스케줄 서비스",
    tags: ["React", "Vite", "Supabase", "Vercel", "PWA", "Playwright"],
    image: aionOverviewImg,
    color: "#7c9cff",
    tasks: [
      "기획 · 디자인 · 퍼블리싱 · 개발 · 배포까지 1인 전담, 9월 첫 배포 후 길드원 피드백을 받아 매주 개선",
      "React + Supabase(PostgreSQL RPC · Trigger · Realtime) 기반 실시간 공유 스케줄 서비스를 Vercel로 운영",
      "\"준비 확인 → 전원 준비 → 클리어\" 레이드 진행 흐름과 디스코드 웹후크 알림(pg_net, pg_cron 시작 전 자동 알림) 구현",
      "신청 순서 기반 정원 10명 + 대기열, 리딩 · 치유성 · 전투력을 고려한 A/B 파티 자동 편성",
      "모바일 하단 탭 · 단계형 신청 폼 · 뒤로 가기 처리 · PWA 홈 화면 설치 등 모바일 사용성 개선",
      "화면 외 계산 로직을 모듈로 분리하고, Playwright e2e(약 190개 검증)와 PGlite SQL 테스트(약 65개 검증)로 회귀 방지",
    ],
    showcase: [
      {
        title: "닉네임 로그인",
        image: aionLoginImg,
        description:
          "길드원별 닉네임으로 로그인합니다. 최초 로그인 시 안내받은 초기 비밀번호로 들어와 본인 비밀번호와 찾기 질문을 설정합니다.",
        points: [
          "Supabase RPC로 계정 · 비밀번호 해시 관리",
          "10번 연속으로 틀리면 5분간 잠금 처리",
          "비밀번호 찾기 질문으로 스스로 재설정, 비밀번호 저장(자동 로그인) 지원",
        ],
      },
      {
        title: "다음 레이드 · 준비 확인",
        image: aionHeaderImg,
        description:
          "다음 주간 리셋까지 남은 시간과 '내 다음 레이드'를 상단에 고정해, 접속하자마자 오늘 할 일을 확인할 수 있게 했습니다.",
        points: [
          "남은 시간 · 정원(10/10 +2) · 리딩 인원 · 배정된 파티 표시",
          "시작 1시간 전부터 준비 확인 요청 → 각자 준비 완료 → 전원 준비 시 클리어 기록",
          "오지 않는 인원을 기다리지 않는 '이 인원으로 시작'과 디스코드 재알림(최대 2회)",
        ],
      },
      {
        title: "내 레이드 신청",
        image: aionFormImg,
        layout: "side",
        description:
          "캐릭터 → 레이드 → 요일 · 시간 순서의 단계형 폼으로, 여러 시간을 빠르게 고르고 저장할 수 있게 다듬었습니다.",
        points: [
          "시간표 드래그 선택, 요일 · 시간 머리를 누르면 한 줄 전체 선택",
          "지난 시간 · 다른 캐릭터로 신청한 시간은 패턴으로 구분",
          "캐릭터 정보 변경 시 저장된 다른 신청에도 한 번에 반영",
          "신청 목록에서 시간 · 요일 · 신청 단위 삭제와 되돌리기 토스트",
        ],
      },
      {
        title: "추천 시간 · 요일별 신청 현황",
        image: aionDaySummaryImg,
        description:
          "정원이 차고 리더가 있는 '출발 가능' 시간을 먼저 추천하고, 요일별로 어떤 레이드가 몇 명인지 한눈에 보여줍니다.",
        points: [
          "추천 레이드 시간 TOP 3 — 누르면 해당 레이드 탭과 칸으로 이동",
          "현황에서 바로 '+ 나도 참여' / '+ 대기 신청'",
          "지난 요일은 자동으로 접고, '내 레이드만' 필터 제공",
        ],
      },
      {
        title: "주간 레이드 파티",
        image: aionCalendarImg,
        description:
          "레이드 · 난이도 · 공략 방식 탭을 바꾸며 요일 × 시간대 캘린더에서 자동 편성된 파티를 확인합니다.",
        points: [
          "먼저 신청한 10명이 정원, 나머지는 대기 순번으로 표시 (빠지면 대기 1번 자동 승격 + 알림)",
          "리딩 가능자 · 치유성을 양쪽에 나누고 전투력이 비슷하도록 A/B 파티 편성",
          "오늘 · 공휴일 표시, 탭마다 신청 인원 수",
        ],
      },
      {
        title: "레이드별 신청 인원",
        image: aionMemberImg,
        description:
          "레이드 · 난이도 · 공략 방식 조합별로 신청한 길드원을 직업 · 전투력과 함께 모아 보여줍니다.",
        points: [
          "직업 아이콘 + 닉네임 + 전투력 구간 칩, 리딩 가능 뱃지",
          "주 5회 제한이 있는 초월 레이드는 남은 횟수(5/5) 배지와 소진 시 신청 제한",
        ],
      },
      {
        title: "모바일 · PWA",
        image: aionMobileImg,
        description:
          "길드원 대부분이 휴대폰으로 접속해서, 모바일 전용 화면 구성을 따로 설계하고 홈 화면에 앱처럼 설치할 수 있게 했습니다.",
        points: [
          "신청 / 이번 주 / 파티 / 인원 하단 탭과 하루 단위 요일 탭",
          "뒤로 가기 시 팝업 닫기 · 이전 탭 이동 (앱을 벗어나지 않도록 history 처리)",
          "터치 영역 40px 이상 · 입력 글자 16px 이상(iOS 확대 방지) · 가로 스크롤 없음을 e2e로 검증",
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

export const PROJECTS = [...PROJECT_LIST]
  .reverse()
  .map((project, index) => ({
    ...project,
    order: String(index + 1).padStart(2, "0"),
  }));

export const PROJECT_FILTERS = [
  "All",
  ...Array.from(new Set(PROJECTS.map((p) => p.category))),
];

export function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id);
}
