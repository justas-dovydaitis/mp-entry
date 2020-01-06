const initialState = {
    queries: []
};
function rootReducer(state = initialState, action) {

    if (action.type === "ADD_QUERY") {
        return {
            ...state, queries: [...state.queries, action.payload]
        }
    }
    return state;
};
export default rootReducer;