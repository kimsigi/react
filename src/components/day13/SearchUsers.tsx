import axios from "axios";
import { useEffect, useState } from "react";

export default function SearchUsers() {
    const [keyword, setKeyword] = useState("");
    const [loading, setLoading] = useState(true);
    const [usres, setUsers] = useState([]);


    useEffect(() => {
        if ( !keyword || keyword.length < 2 ) {
            setUsers([]);
            setLoading(false);
            return;
        }
        setLoading(true);
        const timer = setTimeout(() => {
            (async() => {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                const responseUserList = response.data;
                setUsers(responseUserList.filter((f) => f.name.toLowerCase().includes(keyword.toLowerCase())));
                setLoading(false);                
            })();
        }, 500);
        return () => clearTimeout(timer);
    }, [keyword]);

    return (
        <div>
            <h3>🔍 사용자 검색</h3>
            <input  type="text" 
                    placeholder="사용자 이름을 입력하세요" 
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
            />

            {loading && <p>로딩중...</p>}
            {!loading && 
            (
                usres.map((user, _) => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))
            )}
        </div>
    );
}