import { useRef, useState } from "react";

export default function TodoEditor() {
    const [todo, setTodo] = useState('');
    const [list, setList] = useState([]);
    const inputbox = useRef<HTMLInputElement>(null);
    const handleAdd = (e) => {
        e.preventDefault();        
        if ( todo.trim() === '') {
            alert('할 일을 입력하세요');
            return;
        }

        setList(list => [...list, todo]);
        setTodo('');
        inputbox.current.focus();
    }

    const handleEdit = (index) => {
        const newTodo = prompt('수정할 내용을 입력하세요', list[index]);
        if ( newTodo?.trim() === '' ) {
            alert('수정할 내용을 입력하세요');
            return;
        }

        list[index] = newTodo;
        setList([...list]);
    }

    // 삭제
    const handleDelete = (index) => {
        const filteredList = list.filter((_, row) => row !== index);
        setList(filteredList);
    }

    return (
        <div>
            <form onSubmit={handleAdd}>
                <input type="text"
                       ref={inputbox}
                       placeholder="할 일을 입력하세요"
                       value={todo}
                       onChange={(e) => setTodo(e.target.value)}
                />
                <button type="submit">추가</button>
            </form>

            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index}>
                                    {item}
                                    <button onClick={() => handleEdit(index)}>수정</button>
                                    <button onClick={() => handleDelete(index)}>삭제</button>
                                </li>
                    })
                }
            </ul>
        </div>
    );
}
