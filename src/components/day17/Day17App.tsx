import SimpleForm from "./SimpleForm.tsx";
import MultiForm from "./MultiForm.tsx";

export default function Day17App() {
    return (
        <>
            <h1>🗓️ React 17일차: 폼 입력 관리 (useState, onChange, submit)</h1>
            <p>📥 input, textarea, select 등 폼 입력 요소들을 🧠 상태로 관리하고,
                <br />
                ✅ 유효성 검사나 전송 처리까지 흐름을 배워볼 거야.
            </p>
            <SimpleForm />
            <br />
            <MultiForm />
        </>
    );
}