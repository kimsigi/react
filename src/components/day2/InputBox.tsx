import { useState } from "react";

export default function InputBox() {
    const [text, setText] = useState('');
    return (
        <div>
            <input placeholder="아무거나 입력하세요."
                   value={text}
                   onChange={(e) => setText(e.target.value)}
            />
            <p>입력한 값: {text}</p>
        </div>
    );
}