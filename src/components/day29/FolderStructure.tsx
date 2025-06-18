export default function FolderStructure() {
    const structure = `
        src/
        ├── components/        # 재사용 가능한 UI 컴포넌트
        ├── pages/             # 라우트 단위 페이지
        ├── hooks/             # 커스텀 훅
        ├── stores/            # 전역 상태 관리 (Context, Recoil, Zustand 등)
        ├── api/               # axios 인스턴스, API 함수들
        ├── assets/            # 이미지, 아이콘, 폰트 등
        ├── styles/            # 전역 스타일, Tailwind, CSS 모듈 등
        ├── routes/            # 라우팅 설정 (optional)
        ├── utils/             # 공통 유틸 함수
        ├── layouts/           # 페이지 공통 레이아웃
        ├── App.jsx
        └── main.jsx`;

    const domainStructure = `
      /src
      /features
        /user
          ├── components/
          ├── pages/
          ├── api.js
          ├── store.js`;

    return (
        <pre>
            {structure}
            <br /><br />
            <h3>📦 참고: 하나의 도메인 기준으로 구조화하는 방식도 있음</h3>
            {domainStructure}
        </pre>

    );
}