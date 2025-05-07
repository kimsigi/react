import { useEffect, useRef, useState } from "react";

export default function RenderTracker() {

    const [count, setCount] = useState(0);

    const useRefCount = useRef(0);
    let noRefCount = 1;
    useEffect(() => {
        useRefCount.current += 1;
        noRefCount += 2;
        console.log(`NoRefCount: ${noRefCount}`);
    });

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>클릭</button>
            <p>useRefCount: {useRefCount.current}</p>
            <p>count: {count}</p>
            <p>noRefCount: {noRefCount}</p>
        </div>
    );
}