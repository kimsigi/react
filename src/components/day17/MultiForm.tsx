import {useRef, useState} from "react";

export default function MultiForm() {
    const [form, setForm] = useState({
       name: '',
       email: '',
    });

    const nameRef = useRef(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm((prev) => ({...prev, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email) {
            alert('모든 항목을 입력해주세요!');
            setForm({ name: '', email: '' }); // 초기화
            nameRef.current?.focus();
            return;
        }

        console.log(`이름: ${form.name}, 이메일: ${form.email}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                       name="name"
                       ref={nameRef}
                       placeholder="이름을 입력하세요."
                       value={form.name}
                       onChange={handleChange}
                />
                <input type="text"
                       name="email"
                       placeholder="이메일을 입력하세요."
                       value={form.email}
                       onChange={handleChange}
                />
                <button type="submit">가입</button>
            </form>
        </div>
    );
}