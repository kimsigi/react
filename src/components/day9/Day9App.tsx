import { useState } from "react";
import UserContext from "./UserContext";
import Profile from "./Profile";
import Settings from "./Settings";
import ThemeContext from "./ThemeContext";

export default function Day9App() {
    const [user, setUser] = useState({name: "Pyeong sik", age: 37});
    const [theme, setTheme] = useState('light');
    return (
        <>
            <h1>🗓️ React 9일차: Context API와 전역 상태 공유</h1>
            <br />
            <UserContext.Provider value={{user, setUser}}>
                <Profile />
                <Settings />
            </UserContext.Provider>
            <br />
            <h4>🎨 React 다크모드 예제</h4>
            <br />
            <ThemeContext.Provider value={{theme, setTheme}}>
                <div style={{
                    backgroundColor: theme === 'dark' ? '#222' : '#fff',
                    color: theme === 'dark' ? '#fff' : '#000',
                    padding: '20px',
                    borderRadius: '5px',
                    minHeight: '100vh'
                }}>
                    <h3>🌙 다크모드</h3>
                    <p>현재 테마: {theme}</p>
                    <button onClick={() => setTheme('light')}>라이트 모드</button>
                    <button onClick={() => setTheme('dark')}>다크 모드</button>
                </div>
            </ThemeContext.Provider>
        </>
    );
}