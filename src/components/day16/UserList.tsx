import useFetch from '@/components/day16/hooks/useFetch';

export default function UserList() {
    const {loading, error, data: users}= useFetch('https://jsonplaceholder.typicode.com/users');
    return (
        <div>
            <h3>📋 사용자 목록</h3>
            <p>이곳은 사용자 목록을 표시하는 컴포넌트입니다.</p>
            {loading && <p>로딩 중...</p>}
            {error && <p>오류 발생: {error.message}</p>}
            {users && (
                <ul>
                    {
                        users.map((user) => (
                            <li key={user.id}>
                                {user.name} ({user.email})
                            </li>
                        ))
                    }
                </ul>
            )}
        </div>
    );
}