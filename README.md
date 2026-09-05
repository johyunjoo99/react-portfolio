# React Portfolio

웹 퍼블리셔 조현주의 개인 포트폴리오 웹사이트입니다.
웹 에이전시에서의 퍼블리싱 경험을 바탕으로 React를 활용해 직접 설계하고 구현하며, 구조적인 UI 구성과 유지보수성을 고려한 웹사이트 제작을 목표로 합니다.


## Tech Stack

### Development
- HTML5
- SCSS
- JavaScript
- React
- Vite

### Tools
- Figma
- Git
- GitHub
- Cursor


## Development Log

### 2026.08.31
** 프로젝트 환경 구성 **
- Vite 기반 React 프로젝트 생성
- SCSS 설치 및 기본 파일 구성
- `src` / `public` 폴더 구조 구성
- 공통 이미지 및 favicon 연결
- Open Graph 대표 이미지 설정
- `index.html` title 및 meta 정보 설정
- 480px 이하 모바일 viewport 대응

### 2026.09.01
** Header 구현 **
- 컴포넌트 구현
- 레이아웃 및 네비게이션 구성

** Hero 영역 초기 구조 구성 **
- 컴포넌트 기본 구조 구성
- SVG 컴포넌트 연결
- 스크롤 인터랙션을 위한 초기 구조 구성

### 2026.09.02
** Hero 영역 구현 **
- 영역 레이아웃 및 스타일 구현
- SVG 기반 타이포그래피 적용
- `useRef`와 `requestAnimationFrame`을 활용한 스크롤 인터랙션 구현
- CSS Custom Properties를 활용한 인터랙션 값 제어
- 반응형 환경을 고려한 SVG 크기 및 여백 계산

** About 영역 구현 **
- 컴포넌트 기본 구조 구성
- 영역 레이아웃 및 스타일 구현

### 2026.09.03
** About 영역 카운터 인터랙션 구현 **
- 숫자 데이터 기반 카운터 구조 구현
- `AboutNumber` 컴포넌트 분리
- 숫자 자리별 롤링 인터랙션 구현
- AOS를 활용한 인터랙션 실행 시점 제어

** Project 영역 초기 구조 구성 **
- 컴포넌트 기본 구조 구성
- 프로젝트 아이템 기본 마크업 구성
- 프로젝트 정보 및 이미지 영역 구성
- 프로젝트 기술 스택 및 링크 영역 구성

### 2026.09.04
** Project 영역 구현 **
- 대표 프로젝트 데이터 및 목록 구조 구성
- 프로젝트 정보, 기술 스택, 외부 링크 데이터화
- 프로젝트 목록 동적 렌더링
- `useState`와 `scroll` 이벤트를 활용한 활성 프로젝트 상태 관리
- 스크롤 위치에 따른 프로젝트 활성 상태 및 이전 프로젝트 UI 제어
- 활성 프로젝트에 따른 `is-prev`, `is-active` 클래스 동적 적용
- `ProjectMore` 컴포넌트 분리 및 전체 프로젝트 연결

### 2026.09.05
** Contact 영역 구현 **
- Contact 컴포넌트 기본 구조 구성
- 영역 레이아웃 및 콘텐츠 스타일 구현

** Footer 컴포넌트 구현 **
- Footer 컴포넌트 기본 구조 구성
- 영역 레이아웃 및 콘텐츠 스타일 구현

** Nav 컴포넌트 분리 **
- Header 내부 Nav 영역 컴포넌트 분리
- 전체 메뉴에서 재사용할 수 있도록 공통 컴포넌트화

** Floating Menu 구현 **
- Floating 영역 및 Top 버튼 구현
- 스크롤 위치에 따른 Top 버튼 노출 처리
- `#wrap` 기준으로 Floating 영역 적용 범위 설정