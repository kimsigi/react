import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    // useState는 상태를 관리하는 Hook입니다.
    // useState(초기값) 형태로 사용하며, 초기값을 인자로 받아 상태를 생성합니다.
    // useState는 배열을 반환하며, 첫 번째 요소는 현재 상태의 값이고, 두 번째 요소는 상태를 업데이트하는 함수입니다.
    // useState는 컴포넌트가 렌더링될 때마다 상태를 유지합니다.
    // useState는 상태가 변경될 때마다 컴포넌트를 다시 렌더링합니다.
    return (
        <div>
            <h3>현재카운트: {count}</h3>
            <button onClick={() => setCount(count + 1)}>증가</button>
            <button onClick={() => setCount(count - 1)}>감소</button>
        </div>
    );
}