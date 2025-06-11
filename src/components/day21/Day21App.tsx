import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserList from "./UserList.tsx";
import UserDetail from "./UserDetail.tsx";

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
        </>
    );
}