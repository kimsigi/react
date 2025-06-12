import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function Login() {
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate("/dashboard");
    }

    return (
        <div>
            <h2>🔐 로그인 페이지</h2>
            <button onClick={handleLogin}>로그인</button>
        </div>
    );
}