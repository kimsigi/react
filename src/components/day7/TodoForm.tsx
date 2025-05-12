import { useState } from "react";

export default function TodoForm() {
    const [todo, setTodo] = useState('');
    const [list, setList] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if ( todo.trim() === '' ) {
            alert('할 일을 입력하세요');
            return;
        }
        console.log(todo, list);
        setList([...list, todo]);
        setTodo('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="할 일을 입력하세요" />
                <button type="submit">추가</button>
            </form>

            <ul>
                {list.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    );
}