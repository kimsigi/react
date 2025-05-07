import { useRef } from "react";

export default function FocusInput() {
    const inputRef = useRef<HTMLInputElement>(null);
    const handlerFocus = () => {
        inputRef.current?.focus();
    }
    return (
        <div>
            <input ref={inputRef}
                   placeholder="입력하세요."
            />
            <button onClick={handlerFocus}>포커스!</button>
        </div>
    );
}