import type React from "react";

type GreetingProps = {
    isLoggedIn: boolean
};

export default function Greeting({isLoggedIn}: GreetingProps): React.JSX.Element {
    return (
        <div>
            {isLoggedIn ? <h3>✅ 로그인 상태입니다</h3> : <h3>🚫 로그인이 필요합니다</h3>}
        </div>
    );
}