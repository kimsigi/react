import MultiForm from "./MultiForm";
import SimpleForm from "./SimpleForm";
import TodoForm from "./TodoForm";

export default function Day7App() {
    return (
        <>
            <h1>🗓️ React 학습 7일차: 폼 상태 관리 & 객체 상태 다루기</h1>
            <br />
            <h2>✅ 1. 기본적인 폼 상태 관리</h2>
            <SimpleForm />
            <br />
            <h2>✅ 2. 여러 input을 객체로 관리하기</h2>
            <MultiForm />
            <br />
            <h2>✅ 3. 동적으로 input 추가 & 리스트 저장</h2>
            <TodoForm />
        </>
    )
}