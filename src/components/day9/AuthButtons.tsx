import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthButtons() {
    const {loginUser, setLoginUser} = useContext(AuthContext);

    const handleLogin = () => {
        const name = prompt("이름을 입력하세요");
        if ( name?.trim() ) {
            setLoginUser({name});
        }
    }

    const handleLogout = () => {
        setLoginUser(null);
    }

    return (
        <div style={{ marginTop: '10px' }}>
            {
                loginUser === null ? 
                    <button onClick={handleLogin}>로그인</button>
                    :
                    <button onClick={handleLogout}>로그아웃</button>
            }
        </div>
    );
}