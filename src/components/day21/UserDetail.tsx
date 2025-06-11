import {useParams} from "react-router-dom";

export default function UserDetail() {
    const {id} = useParams();
    return <h2>🧑 사용자 상세 페이지 - ID: {id}</h2>;
}