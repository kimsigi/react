import {useEffect, useState} from "react";
import axios from "axios";
import UserList from "./UserList.tsx";

export default function Container() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        (async() => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
            setLoading(false);
        })();
    }, []);

    return <UserList records={users} loading={loading} />
}