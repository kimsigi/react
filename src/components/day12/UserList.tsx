import {useEffect, useState} from "react";
import axios from "axios"; // ✅ axios 임포트

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            try {
                /*
                * axios 사용할 경우
                * status 200~299에 해당 할 경우 정상처리. 나머지 catch 블록 자동 진입.
                * 데이터 바로 돌려줌
                *
                * 다만 외부 라이브러리라는게 단점?
                * */
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);

                /* 
                 기본적인 fetch 사용할 경우 
                   - response.ok 이거 수동으로 처리 해줘야 함.(자동으로 catch 처리 안됨)
                   - response.json() 으로 데이터 돌려줘야 함.
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if ( !response.ok ) {
                    throw new Error(`네트워크 오류`);
                }
                const result = await response.json();
                setUsers(result);
                 */
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    if (loading) return <p>⏳ 로딩 중...</p>;
    if (error) return <p>❌ 에러 발생: {error}</p>;

    return (
        <div>
            <h3>👤 사용자 목록</h3>
            <ul>
                {
                    users.map((user, _) => (
                        <li key={user.id}>
                            {user.name} ({user.email})
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
