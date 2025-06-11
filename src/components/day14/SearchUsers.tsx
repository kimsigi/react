import { useEffect, useState } from "react";
import { getUsers } from "./api/user"; // 공통 API 함수 분리 예시

export default function SearchUsers() {
    const [keyword, setKeyword] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {

        if ( !keyword.trim() ) {
            setUsers([]);
            setLoading(false);
            setError("");
            return;
        }
        
        const timer = setTimeout(() => {
            (async () => 
            {
                try 
                {
                    setLoading(true);
                    const resultUserList = await getUsers();
                    const filteredUserList = resultUserList.filter((f) => f.name.trim().toLowerCase().includes(keyword.trim().toLowerCase()));
                    setUsers(filteredUserList);
                }
                catch( err )
                {
                    setError(`error message : ${err}`);
                }
                finally 
                {
                    setLoading(false);
                }
                
            })();
          
        }, 500);
        
        return () => clearTimeout(timer);
    }, [keyword]);


    return (
        <div>
            <h3>🔍 사용자 검색 (axios)</h3>
            <input  type="text"
                    placeholder="사용자 이름을 입력하세요"
                    value={keyword ?? ""}
                    onChange={(e) => setKeyword(e.target.value)}
            />
            {loading && <p>로딩중...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && 
                (
                    <ul>
                        {
                            users.map((user) => (
                                <li key={user.id}>
                                    {user.name} ({user.email})
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    );
}