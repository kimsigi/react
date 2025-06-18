import {CounterProvider, useCounter} from "./CounterContext.tsx";
import CounterDisplay from "../CounterDisplay.tsx";
import CounterButton from "../CounterButton.tsx";

const Inner = () => {
    const {count, setCount} = useCounter();
    return(
        <>
            <CounterDisplay count={count} />
            <CounterButton onClick={() => setCount((prev) => prev + 1)} />
        </>
    );
}

export default function CounterApp() {
    return(
        <>
            <h3>컨텍스트 상태관리 예제</h3>
            <br />
            <CounterProvider>
                <Inner />
            </CounterProvider>
        </>
    );
}