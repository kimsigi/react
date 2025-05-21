import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeBox() {
    const {theme} = useContext(ThemeContext);

    return (
        <div style={{
            backgroundColor: theme === 'dark' ? '#222' : '#fff',
            color: theme === 'dark' ? '#fff' : '#000',
            padding: '20px',
            borderRadius: '5px',
            minHeight: '5vh',
            border: '1px solid'
        }}>
        <p>이 박스는 테마에 따라 스타일이 바뀝니다.</p>            
        </div>
    );
}


