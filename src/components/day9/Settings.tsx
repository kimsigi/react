import { useContext } from "react";
import UserContext from "./UserContext";

export default function Settings() {
    const { user, setUser } = useContext(UserContext);
    const setNewName = (e) => setUser((prev) => ({...prev, name: e.target.value}));
    
    return (
        <div style={{border: '1px solid black', padding: '10px', margin: '10px'}}>
            <h3>⚙️ 사용자 설정</h3>
            <input type="text" placeholder="이름" value={user.name} onChange={(e) => setNewName(e)} />
            <br />
            <input type="number" placeholder="나이" value={user.age} onChange={(e) => setUser((prev) => ({...prev, age: e.target.value}))} />

        </div>
    );
}