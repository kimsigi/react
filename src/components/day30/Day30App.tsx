export default function Day30App() {
    return (
        <>
            <h1>🗓️ React 30일차: 마무리 정리 + 포트폴리오 제작 팁 & 배포 가이드 </h1>
            <br />
            <h3>📘 1. 한 달 동안 배운 React 정리</h3>
            | 영역      | 배운 내용                                                 |
            | ------- | ----------------------------------------------------- |
            | 상태 관리   | `useState`, `useReducer`, `Context`, `Recoil/Zustand` |
            | 렌더링 흐름  | 리렌더링, memoization (`React.memo`, `useMemo`)           |
            | 비동기 처리  | `useEffect`, `fetch`, `axios`, `React Query`          |
            | 컴포넌트 구조 | Props, 리프팅, Presentational vs Container               |
            | 라우팅     | `react-router-dom`, 동적 라우팅, 보호 라우트                    |
            | 스타일링    | CSS Modules, Styled Components, Tailwind              |
            | 성능 최적화  | 코드 분할, Suspense, ErrorBoundary                        |
            | 테스트     | Jest, React Testing Library                           |
            | 폴더 구조   | 역할 기반 구조 / 도메인 기반 구조                                  |

            <br />
            <br />
            <h3>💡 2. 실전 프로젝트 아이디어</h3>
            | 주제                      | 설명                      |
            | ----------------------- | ----------------------- |
            | ✅ **투두 리스트**            | CRUD, 상태관리, 필터링 등 기초 정복 |
            | 📅 일정 관리 앱              | 날짜 조작, 상태관리, 모달 등 중급 UI |
            | 📚 도서 검색 앱              | 검색어 → API → 목록 → 상세 페이지 |
            | 🛒 쇼핑몰 (미니 이커머스)        | 라우팅, 장바구니, 로그인 보호 등 종합  |
            | 💬 채팅 앱 (with Firebase) | 실시간 데이터, 사용자 인증         |

        </>
    );
}