import CounterApp from "./context/CounterApp.tsx";
import {ReduxApp} from "./redux/ReduxApp.tsx";
import {RecoilApp} from "./recoil/RecoilApp.tsx";
import ZustandApp from "./zustand/ZustandApp.tsx";

export default function Day24App() {
    return (
        <>
            <h1>🗓️ React 24일차: 전역 상태 관리 라이브러리 비교 & 도입 시점 </h1>
            <br />
            <CounterApp />
            <br />
            <ReduxApp />
            <br />
            {/* Recoil쪽은 뭔가 잘 안됨. 소스주석*/}
            {/*<RecoilApp />*/}
            <br />
            <ZustandApp />
        </>
    );
}