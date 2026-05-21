export const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const skills = [
  {
    category: 'Language',
    items: [
      { name: 'JavaScript', mark: 'JS', color: '#f7df1e', icon: 'javascript' },
      { name: 'Java', mark: 'JV', color: '#e76f00', icon: 'java' },
      { name: 'Python', mark: 'PY', color: '#3776ab', icon: 'python' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', mark: 'H5', color: '#e34f26', icon: 'html' },
      { name: 'Next.js', mark: 'N', color: '#111827', icon: 'nextjs' },
      { name: 'React', mark: 'R', color: '#61dafb', icon: 'react' },
      { name: 'Redux Toolkit', mark: 'RT', color: '#764abc', icon: 'reduxToolkit' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Spring MVC', mark: 'SP', color: '#6db33f', icon: 'springMvc' },
      { name: 'MyBatis', mark: 'MB', color: '#b22222', icon: 'mybatis' },
      { name: 'Oracle DB', mark: 'DB', color: '#f80000', icon: 'oracleDb' },
      { name: 'JWT', mark: 'JWT', color: '#00b9f1', icon: 'jwt' },
      { name: 'Maven', mark: 'MV', color: '#c71a36', icon: 'maven' },
    ],
  },
]

export const projects = [
  {
    title: 'LocalQuest',
    summary: '지역 기반 퀘스트, QR 인증, 리워드, 사업자 관리 기능을 구현한 풀스택 웹 서비스입니다.',
    stack: [
      'React',
      'Redux Toolkit',
      'Spring MVC',
      'Java',
      'MyBatis',
      'Oracle DB',
      'JWT',
      'QR',
      'Kakao Map API',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/chobo6/LocalQuest' },
    ],
  },
  {
    title: 'Pet Lab',
    summary: '반려동물 펀딩, 커뮤니티, 장바구니, 마이페이지 흐름을 구성한 React 프론트엔드 프로젝트입니다.',
    stack: ['React', 'Bootstrap', 'JavaScript'],
    links: [
      { label: 'GitHub', href: 'https://github.com/chobo6/pet-lab' },
    ],
  },
  {
    title: 'Graduation Project',
    summary: 'PyQt5 GUI와 Arduino 시리얼 통신을 활용해 주차 공간 상태를 확인하는 데스크톱 프로그램입니다.',
    stack: ['Python', 'PyQt5', 'Arduino', 'Serial Communication', 'Qt Designer'],
    links: [
      { label: 'GitHub', href: 'https://github.com/chobo6/graduation-project' },
    ],
  },
  {
    title: 'Project Management System',
    summary: '게시판, 일정, 프로젝트, 업무, 이슈, 사용자 권한 관리를 포함한 Spring MVC 기반 업무 관리 웹 애플리케이션입니다.',
    stack: ['Java', 'Spring MVC', 'JSP', 'MyBatis', 'Oracle DB', 'Google Calendar API', 'Maven'],
    links: [
      { label: 'GitHub', href: 'https://github.com/chobo6/undefined' },
    ],
  },
]

export const experiences = [
  {
    year: '2026',
    description: '포트폴리오 제작 및 React 프로젝트 학습',
  },
  {
    year: '2025',
    description: '웹 개발 기초와 Git/GitHub 협업 흐름 학습',
  },
]
