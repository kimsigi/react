import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Login.tsx";
import Dashboard from "./Dashboard.tsx";
import {AuthProvider} from "./contexts/AuthContext.tsx";

export default function Day23App() {
    return (
        <>
            <h1>🗓️ React 23일차: 전역 상태 관리 - Context 고도화 </h1>
            <br />
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}