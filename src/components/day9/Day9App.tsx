import { useState } from "react";
import UserContext from "./UserContext";
import Profile from "./Profile";
import Settings from "./Settings";
import ThemeContext from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
import ThemeBox from "./ThemeBox";
import { AuthContext } from "./AuthContext";
import AuthStatus from "./AuthStatus";
import AuthButtons from "./AuthButtons";

export default function Day9App() {
    const [user, setUser] = useState({name: "Pyeong sik", age: 37});
    const [theme, setTheme] = useState('light');
    const [loginUser, setLoginUser] = useState(null);
    return (
        <>
            <h1>🗓️ React 9일차: Context API와 전역 상태 공유</h1>
            <br />
            <UserContext.Provider value={{user, setUser}}>
                <Profile />
                <Settings />
            </UserContext.Provider>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <h4>🎨 React 다크모드 예제</h4>
                <p>현재 테마: {theme}</p>
                <ThemeToggle />
                <ThemeBox />
            </ThemeContext.Provider>
            <br />
            <AuthContext.Provider value={{loginUser, setLoginUser}}>
                <div>
                    <h4>🔐 React 로그인 상태 관리</h4>
                    <AuthStatus />
                    <AuthButtons />
                </div>
            </AuthContext.Provider>
        </>
    );
}