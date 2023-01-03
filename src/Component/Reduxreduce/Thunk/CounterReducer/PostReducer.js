const initialState = { data: [], error: "", isLoading: false };

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case "FETCH_REQUEST":
            return { ...state, isLoading: true }
        case "FETCH_SUCCESS":
            return { ...state, isLoading: false, data: payload }
        case "FETCH_FAILED":
            return { ...state, isLoading: false, error: payload }

        default:
            return state
    }
}
