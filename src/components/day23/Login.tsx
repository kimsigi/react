import {useAuth} from "./contexts/AuthContext.tsx";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        const fakeUser = {
            id: 1,
            name: '홍길동',
            email: 'hong@example.com',
        }

        login(fakeUser);
        navigate("/dashboard");
    }

    return (
        <div>
            <h2>🔐 로그인</h2>
            <button onClick={handleLogin}>로그인</button>
        </div>
    );
}