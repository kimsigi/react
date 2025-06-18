import axios from "axios";
import {useMutation, useQuery} from "@tanstack/react-query";

const fetchUsers = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.data;
};

const createUser = async (newUser) => {
    const res = await axios.post('/api/users', newUser);
    return res.data;
};
/*
const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
        alert('등록 완료!');
    },
});
 */
export default function UserList() {
    const {data, isLoading, error} = useQuery({
       queryKey: ['users'],
       queryFn: fetchUsers,
    });

    if (isLoading) return <p>⏳ 로딩 중...</p>;
    if (error) return <p>❌ 에러 발생: {error.message}</p>;

    return (
        <ul>
            {
                data.map((user) => (
                   <li key={user.id}>
                       {user.name} ({user.email})
                   </li>
                ))
            }
        </ul>
    );
}