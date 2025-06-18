import {useEffect, useState} from "react";
import axios from "axios";

const fetchUser = async() => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.data;
}

export default function SomeComponent () {
    const [users, setUsers] = useState([]);
    (async () => {
        const list = await fetchUser();
        setUsers(list);
    })();
    return (.
        <ul>
            {
                users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))
            }
        </ul>
    );
}