import UserCard1 from "./UserCard1.tsx";
import UserCard2 from "./UserCard2.tsx";
import UserCard3 from "./UserCard3.tsx";

export default function Day19App() {
    return (
        <>
            <h1>🗓️ React 19일차: 컴포넌트 스타일링 방법</h1>
            <br />
            <h4>🎨 1. CSS Modules</h4>
            <p> - .module.css 파일을 만들어서, 컴포넌트별로 고립된 클래스를 사용하는 방식</p>
            <UserCard1 />
            <br />
            <h4>💅 2. Styled Components (CSS-in-JS)</h4>
            <p> - 스타일을 JS 안에서 선언하고 컴포넌트처럼 사용할 수 있는 방식</p>
            <UserCard2 />
            <br />
            <h4>🌀 3. Tailwind CSS (유틸리티 클래스 기반)</h4>
            <p> - 미리 정의된 클래스들을 조합해서 스타일을 만드는 방식</p>
            <UserCard3 />
        </>
    );
}