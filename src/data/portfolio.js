import omokMatchImage from '../assets/images/omok-match.png'
import songpyeonGameplayImage from '../assets/images/songpyeon-gameplay.png'
import weathernowDashboardImage from '../assets/images/weathernow-dashboard.png'
import graduationProjectImage from '../assets/images/graduation-project.png'
import localQuestVideo from '../assets/videos/localquest-demo.mp4'
import pmsVideo from '../assets/videos/pms-demo.mp4'

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
      { name: 'Colyseus', mark: 'CY', color: '#b4202a' },
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
      { name: 'SQLite', mark: 'SQ', color: '#003b57', icon: 'sqlite' },
      { name: 'Redis', mark: 'RD', color: '#ff4438', icon: 'redis' },
      { name: 'Elasticsearch', mark: 'ES', color: '#005571', icon: 'elasticsearch' },
    ],
  },
  {
    category: 'Infra',
    items: [
      { name: 'Docker', mark: 'DK', color: '#2496ed', icon: 'docker' },
      { name: 'Kubernetes', mark: 'K8S', color: '#326ce5', icon: 'kubernetes' },
      { name: 'Kafka', mark: 'KF', color: '#231f20', icon: 'kafka' },
      { name: 'AWS', mark: 'AWS', color: '#ff9900', icon: 'aws' },
    ],
  },
]

