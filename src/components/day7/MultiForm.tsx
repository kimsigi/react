import { useState } from "react";

export default function MultiForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
    });

    const handlerChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`이름: ${form.name}, 이메일: ${form.email}`);
    };

    return (
        <form onSubmit={handlerSubmit}>
            <input type="text" name="name" value={form.name} onChange={handlerChange}  placeholder="이름" />
            <input type="text" name="email" value={form.email} onChange={handlerChange} placeholder="이메일" />  
            <button type="submit">제출</button>
        </form>
    );
}