export const portfolioData = [
  {
    title: "Heart Movie",
    setting: "React",
    thumbnail: "/img/heart_movie.jpg",
    info: "TMDB API를 활용한 영화 목록 조회 및 좋아요 표시",
    link: "https://de2eew04ftl2t.cloudfront.net/",
    github: "https://github.com/yeoyeong/heart_movies",
    year: "2023년 12월",
    language: "Typescript",
    skills: [
      "React-query",
      "Zustand",
      "styled-components",
      "firebase",
      "TMDB API",
      "vite",
    ],
    deployment: ["AWS S3", "AWS CloudFront", "GithubAction"],
    development: [
      {
        title: "영화 목록 무한 스크롤링 구현",
        subMenu: [
          "IntersectionObserver()와 useInfiniteQuery()를 사용",
          "로딩 컴포넌트와 Skeleton Animation UI를 구현하여 비동기 데이터 처리",
        ],
      },
      {
        title: "Firebase 소셜로그인 구현(구글)",
        subMenu: [],
      },
      {
        title:
          "로그인 유저 영화 좋아요 버튼을 통해 '나의 영화(즐겨찾기)' 기능 활성화",
        subMenu: [],
      },
      {
        title:
          "Styled-Components Theme Provider + 로컬스토리지를 사용하여 다크모드, 라이트모드 구현",
        subMenu: [],
      },
    ],
    result: [
      "공공 API에 대한 이해, 사용",
      "IntersectionObserver에 대한 이해와 경험",
      "Skeleton UI를 구현하면서 더 나은 사용자 경험에 대한 고민",
      "firebase[Database, Authentication] 사용 경험",
      "React-Query useInfiniteQuery()의 option 사용 경험",
      "Masonry layout Custom Hook 제작",
    ],
  },
  {
    title: "TODO LIST",
    setting: "Next14",
    thumbnail: "/img/todo_list.jpg",
    info: "Next14를 활용하여 Todo list 구현하기",
    link: "https://next14-todo-list.vercel.app/dashboard",
    github: "https://github.com/yeoyeong/next14-todo_list",
    year: "2023년 11월",
    language: "Typescript",
    skills: ["Tailwindcss", "PostgreSQL", "Next-auth", "bcrypt"],
    deployment: ["Vercel"],
    development: [
      {
        title: "로그인 / 회원가입",
        subMenu: [],
      },
      {
        title: "투두 리스트 CRUD",
        subMenu: [],
      },
      {
        title: "Drag&Drop",
        subMenu: [],
      },
    ],
    result: [
      "Vercel을 사용한 next 배포",
      "React Components 에서 서버 API 직접 호출",
      "next14의 라이프 사이클에 대한 경험",
      "Drag&Drop 으로 TODO 상태 업데이트 구현",
    ],
  },
  {
    title: "Brandism",
    setting: "React",
    thumbnail: "/img/brandism.png",
    info: "마케팅을 위한 포트폴리오 게시 사이트",
    link: "https://brandism.kr/",
    github: "",
    year: "2023년 8월",
    language: "Typescript",
    skills: [
      "React",
      "Zustand",
      "React-query",
      "styled-components",
      "kakao-map-api",
    ],
    deployment: ["AWS S3", "cloud-front", "Route53"],
    development: [
      {
        title: "메인 페이지 원페이지 애니메이션 구현",
        subMenu: [],
      },
      {
        title: "페이지네이션 구현",
        subMenu: [],
      },
      {
        title: "웹 이메일 발송 구현",
        subMenu: [],
      },
    ],
    result: ["터치 & 스크롤 이벤트에 대한 이해"],
  },
  {
    title: "키워드 랭크",
    setting: "Next13",
    thumbnail: "/img/kwlank.png",
    info: "사용자의 블로그 포스팅 글의 노출 순위를 보여주는 사이트",
    link: "https://kwlank.com/",
    github: "",
    year: "2023년 7월",
    framework: "Next13",
    language: "Typescript",
    skills: ["Zustand", "Xlsx", "styled-components"],
    deployment: ["Gabia Hosting"],
    development: [
      {
        title: "엑셀 템플릿 다운로드 기능 구현",
        subMenu: [],
      },
      {
        title: "엑셀 업로드 후 데이터 파싱 구현",
        subMenu: [],
      },
    ],
    result: ["xlsx 라이브러리를 사용하여 엑셀 데이터 조작 경험"],
  },
  {
    title: "순위 체크 사이트",
    setting: "Next13",
    thumbnail: "/img/rankCheck.png",
    info: "회사 마케팅 팀에서 관리하는 블로그 포스팅 글의 노출 순위를 자동으로 추적하고 관리 할 수 있는 웹 사이트",
    link: "https://yeoyeong.tistory.com/1",
    github: "",
    year: "2023년 6월",
    language: "Typescript",
    skills: ["React-Query", "Zustand", "Xlsx"],
    deployment: ["Github Action", "AWS S3", "CodeDeploy", "EC2"],
    development: [
      {
        title: "엑셀 템플릿 다운로드 기능 구현",
        subMenu: [],
      },
      {
        title: "엑셀 업로드 후 데이터 파싱 구현",
        subMenu: [],
      },
      {
        title: "오전/오후 자동으로 크롤링 후 순위 데이터 업데이트",
        subMenu: [],
      },
      {
        title: "수동으로 순위 데이터 업데이트",
        subMenu: [],
      },
      {
        title: "데이터 검색 기능 구현",
        subMenu: [],
      },
      {
        title: "데이터 등록일순, 오름차순, 내림차순, 발행일순 필터 구현",
        subMenu: [],
      },
      {
        title: "페이지네이션 구현",
        subMenu: [],
      },
    ],
    result: [
      "xlsx 라이브러리를 사용하여 엑셀 데이터 조작 경험",
      "페이지네이션 직접 구현 경험",
      "Pending 상태일 때 로딩 창 애니메이션 구현",
    ],
  },
  {
    title: "WEat",
    setting: "React",
    thumbnail: "/img/weat.jpeg",
    info: "위잇(WEat)은 지인들과 공유하는 맛집 히스토리 플랫폼입니다.",
    link: "https://d4w4vu6lq1f7q.cloudfront.net",
    github: "https://github.com/yeoyeong/Weat",
    year: "2022년",
    language: "Javascript",
    skills: [
      "React",
      "Redux-toolkit",
      "React-query",
      "Styled-components",
      "Kakao-map-api",
    ],
    deployment: ["s3", "cloud-front", "Github Action", "Route53"],
    development: [
      {
        title: "엑셀 템플릿 다운로드 기능 구현",
        subMenu: [],
      },
      {
        title: "엑셀 업로드 후 데이터 파싱 구현",
        subMenu: [],
      },
      {
        title: "오전/오후 자동으로 크롤링 후 순위 데이터 업데이트",
        subMenu: [],
      },
      {
        title: "수동으로 순위 데이터 업데이트",
        subMenu: [],
      },
      {
        title: "데이터 검색 기능 구현",
        subMenu: [],
      },
      {
        title: "데이터 등록일순, 오름차순, 내림차순, 발행일순 필터 구현",
        subMenu: [],
      },
      {
        title: "페이지네이션 구현",
        subMenu: [],
      },
    ],
    result: [
      "프론트엔드 리더로 디자이너와의 소통 등 전반적인 FE 업무 총괄 경험",
      "Drag & Drop 구현",
      "kakao-map api를 깊게 사용한 경험",
    ],
  },
];
