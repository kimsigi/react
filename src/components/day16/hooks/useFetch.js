import axios from "axios"
import { useEffect, useReducer } from "react";

function fetchReducer(state, action) {
    switch(action.type) {
        case 'LOADING': return {loading: true, error: null, data: null};
        case 'SUCCESS': return {loading: false, error: null, data: action.payload};
        case 'ERROR': return {loading: false, error: action.error, data: null};
        default: return state;
    }
}

export default function useFetch(url, immediate = true) {
    const [state, dispatch] = useReducer(fetchReducer, {
        loading: false,
        error: null,
        data: null,
    });

    useEffect(() => {
        if ( !immediate || !url ) return;

        (async () => {
            dispatch({type: 'LOADING'});
            try {
                dispatch({type: 'SUCCESS', payload: (await axios.get(url)).data});
            } catch( err ) {
                dispatch({type: 'ERROR', error: err});
            }
        })();
    }, [url, immediate]);

    return state;
}