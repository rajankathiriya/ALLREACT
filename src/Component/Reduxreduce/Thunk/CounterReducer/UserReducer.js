const initialState = { data: [], error: "", isLoading: false };

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case "Started":
            return { ...state, isLoading: true };
        case "USER_SUCCESS":
            return { ...state, isLoading: false, data: payload };
        case "USER_FAIL":
            return { ...state, isLoading: false, error: payload };

        default:
            return state
    }
}
