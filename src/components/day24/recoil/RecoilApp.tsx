// RecoilApp.jsx
import CounterDisplay from "../CounterDisplay.tsx";
import CounterButton from "../CounterButton.tsx";
import { RecoilRoot, useRecoilState } from 'recoil';
import {counterState} from "./atoms";


const Inner = () => {
    const [count, setCount] = useRecoilState(counterState);
    return (
        <>
            <CounterDisplay count={1} />
            <CounterButton onClick={() => console.log('1')} />
        </>
    );
};

export const RecoilApp = () => (
    <RecoilRoot>
        <Inner />
    </RecoilRoot>
);