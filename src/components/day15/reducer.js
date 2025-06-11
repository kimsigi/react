export const reducer = (state, action) => {
    switch(action.type) {
        case 'LOADING': return {loading: true, error: null, data: null};
        case 'SUCCESS': return {loading: false, error: null, data: action.payload};
        case 'ERROR': return {loading: false, error: action.error, data: null};
        default: return state;
    }
}