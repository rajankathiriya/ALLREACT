const initialState = { data: [], error: "", isLoading: false }

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case first:
            return { ...state, ...payload }

        default:
            return state
    }
}
