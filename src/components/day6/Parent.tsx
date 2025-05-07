import { useState } from "react";
import Children from "./Children";

export default function Parents() {
    const [count, setCount] = useState('');
    const handlerEvent = () => {
        alert("###### 부모 이벤트 실행!");
    }
    return (
        <div>
            <Children text={count} evt={setCount} hevent={handlerEvent} />
            <p>값: {count}</p>
        </div>
    );
}