import {useState} from "react";

export default function SimpleForm() {
    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`입력된 이름: ${name}`);
    }
    return (
      <div>
          <form onSubmit={handleSubmit}>
                <h3>👤 이름 입력</h3>
                <input    type = "text"
                        placeholder="이름을 입력하세요."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">제출</button>
          </form>
      </div>
    );
}