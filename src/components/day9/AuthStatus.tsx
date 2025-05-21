import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthStatus() {
    const {loginUser, setLoginUser} = useContext(AuthContext);
    
    if ( loginUser === null ) {
        return <p>🚫 로그인되지 않았습니다.</p>;
    }
    
    return (
    <p>✅ 환영합니다, <strong>{loginUser.name}</strong>님!</p>
  );
}