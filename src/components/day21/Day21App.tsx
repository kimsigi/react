import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserList from "./UserList.tsx";
import UserDetail from "./UserDetail.tsx";
import Home from "./Home.tsx";
import About from "./About.tsx";
import Layout from "./Layout.tsx";
import NotFound from "./NotFound.tsx";

export default function Day21App() {
    return (
        <>
            <h1>🗓️ React 21일차: 동적 라우팅, URL 파라미터, 중첩 라우팅 </h1>
            <br />
            <BrowserRouter>
                <Routes>
                    <Route path="/users" element={<UserList />} />
                    <Route path="/users/:id" element={<UserDetail />} />
                </Routes>
            </BrowserRouter>
            <br />
            <p>✅ 중첩 라우팅 (Nested Routes)</p>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="*" element={<NotFound />} />   {/* 모든 경로에 대해 NotFound 컴포넌트를 표시 */ }
                        <Route index element={<Home />} />          {/* 기본 경로(부모)에 해당하는 컴포넌트 */}
                        <Route path="about" element={<About />} />
                        
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}