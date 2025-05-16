import { useContext } from "react";
import UserContext from "./UserContext";

export default function Profile() {
    const { user } = useContext(UserContext);
    return (
        <div style={{border: '1px solid black', padding: '10px', margin: '10px'}}>
            <h3>👤 프로필</h3>
            <p>이름: {user.name}</p>
            <p>나이: {user.age}</p>
        </div>
    );
}