import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <nav className="p-4 bg-gray-100 flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <hr />
            <Outlet />  {/* 자식 라우트가 이곳에 표시됨 */}
        </div>
    );
}