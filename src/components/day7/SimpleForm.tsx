import { useState } from "react";

export default function SimpleForm() {
    const [name, setName] = useState('');
    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`이름: ${name}`);
    }
    return (
        <form onSubmit={handlerSubmit}>
            <input  type="text"
                    value={name}
                    onChange= {(e) => setName(e.target.value)}
                    placeholder="이름을 입력하세요" 
            />
            <button type="submit">제출</button>
        </form>
    );
}