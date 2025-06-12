import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
// ProtectedRoute 컴포넌트는 로그인 상태를 확인하고, 로그인하지 않은 경우 /login으로 리다이렉트합니다.
export default function ProtectedRoute({ children }) {
    const { isLoggedIn } = useAuth();
    if ( !isLoggedIn ) {
        return <Navigate to="/login" replace />;
    }
    return children;
}