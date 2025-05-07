import { useEffect, useState } from "react";

export default function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect: 컴포넌트가 마운트되었습니다.", "리렌더링될 때마다 실행됩니다.");
    });

    useEffect(() => {
        console.log("useEffect: 컴포넌트가 마운트되었습니다.", "마운트될 때만 실행됩니다.");
        return () => {
            console.log("useEffect: 컴포넌트가 언마운트되었습니다.", "언마운트될 때만 실행됩니다.");
        };
    }, []);

    useEffect(() => {
        console.log(`useEffect: count가 변경되었습니다. ${count}`, "count가 변경될 때마다 실행됩니다.");
    }, [count]);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}