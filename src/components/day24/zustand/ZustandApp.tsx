import { useCounterStore } from './useCounterStore';
import CounterDisplay from "../CounterDisplay.tsx";
import CounterButton from "../CounterButton.tsx";

export default function ZustandApp() {
    const count = useCounterStore(state => state.count);
    const increment = useCounterStore(state => state.increment);

    return (
        <>
            <CounterDisplay count={count} />
            <CounterButton onClick={increment} />
        </>
    );
}