import {lazy, Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
export default function Day27App() {
    return (
        <>
            <h1>🗓️ React 27일차: 코드 분할 (Code Splitting)과 Lazy Loading </h1>
            <br />
            <Suspense fallback={<p>로딩중...</p>}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    );
}