// 상세 항목(role·techDecisions·features·troubleshooting·retrospective)은
// 아직 작성 전입니다. 값을 채우면 ProjectModal에 그대로 반영됩니다.
export const projects = [
  {
    title: 'Songpyeon',
    summary:
      '마피아42의 인기 미니게임을 Colyseus로 이식한 실시간 멀티플레이어 웹 게임입니다.',
    image: songpyeonGameplayImage,
    role: '개인 프로젝트 — 게임 규칙 설계부터 서버·클라이언트, 상점·소셜 기능, 배포까지 단독 개발',
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
    techDecisions: [
      {
        tech: 'Colyseus (서버 권위형 상태 동기화)',
        reason:
          '4명이 팀 공유 자원(절구)과 하나의 버튼 시퀀스를 4초 안에 함께 처리해야 하는 게임이라, 두 팀원의 화면이 클라이언트마다 따로 판정되면 미묘하게 어긋나는 동기화 버그가 생기기 쉽습니다. 시퀀스 생성·커서 위치·타이머·절구 개수를 서버가 전부 소유하고 클라이언트는 입력만 보내는 구조로 설계했고, 상태 diff 브로드캐스트와 재접속 처리를 프레임워크가 맡아줘 이 부분을 직접 구현하지 않아도 됐습니다.',
      },
      {
        tech: 'AWS EC2 단일 인스턴스 + Docker + Caddy',
        reason:
          '앞서 만든 오목 프로젝트에서는 학습 목적으로 Kubernetes(kind)를 직접 구성했지만, 이 프로젝트는 친구들과의 캐주얼 테스트가 목적이라 k8s는 과한 인프라라고 판단했습니다. EC2 한 대에 Docker 컨테이너와 Caddy(자동 HTTPS)만으로 단순하게 배포해, 서비스 목적과 인프라 복잡도를 맞췄습니다.',
      },
      {
        tech: 'SQLite (better-sqlite3)',
        reason:
          '단일 EC2 인스턴스로 배포하는 구조라 별도 DB 서버를 두지 않고 파일 기반 SQLite로 충분하다고 판단했습니다. 배포 단순성을 우선한 결정입니다.',
      },
    ],
    features: [
      '팀전 실시간 협동 리듬 게임 (1~4팀, 팀당 2명이 돼지/토끼 역할로 절대 순서 기반 버튼 시퀀스 처리)',
      '팀이 탈락해도 매치는 끝나지 않고 생존 팀이 계속 진행되는 무한 라운드 구조',
      'Google OAuth 로그인, 친구 추가/초대/1:1 채팅, 대기실 및 진행 중인 매치 관전',
      '개인 기록(판수·최고 라운드)과 랭킹 TOP 10, 게임머니 적립 및 닉네임 상점(색상/이펙트/파티클)',
      '아이템전 모드 — 시퀀스에 등장하는 보너스 토큰을 먹으면 개인 인벤토리에 아이템 5종 중 하나 획득',
      '관리자 페이지 — 실시간 접속 모니터링, 유저 밴, 계정별 IP 이력, 부정 입력(매크로) 감지, 공지 배너',
      'AWS EC2 + Docker + Caddy(자동 HTTPS) 배포',
    ],
    troubleshooting: [
      {
        problem:
          '서버 패키지를 CommonJS로 두었더니 Colyseus가 CJS·ESM 두 경로로 이중 로드되면서 matchMaker 싱글턴이 두 벌 생겨, 분명히 등록한 방인데 "room name not defined" 에러가 발생했습니다.',
        solution:
          'server의 package.json에 "type": "module"을 명시해 ESM 경로 하나로만 로드되게 고쳤습니다. 이후 재발 방지를 위해 이 요구사항을 프로젝트 문서에 남겨뒀습니다.',
      },
      {
        problem:
          '재접속(reconnection) 로직에서 Colyseus는 onAuth를 다시 호출하지 않고 기존 인증 정보를 그대로 재사용한다는 걸 놓쳐서, 재접속 유예시간(20초) 안에 계정이 밴되더라도 유예시간 안에 재접속하면 그대로 다시 들어와버리는 취약점이 있었습니다.',
        solution:
          '재접속이 성공한 직후 최신 밴 상태를 다시 조회해 밴된 계정이면 즉시 연결을 끊도록 수정했습니다. 이 과정에서 연결 종료 처리 순서를 잘못 두면 onLeave가 재귀 호출되며 새 재접속 유예를 무한히 다시 부여하는 문제도 함께 발견해 처리 순서를 바로잡았습니다.',
      },
      {
        problem:
          '.dockerignore는 .gitignore와 달리 하위 폴더까지 자동으로 재귀 매칭되지 않는다는 걸 몰라서, .env만 등록해뒀더니 client/.env.local 같은 하위 경로의 로컬 전용 값(LAN IP 등)이 그대로 프로덕션 이미지에 포함되는 사고가 있었습니다.',
        solution:
          '**/.env, **/.env.* 형태로 재귀 매칭되도록 패턴을 수정했습니다. 이후 배포 전마다 빌드된 이미지 안 번들을 직접 grep으로 확인하는 절차를 추가해 같은 사고를 예방하고 있습니다.',
      },
    ],
    retrospective:
      '이 프로젝트는 참고 영상만으로는 규칙이 명확하지 않아, 화면 일부를 "보상 팝업"으로 잘못 해석했다가 나중에 실제로는 매 턴마다 뜨는 핵심 플레이 화면이었다는 걸 뒤늦게 확인하는 등 요구사항 자체를 여러 번 고쳐가며 확정했습니다. 처음부터 완벽하게 설계하기보다 확인 가능한 만큼 문서화하고, 틀린 부분은 발견할 때마다 정정하며 진행하는 방식이 실제로는 더 안전하다는 걸 체감했습니다. 이후 친구/상점/관리자 기능을 계속 붙이면서는 Colyseus의 재접속·인증 재사용처럼 프레임워크 내부 동작을 정확히 모르면 보안 구멍으로 이어질 수 있는 지점들을 직접 부딪혀가며 배웠습니다. 다음에는 이런 재접속/세션 관련 가정들을 기능 추가 전에 먼저 점검하는 체크리스트를 만들어두고 싶습니다.',
    links: [{ label: 'GitHub', href: 'https://github.com/chobo6/songpyeon' }],
  },
  {
    title: 'LocalQuest',
    summary:
      '지역 기반 퀘스트, QR 인증, 리워드와 사업자 관리 기능을 구현한 웹 서비스입니다.',
    image: null,
    video: localQuestVideo,
    role: '팀 프로젝트 (5인) — 관리자/사업자 페이지, 로그인·마이페이지, QR 인증, 푸시 알림 담당',
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
    techDecisions: [
      {
        tech: 'QR 인증을 자동 매칭형 + 직접 인증형 두 방식으로 분리',
        reason:
          '매장에 비치된 QR을 스캔하는 경우는 "사용자+장소" 기준으로 진행 중인 퀘스트를 자동으로 찾아 반영하는 게 편하지만, 특정 화면에서 장소 하나만 정확히 인증해야 할 때는 자동 매칭이 오히려 디버깅을 어렵게 만듭니다. 두 흐름을 별도 API로 나눠, 상황에 맞는 방식을 쓰도록 설계했습니다.',
      },
      {
        tech: '사업자 문의 → 매장 등록을 상태값으로 연결',
        reason:
          '사업자 문의(PENDING)와 실제 매장 등록을 같은 테이블에 두지 않고, 관리자가 문의를 승인하면 매장으로 등록되면서 문의 상태가 ANSWERED로 갱신되도록 연결했습니다. 문의와 매장 데이터를 분리하면서도 승인 흐름을 추적할 수 있게 한 결정입니다.',
      },
      {
        tech: '푸시 알림 발송을 스케줄러로 분리',
        reason:
          '사용자 요청에 즉시 응답해야 하는 일반 API 흐름과 달리, 알림 발송은 정해진 시점(마감 임박 등)에 별도로 실행돼야 해서 컨트롤러 흐름과 분리된 스케줄러 컴포넌트로 구현했습니다.',
      },
    ],
    features: [
      'QR 스캔 기반 퀘스트 인증 (매장 자동 매칭형 + 특정 장소 직접 인증형)',
      '지역 기반 퀘스트 등록/수락/진행, 완료 시 보상·배지 지급',
      '사업자 매장 등록 문의 → 승인 → 매장 관리 전환 플로우, 사업자 전용 페이지',
      '관리자 공지사항/문의 관리 (JSP 기반 관리자 화면)',
      '자체 로그인 + Google·Naver·Kakao 소셜 로그인, 마이페이지, 회원탈퇴',
      'Web Push 알림 구독/발송 (스케줄러 기반)',
      'Kakao Map API 연동 위치 표시',
    ],
    troubleshooting: [
      {
        problem:
          '회원가입/로그인 관련 예외 메시지가 실제 서비스에서 "?��? ?�용 중인 ?�이?�입?�다" 같은 깨진 문자로 표시됐습니다. 코드는 정상 동작하는데 화면에 노출되는 한글 문자열만 깨져 나오는 상황이었습니다.',
        solution:
          '원인은 로직 문제가 아니라, 해당 Java 소스 파일 자체가 잘못된 인코딩으로 저장되어 있던 것이었습니다(팀원 간 에디터 인코딩 설정 차이로 추정). 파일을 UTF-8로 다시 저장해 모든 한글 예외 메시지를 정상화했습니다. 이후로는 코드가 논리적으로 맞는지뿐 아니라 실제로 어떻게 저장·배포되는지도 함께 확인해야 한다는 걸 배웠습니다.',
      },
      {
        problem:
          '관리자 공지사항 페이지(`/admin/notice`)가 404를 반환했습니다. 원인을 보니 프론트에서 비즈니스(사업자) 공지사항과 관리자 공지사항을 잘못 같은 흐름으로 연결해둔 상태였습니다.',
        solution:
          '프론트의 잘못된 연결 작업을 원복하고, 관리자 공지사항은 백엔드 AdminController + JSP 기준으로 목록/등록/수정/삭제 라우트를 다시 구성했습니다. 서로 다른 두 기능(사업자 공지 vs 관리자 공지)을 섣불리 하나의 흐름으로 합치면 안 된다는 걸 확인한 사례였습니다.',
      },
    ],
    retrospective:
      '이 프로젝트에서 처음으로 여러 명이 기능 브랜치(ft/business, ft/adminpage, ft/reward 등)로 나눠 작업하고 develop에 병합하는 협업 흐름을 경험했습니다. 인코딩 문제처럼 각자의 로컬 환경 차이가 실제 서비스에 그대로 노출될 수 있다는 걸 겪으면서, 코드 리뷰나 병합 시 논리적인 정합성만이 아니라 실제 파일/환경 단위의 차이도 신경 써야 한다는 걸 배웠습니다. 이후 개인 프로젝트에서는 이런 환경 문제를 혼자 전부 책임져야 했는데, 이 프로젝트에서 익힌 브랜치 분리와 기능 단위 작업 습관이 큰 도움이 됐습니다.',
    links: [{ label: 'GitHub', href: 'https://github.com/chobo6/LocalQuest' }],
  },
  {
    title: 'WeatherNow',
    summary:
      '전국 시/군/구 실시간 기온과 기상특보를 한 화면에서 비교하는 날씨 대시보드입니다. Kafka로 수집 이벤트를 분리해 Redis(현재 상태)와 Elasticsearch(시계열·특보 이력)에 독립적으로 반영합니다.',
    image: weathernowDashboardImage,
    role: '개인 프로젝트 — 데이터 수집기, Kafka/Redis/Elasticsearch 파이프라인, API 서버, 프론트엔드 전 과정 단독 개발',
    stack: ['React', 'TypeScript', 'Express', 'Kafka', 'Redis', 'Elasticsearch', 'SQLite', 'Docker'],
    techDecisions: [
      {
        tech: 'Kafka로 수집기·컨슈머 분리',
        reason:
          '기상청 API에서 데이터를 가져오는 지점을 수집기 하나로 모으고, Kafka가 그 이벤트를 Redis 컨슈머와 Elasticsearch 컨슈머에 각자 독립적으로 전달하도록 설계했습니다. 컨슈머 하나가 느려지거나 죽어도 다른 컨슈머는 영향받지 않게 하는 게 이 프로젝트에 Kafka를 도입한 핵심 이유였습니다 — 컨슈머가 하나뿐이었다면 굳이 Kafka 없이 함수 호출로도 충분했을 거라고 판단했습니다.',
      },
      {
        tech: 'Redis(현재 상태) + Elasticsearch(시계열·검색) 역할 분리',
        reason:
          '현재 기온·랭킹 조회는 응답 속도가 중요해 Redis Sorted Set으로 처리하고, 역대 최고/최저 기온 같은 시계열 집계와 특보 이력의 한국어 풀텍스트 검색은 Elasticsearch가 담당하도록 나눴습니다. 하나의 저장소로 두 요구사항을 억지로 만족시키기보다, 목적에 맞는 저장소를 각각 두는 쪽을 선택했습니다.',
      },
      {
        tech: '특보 데이터를 구조화 토픽 + 자유텍스트 토픽으로 분리',
        reason:
          '처음에는 구조화된 특보 API 하나만 쓰면 될 거라 생각했는데, 이 API는 지역별 발효 현황만 줄 뿐 실제 통보문 설명 문장은 주지 않아 한국어 풀텍스트 검색이 의미가 없었습니다. 통보문조회 API를 추가로 붙이고 별도 토픽·인덱스로 분리해, 구조화 필터링과 풀텍스트 검색을 각각 잘하는 저장소로 나눴습니다.',
      },
    ],
    features: [
      '전국 시/군/구 실시간 기온을 지도/리스트로 표시 (10분 주기 자동 수집)',
      '현재 기온 최고/최저 지역 Top N 랭킹',
      '현재 발효 중인 기상특보(폭염·한파 등) 표시',
      '지역별 역대 최고/최저 기온 조회 (Elasticsearch aggregation)',
      '기상특보 발령 이력 키워드 검색 (한국어 형태소 분석기 nori 기반 풀텍스트 검색)',
      '수집기 → Kafka → Redis/Elasticsearch 독립 컨슈머로 이어지는 실시간 파이프라인',
      'docker-compose 한 번으로 Kafka·Redis·Elasticsearch·백엔드 3종·프론트엔드 전체 기동',
    ],
    troubleshooting: [
      {
        problem:
          '실제 사용자가 "지금 천안 36도에 폭염경보가 떴는데 대시보드엔 26도로 나온다"고 알려줬습니다. 확인해보니 API 조회 시각이 9시간 전 값에 멈춰 있었습니다.',
        solution:
          '배포 컨테이너의 시스템 타임존이 UTC였는데, 발표시각 계산 로직이 Date의 로컬 getter를 그대로 쓰고 있었던 게 원인이었습니다. 개발 PC는 항상 KST라 로컬 테스트로는 드러나지 않았습니다. 시스템 타임존에 의존하지 않도록 KST 오프셋을 더한 뒤 UTC getter로 읽는 방식으로 바꾸고, 테스트도 TZ=UTC로 강제 실행해 컨테이너 환경을 재현하도록 고쳤습니다.',
      },
      {
        problem:
          '기상청이 이미 해제한 특보(예: 호우주의보)가 대시보드에는 계속 발효 중으로 표시되는 문제가 있었습니다.',
        solution:
          '두 가지 원인이 겹쳐 있었습니다. 같은 발표 묶음에 특보 종류가 다른 레코드가 여러 건 들어올 때 중복 제거 키에 특보 종류가 빠져 있어 두 번째 레코드를 건너뛰었고, API가 항상 시간순으로 데이터를 준다고 가정했는데 실제로는 해제 레코드가 발표 레코드보다 먼저 오면서 반영 순서가 뒤집혔습니다. 중복 제거 키에 특보 종류를 추가하고 발행 전에 발표시각순으로 정렬하도록 고친 뒤, Kafka 토픽을 직접 읽어 순서와 최종 상태까지 확인했습니다.',
      },
      {
        problem:
          '여러 컨테이너가 같은 SQLite 파일을 열 때 간헐적으로 "unable to open database file" 에러가 나며 수집기가 죽었습니다. 재시도 로직을 추가해 해결됐다고 생각했는데, 몇 시간 뒤 다시 보니 10분마다 계속 실패하고 있었습니다.',
        solution:
          'API 서버가 시작 시 연결을 한 번 열어 계속 붙들고 있는 구조 자체가 문제였습니다. 재시도 횟수를 아무리 늘려도 몇 시간째 열려있는 연결과는 겹치는 시간이 사라지지 않았습니다. API 서버도 수집기처럼 요청마다 짧게 열었다 닫도록 구조를 바꾸고 나서야 실제로 해결됐습니다.',
      },
    ],
    retrospective:
      'Kafka·Redis·Elasticsearch를 전부 처음 써보면서 진행한 학습 목적 프로젝트였습니다. 개념을 이해하는 것과 여러 프로세스가 얽힌 상태에서 실제로 정합성을 지키는 것은 다른 문제라는 걸 계속 체감했습니다. 특히 컨테이너 타임존 때문에 9시간 전 데이터를 조용히 보여주고 있던 버그나, 특보 해제 순서가 꼬여 다시 활성 상태로 되돌아가던 버그처럼 에러 없이 조용히 틀린 값만 쌓이는 문제가 가장 찾기 어렵고 위험하다는 걸 배웠습니다. 이후로는 "에러가 안 나니 정상"이라고 판단하지 않고, 실제 값을 직접 대조해 검증하는 습관이 생겼습니다.',
    links: [{ label: 'GitHub', href: 'https://github.com/chobo6/weathernow' }],
  },
  {
    title: 'Omok',
    summary:
      'Socket.io 기반 실시간 온라인 오목 게임으로, 렌주룰 금수 판정과 ELO 랭킹전, AI 대전을 구현했습니다.',
    image: omokMatchImage,
    role: '개인 프로젝트 — 게임 로직·서버·AI 엔진·배포 전 과정 단독 개발',
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
    techDecisions: [
      {
        tech: 'Socket.io',
        reason:
          '네이티브 WebSocket 대신 선택. 자동 재연결과 방(Room) 추상화가 내장돼 있어 온라인 대전의 입장/퇴장·매칭 로직을 직접 구현하지 않아도 됐습니다.',
      },
      {
        tech: 'PostgreSQL은 레이팅·기보에만 사용',
        reason:
          '진행 중인 보드·턴 같은 게임 상태는 서버 메모리로 충분하지만, 랭킹전 레이팅과 기보는 서버가 재시작돼도 없어지면 안 되는 데이터라 PostgreSQL로 분리했습니다. 데이터마다 영속성 요구가 다르다는 기준으로 저장 방식을 나눈 결정입니다.',
      },
      {
        tech: 'Web Worker에서 AI 실행',
        reason:
          '반복심화 탐색이 CPU를 많이 쓰는 연산이라 메인 스레드에서 돌리면 대국 중 채팅 입력 등 다른 UI가 멈춥니다. Web Worker로 분리해 서버 부하 없이도 화면이 막히지 않게 했습니다.',
      },
    ],
    features: [
      '렌주룰 기반 실시간 1:1 온라인 대전 (공개방 목록 + 진행 중인 방 관전)',
      '렌주 금수(33/44/장목) 판정과 거짓금수 처리, 금수 위치 실시간 표시',
      'ELO 레이팅 자동 매칭 랭킹전 (K=32, PostgreSQL에 레이팅·기보 영구 저장)',
      'Negamax + Alpha-Beta + 반복심화 + Transposition Table + VCF 강제승리 탐색 AI, 228개 항목 오프닝북',
      'Google OAuth 로그인 + 게스트 모드 (랭킹전만 로그인 필수)',
      '실시간 채팅, 턴 타이머, 항복/재경기',
      'Docker·Kubernetes(kind)로 로컬 클러스터 배포 실습',
    ],
    troubleshooting: [
      {
        problem:
          'AI가 실제 대국에서 매 수 반사적으로 방어만 반복해 한 수 앞도 못 내다봤습니다. 벤치마크(자체 개발한 Yixin 대국 도구)로 원인을 추적해보니, 강제 방어 자리를 찾으면 깊이 탐색 자체를 생략하고 즉시 그 수를 반환하는 분기가 있었고, 실전 패배 국면 하나를 추적해보니 둔 수의 70%가 이 분기였습니다.',
        solution:
          '방어 자리를 즉시 반환하지 않고 "최우선 후보"로만 고정한 뒤, 실제 선택은 반복심화 탐색이 몇 수 앞을 보고 결정하도록 바꿨습니다. 문제를 재현한 국면으로 수정 전/후 탐색 시간을 비교해 실제로 전체 시간 예산을 쓰기 시작한 것을 확인했습니다.',
      },
      {
        problem:
          '탐색 깊이를 늘리는 개선을 넣은 뒤 오히려 AI가 약해졌다는 사용자 피드백을 받았습니다 ("공격 기회가 있어도 방어부터 한다", "수읽기가 이상하다").',
        solution:
          '평가 함수가 같은 위협을 돌 개수만큼 중복 계산하는 버그를 발견했습니다(열린삼 하나를 점수 3배로 부풀림). 각 5칸 윈도우를 정확히 한 번만 세는 방식으로 평가 함수를 다시 작성하고, 이전 버전과 12판 자가대국으로 비교해 10승 2패로 개선을 확인한 뒤 반영했습니다.',
      },
      {
        problem:
          'Killer Move/History Heuristic, PVS(Principal Variation Search)를 도입하면 이론적으로 탐색이 빨라져야 했지만, 실제로 개선되는지 검증이 필요했습니다.',
        solution:
          '노드 방문 수 비교만으로는 부족하다고 판단해 실제 대국(자가대국)으로 재검증했고, PVS는 0승 8패, Killer/History는 1승 9패로 오히려 승률이 떨어지는 것을 확인해 코드에서 되돌렸습니다. "이론적으로 맞다"와 "이 엔진에서 실제로 이득이다"는 다른 문제라는 걸 확인하고, 이후 모든 AI 개선은 자가대국·벤치마크로 검증한 뒤에만 채택하는 원칙을 세웠습니다.',
      },
    ],
    retrospective:
      '가장 크게 배운 건 "더 정교해 보이는" 개선이 실제로 더 강해진다는 뜻은 아니라는 점이었습니다. Killer Move나 PVS처럼 이론적으로는 정석인 기법도 이 엔진에서는 오히려 승률을 깎아먹었고, 반대로 반사적 방어 분기를 없애는 것처럼 단순한 구조 수정이 실질적인 개선으로 이어지기도 했습니다. 그 이후로는 감으로 판단하지 않고 자가대국·벤치마크 수치로 채택 여부를 결정하는 습관이 생겼습니다. 다음에는 서버 상태를 아예 메모리 대신 Redis 기반으로 설계해 다중 서버 확장까지 고려해보고 싶습니다.',
    links: [{ label: 'GitHub', href: 'https://github.com/chobo6/omok' }],
  },
  {
    title: 'Project Management System',
    summary:
      '게시판, 일정, 프로젝트, 업무, 이슈, 사용자 권한 관리를 포함한 Spring MVC 기반 업무 관리 웹 애플리케이션입니다.',
    image: null,
    video: pmsVideo,
    role: '팀 프로젝트 (5인) — Google Calendar 연동 기능 담당',
    stack: ['Java', 'Spring MVC', 'JSP', 'MyBatis', 'Oracle DB', 'Google Calendar API', 'Maven'],
    techDecisions: [
      {
        tech: 'eTag 비교 기반 변경 감지',
        reason:
          '매 동기화마다 Google에서 가져온 일정 전부를 조건 없이 다시 저장하면 변경 없는 일정까지 매번 DB에 다시 쓰게 됩니다. CalendarEvent에 eTag 필드를 추가하고 기존 값과 비교해 달라질 때만 upsert하도록 구현해, 실제로 변경된 일정만 갱신되게 했습니다.',
      },
      {
        tech: '동기화 시점의 ID 목록 비교로 삭제 정리',
        reason:
          'Google Calendar API는 일정이 삭제됐는지를 직접 알려주지 않습니다. 매 동기화마다 이번에 조회된 이벤트 ID 목록을 모아두고, 그 목록에 없는 기존 DB 데이터를 한 번에 정리하는 방식으로 삭제 동기화를 구현했습니다.',
      },
      {
        tech: '동기화 로직을 @Transactional로 묶음',
        reason:
          '여러 일정을 순회하며 upsert·삭제를 이어서 처리하는 도중 하나라도 실패하면 일부만 반영된 상태가 남을 수 있어, 전체 동기화 로직을 하나의 트랜잭션으로 묶어 원자성을 보장했습니다.',
      },
    ],
    features: [
      '게시판/댓글/첨부파일, 부서·사용자 권한(Role) 관리',
      '프로젝트/업무(Task)/이슈 관리, 업무 상태 변경 이력 추적',
      'Google Calendar 연동 — 업무 등록 시 구글 일정 자동 등록, eTag 기반 변경분만 동기화, 삭제분 정리',
      '대시보드, 사용자 알림 기능',
      '로그인 및 부서/역할 기반 권한 관리',
    ],
    troubleshooting: [
      {
        problem:
          '초기 버전은 동기화할 때마다 Google에서 가져온 일정을 조건 없이 전부 다시 저장해, 실제로는 아무것도 바뀌지 않은 일정까지 매번 DB에 다시 쓰고 있었습니다.',
        solution:
          'CalendarEvent에 Google이 제공하는 eTag 값을 저장해두고, 동기화 시 새로 받아온 eTag와 기존 값을 비교해 같으면 건너뛰도록 수정했습니다. 실제로 변경된 일정에 대해서만 DB 쓰기가 일어나도록 바꿨습니다.',
      },
      {
        problem:
          'Google Calendar에서 일정을 삭제해도 우리 쪽 DB에는 계속 남아있었습니다. Google Calendar API가 "삭제됨" 여부를 별도로 알려주지 않기 때문이었습니다.',
        solution:
          '매 동기화마다 이번에 조회된 이벤트 ID 목록을 수집해두고, DB에는 있지만 이번 목록에는 없는 데이터를 한 번에 삭제하는 로직(deleteRemovedEvents)을 추가해 삭제 동기화까지 처리되도록 했습니다.',
      },
    ],
    retrospective:
      '이 프로젝트에서 외부 API(Google Calendar)와 우리 DB 상태를 맞추는 동기화 로직을 처음 다뤄봤습니다. 처음에는 받아온 데이터를 그대로 저장하기만 하면 될 거라 생각했는데, 실제로는 무엇이 바뀌었고 무엇이 삭제됐는지를 직접 판단하는 로직이 핵심이라는 걸 구현하면서 깨달았습니다. eTag 비교와 목록 기반 삭제 정리를 추가해가는 과정에서, 외부 시스템과의 동기화는 "가져오기"보다 "차이를 판단하는 로직"에 더 공을 들여야 한다는 걸 배웠습니다.',
    links: [{ label: 'GitHub', href: 'https://github.com/chobo6/undefined' }],
  },
  {
    title: 'Graduation Project',
    summary:
      'PyQt5 GUI와 Arduino 시리얼 통신을 사용해 주차 공간 상태를 확인하는 데스크톱 프로그램입니다.',
    image: graduationProjectImage,
    role: '개인 프로젝트 (졸업작품) — GUI, 시리얼 통신 처리, 아두이노 펌웨어까지 단독 개발',
    stack: ['Python', 'PyQt5', 'Arduino', 'Serial Communication', 'Qt Designer'],
    techDecisions: [
      {
        tech: '여러 대의 아두이노 보드를 여러 COM 포트로 동시 연결',
        reason:
          '초음파 센서 하나당 인식할 수 있는 슬롯 수가 보드당 3개로 제한적이라, 일반 10칸+장애인 2칸 총 12개 슬롯을 감당하려면 아두이노 보드 여러 대를 나눠 연결해야 했습니다. 각 보드가 서로 다른 COM 포트로 데이터를 보내도록 구성했습니다.',
      },
      {
        tech: '시리얼 읽기를 QThread로 분리',
        reason:
          '시리얼 포트를 계속 읽으면서 동시에 PyQt GUI가 멈추지 않아야 해서, 시리얼 읽기를 메인 스레드가 아닌 별도 QThread로 분리하고 pyqtSignal로 GUI 스레드에 안전하게 값을 전달하도록 설계했습니다.',
      },
    ],
    features: [
      '초음파 센서(HC-SR04)로 일반 10칸·장애인 2칸, 총 12개 주차 슬롯의 실시간 점유 여부 감지',
      'PyQt5 GUI로 슬롯별 점유/공석 상태를 실시간 색상으로 표시, 만차 시 경고 표시',
      '여러 아두이노 보드 → 여러 시리얼 포트로 동시 수신 및 슬롯 ON/OFF 이벤트 파싱',
      'Qt Designer(.ui)로 화면 레이아웃 분리 관리',
      '하드웨어 미연결 시 목업 데이터로 자동 전환되는 데모 모드',
    ],
    troubleshooting: [
      {
        problem:
          '처음에는 프로그램 시작 시점에 4개의 COM 포트에 곧바로 연결을 시도하도록 하드코딩해뒀습니다. 발표·시연 환경에서 아두이노가 연결되어 있지 않거나 포트 번호가 하나라도 다르면, pyserial이 예외를 던지며 프로그램 자체가 실행되지 않았습니다.',
        solution:
          '포트 연결을 함수로 분리하고 포트 하나씩 개별적으로 예외 처리하도록 고쳐, 특정 포트 연결에 실패해도 나머지 포트는 그대로 동작하게 했습니다. 또한 연결된 포트가 하나도 없으면 정해진 목업 이벤트를 흘려보내는 대체 경로를 추가해, 하드웨어가 없는 환경에서도 프로그램이 항상 실행 가능한 상태를 유지하도록 만들었습니다.',
      },
    ],
    retrospective:
      '학교 발표 환경에서는 매번 하드웨어가 정상적으로 연결된다는 보장이 없다는 걸 이 프로젝트에서 체감했습니다. 초기 버전은 시리얼 포트 연결을 프로그램 시작 시점에 하드코딩해둬서, 포트 하나만 안 잡혀도 프로그램 전체가 실행되지 않는 문제가 있었습니다. 이후 포트 연결을 예외 처리로 감싸고 하드웨어가 없을 때는 목업 데이터로 자동 전환되도록 고치면서, 실제 서비스든 발표용 데모든 "항상 실행 가능한 상태"를 만드는 게 왜 중요한지 배웠습니다.',
    links: [{ label: 'GitHub', href: 'https://github.com/chobo6/graduation-project' }],
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
