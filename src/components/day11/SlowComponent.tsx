import { useMemo } from "react";

const heavyTask = (n) => {
    console.log('⚙️ heavyTask 실행!');
    let total = 0;
    for ( let i = 0; i < 1_000; i++ ) {
        total += i % n;
    }
    return total;
}

export default function SlowComponent({n}) {
    const result = useMemo( () => heavyTask(n), [n]);

    return (
        <div>
            <h4>계산결과: {result}</h4>
        </div>
    )
}