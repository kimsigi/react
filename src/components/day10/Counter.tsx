import { useReducer } from "react";

const initialState = {
    count: 0,
}

function reducer(state, action) {

    switch(action.type) {
        case 'increment': return { count: state.count + 1};
        case 'decrement': return { count: state.count - 1};
        case 'reset': return initialState;
        default: return state;
    }
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h3>카운트: {state.count}</h3>
            <button onClick={() => dispatch({type: 'increment'})}>증가</button>
            <button onClick={() => dispatch({type: 'decrement'})}>감소</button>
            <button onClick={() => dispatch({type: 'reset'})}>초기화</button>
        </div>
    );
}