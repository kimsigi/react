import {useAuth} from "./contexts/AuthContext.tsx";
import {useNavigate} from "react-router-dom";

export default function() {
    const {user, logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    }

    return (
        <div>
            <h2>📋 대시보드</h2>
            <p>안녕하세요, {user?.name}님!</p>
            <p>이메일: {user?.email}</p>
            <button onClick={handleLogout}>로그아웃</button>
        </div>
    );
}