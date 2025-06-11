import {useNavigate} from "react-router-dom";

export default function UserList() {
    const navigate = useNavigate();
    const userList = [{id: 1, name: '개발자1'}, {id:2, name: '개발자2'}];
    const goDetail = (id) => navigate(`/users/${id}`);
    return (
        <ul>
            {
                userList.map((user) => (
                    <li key={user.id} onClick={(e) => goDetail(user.id)}>{user.name}</li>
                ))
            }
        </ul>

    )
}