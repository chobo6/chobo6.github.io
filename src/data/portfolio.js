export const navigationItems = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Skills', page: 'skills' },
  { label: 'Projects', page: 'projects' },
  { label: 'Contact', page: 'contact' },
]

export const skills = [
  {
    category: 'Language',
    items: [
      { name: 'JavaScript', mark: 'JS', color: '#f7df1e', icon: 'javascript' },
      { name: 'TypeScript', mark: 'TS', color: '#3178c6', icon: 'typescript' },
      { name: 'Java', mark: 'JV', color: '#e76f00', icon: 'java' },
      { name: 'Python', mark: 'PY', color: '#3776ab', icon: 'python' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', mark: 'H5', color: '#e34f26', icon: 'html' },
      { name: 'React', mark: 'R', color: '#61dafb', icon: 'react' },
      { name: 'Next.js', mark: 'N', color: '#111827', icon: 'nextjs' },
      { name: 'Redux Toolkit', mark: 'RT', color: '#764abc', icon: 'reduxToolkit' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Spring MVC', mark: 'SP', color: '#6db33f', icon: 'springMvc' },
      { name: 'Express', mark: 'EX', color: '#0a0a0a', icon: 'express' },
      { name: 'Socket.io', mark: 'SIO', color: '#010101', icon: 'socketIo' },
      { name: 'MyBatis', mark: 'MB', color: '#b22222', icon: 'mybatis' },
      { name: 'JWT', mark: 'JWT', color: '#00b9f1', icon: 'jwt' },
      { name: 'Maven', mark: 'MV', color: '#c71a36', icon: 'maven' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'Oracle DB', mark: 'DB', color: '#f80000', icon: 'oracleDb' },
      { name: 'PostgreSQL', mark: 'PG', color: '#4169e1', icon: 'postgresql' },
    ],
  },
  {
    category: 'Infra',
    items: [
      { name: 'Docker', mark: 'DK', color: '#2496ed', icon: 'docker' },
      { name: 'Kubernetes', mark: 'K8S', color: '#326ce5', icon: 'kubernetes' },
      { name: 'AWS', mark: 'AWS', color: '#ff9900', icon: 'aws' },
    ],
  },
]

// 상세 항목(period·role·techDecisions·features·troubleshooting·retrospective)은
// 아직 작성 전입니다. 값을 채우면 ProjectModal에 그대로 반영됩니다.
export const projects = [
  {
    title: 'LocalQuest',
    summary:
      '지역 기반 퀘스트, QR 인증, 리워드와 사업자 관리 기능을 구현한 웹 서비스입니다.',
    image: null,
    period: '',
    role: '',
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
    techDecisions: [],
    features: [],
    troubleshooting: [],
    retrospective: '',
    links: [{ label: 'GitHub', href: 'https://github.com/chobo6/LocalQuest' }],
  },
  {
    title: 'Omok',
    summary:
      'Socket.io 기반 실시간 온라인 오목 게임으로, 렌주룰 금수 판정과 ELO 랭킹전, AI 대전을 구현했습니다.',
    image: null,
    period: '',
    role: '',
    stack: [
      'React',
      'Socket.io',
      'Express',
      'PostgreSQL',
      'Google OAuth',
      'JWT',
      'Docker',
      'Kubernetes',
    ],
    techDecisions: [],
    features: [],
    troubleshooting: [],
    retrospective: '',
    links: [{ label: 'GitHub', href: 'https://github.com/chobo6/omok' }],
  },
  {
    title: 'Songpyeon',
    summary:
      '마피아42의 인기 미니게임을 Colyseus로 이식한 실시간 멀티플레이어 웹 게임입니다.',
    image: null,
    period: '',
    role: '',
    stack: [
      'React',
      'TypeScript',
      'Colyseus',
      'Express',
      'WebSocket',
      'SQLite',
      'Google OAuth',
      'JWT',
      'Vitest',
      'Docker',
      'AWS EC2',
    ],
    techDecisions: [],
    features: [],
    troubleshooting: [],
    retrospective: '',
    links: [{ label: 'GitHub', href: 'https://github.com/chobo6/songpyeon' }],
  },
  {
    title: 'Graduation Project',
    summary:
      'PyQt5 GUI와 Arduino 시리얼 통신을 사용해 주차 공간 상태를 확인하는 데스크톱 프로그램입니다.',
    image: null,
    period: '',
    role: '',
    stack: ['Python', 'PyQt5', 'Arduino', 'Serial Communication', 'Qt Designer'],
    techDecisions: [],
    features: [],
    troubleshooting: [],
    retrospective: '',
    links: [{ label: 'GitHub', href: 'https://github.com/chobo6/graduation-project' }],
  },
  {
    title: 'Project Management System',
    summary:
      '게시판, 일정, 프로젝트, 업무, 이슈, 사용자 권한 관리를 포함한 Spring MVC 기반 업무 관리 웹 애플리케이션입니다.',
    image: null,
    period: '',
    role: '',
    stack: ['Java', 'Spring MVC', 'JSP', 'MyBatis', 'Oracle DB', 'Google Calendar API', 'Maven'],
    techDecisions: [],
    features: [],
    troubleshooting: [],
    retrospective: '',
    links: [{ label: 'GitHub', href: 'https://github.com/chobo6/undefined' }],
  },
]

export const education = [
  {
    period: '2019.03 - 2023.02',
    school: '나사렛대학교 IT융합학부',
    description:
      'C, Java 기반 프로그래밍 기초와 자료구조, 알고리즘을 배우고 운영체제, 컴퓨터네트워크, 데이터베이스, 객체지향프로그래밍 등 컴퓨터공학 전반의 커리큘럼을 이수했습니다.',
  },
  {
    period: '2025.10 - 2026.04',
    school: '휴먼교육센터 - 자바활용 데이터 플랫폼 구축 풀스택 개발자 과정',
    description:
      'Java와 Spring MVC로 백엔드 API를 설계하고 MyBatis, Oracle DB로 데이터를 연동했습니다. React와 Redux Toolkit으로 프론트엔드를 구현하고 JWT 인증을 적용해 풀스택 프로젝트를 완성했습니다.',
  },
  {
    period: '2026.05 - 2026.07',
    school: '휴먼교육센터 - 심층 데이터 분석을 통한 서비스 솔루션 개발자 과정',
    description:
      'Python을 활용한 데이터 수집, 전처리, 통계 분석을 학습하고, 머신러닝 모델링과 데이터 시각화를 통해 데이터 기반 서비스 솔루션을 설계했습니다.',
  },
]

export const certificates = [
  {
    name: '정보처리기사',
    date: '2022.11',
  },
  {
    name: 'SQLD',
    date: '2026.03',
  },
]
