import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeToggle() {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <button onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}>테마변경</button>
    );
}