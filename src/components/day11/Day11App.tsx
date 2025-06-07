import { useState } from "react";
import Parent from "./Parent";
import SlowComponent from "./SlowComponent";

export default function Day11App() {
    const [count, setCount] = useState(0);
    const [n, setN] = useState(10);

    return (
        <>
            <h1>🗓️ React 11일차: React.memo, useMemo, useCallback</h1>
            <br />
            <Parent />
            <br />
            <h2>useMemo 예제</h2>
            <button onClick={() => setCount(count + 1)}>부모카운트+1</button>
            <p>부모카운트: {count}</p>
            <button onClick={() => setN(n+1)}>n 증가</button>
            <p>n: {n}</p>

            <SlowComponent n={n} />
        </>
    );
}