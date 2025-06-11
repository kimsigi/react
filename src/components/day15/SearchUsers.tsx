import axios from "axios";
import { useEffect, useReducer, useRef, useState } from "react";
import { reducer } from "@/components/day15/reducer.js";

export default function SearchUsers() {
    const [keyword, setKeyword] = useState("");
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        error: null,
        data: null,
    });
    const {loading, error, data} = state;
   
    // input 요소에 대한 참조를 생성합니다.
    const inputKeyword = useRef(null);

    // 컴포넌트가 마운트될 때 input에 포커스를 맞춥니다.
    useEffect(() => inputKeyword.current?.focus(), []);   

    useEffect(() => {        
        if ( !keyword.trim() ) {
            console.log("검색어를 입력해주세요.");
            inputKeyword.current?.focus();
            return;
        }

        const timer = setTimeout(() => {
            (async() => {
                dispatch({type: 'LOADING'});
                
                try 
                {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                    const filteredUserList = response.data.filter( (f) => f.name?.trim().toLowerCase().includes(keyword.trim().toLowerCase()));
                    
                    dispatch({type: 'SUCCESS', payload: filteredUserList});
                } 
                catch( err ) 
                {
                    dispatch({type: 'ERROR', error: err});
                }
            })();
        }, 500);

       return () => clearTimeout(timer);
    }, [keyword])
    
    return (
        <div>
            <h3>🔍 사용자 검색 (useReducer)</h3>
            <p>이 컴포넌트는 useReducer를 사용하여 사용자 검색 기능을 구현합니다.</p>
            <input  type="text"
                    placeholder="사용자 이름을 입력하세요"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    ref={inputKeyword}
            />

            {loading && <p>로딩 중...</p>}
            {error && <p style={{ color: "red" }}>오류 발생: {error.message}</p>}
            { data && (
                <ul>
                    {
                        data.map((user) => (
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