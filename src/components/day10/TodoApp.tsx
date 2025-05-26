import { useReducer, useState } from "react";

export default function TodoApp() {

    const initialTodos = [];
    function reducer(state, action) {
        switch(action.type) {
            case 'add': return [...state, { id: Date.now(), text: action.text, done: false}];
            case 'toggle': return state.map((item) => item.id === action.id ? {...item, done: !item.done} : item);
            case 'remove': return state.filter((item) => item.id !== action.id);
            default: return state;
        }
    }

    const [text, setText] = useState('');
    const [todos, dispatch] = useReducer(reducer, initialTodos);
    const handleAdd = () => {
        if ( text.trim() ) {
            dispatch({type: 'add', text: text.trim()});
            setText('');
        }
    }


    return (
        <div>
            <h3>📝 할 일 목록</h3>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleAdd}>추가</button>

            <ul>
                {todos.map((todo) => (
                <li key={todo.id}>
                    <label style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                    <input
                        type="checkbox"
                        checked={todo.done}
                        onChange={() => dispatch({ type: 'toggle', id: todo.id })}
                    />
                    {todo.text}
                    </label>
                    <button onClick={() => dispatch({ type: 'remove', id: todo.id })}>삭제</button>
                </li>
                ))}
            </ul>
        </div>
    )
}