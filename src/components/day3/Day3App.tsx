import ClickEvent from "./ClickEvent";
import FruitList from "./FruitList";
import Greeting from "./Greeting";

export default function Day3App() {
    return (
        <>
            <h1>🗓️ React 학습 3일차: 조건부 렌더링 + 리스트 렌더링 + 이벤트 핸들링</h1>
            <Greeting isLoggedIn={false} />
            <br />
            <FruitList />
            <br />
            <ClickEvent />
        </>
    );
}