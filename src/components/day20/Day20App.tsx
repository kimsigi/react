import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./Home.tsx";
import About from "./About.tsx";

export default function Day20App() {
    return (
        <>
            <h1>🗓️ React 20일차: React Router 기초</h1>
            <br />
            <BrowserRouter>
                <nav className="p-4 bg-gray-100 flex gap-4">
                    <Link to="/">🏠 홈</Link>
                    <Link to="/about">ℹ️ 소개</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}