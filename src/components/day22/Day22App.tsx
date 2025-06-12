import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./Dashboard";

export default function Day22App() {
    return (
        <>
            <h1>🗓️ React 22일차: 로그인 상태 기반 보호 라우팅 (Protected Route) </h1>
            <p>&nbsp;&nbsp;- 로그인 상태에 따라 접근을 제한하는 보호 라우팅 구현</p>
            
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        {/* 로그인하지 않은 사용자가 /dashboard에 접근하면 /login으로 리다이렉트됨 */}
                        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}