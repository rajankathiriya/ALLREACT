const initialState = {}

export default (state = 0, { type, payload }) => {
    switch (type) {

        case "PLUS":
            return state + 1

        case "MINUS":
            return state - 1

        case "Minustunk":
            return state - payload
        default:
            return state
    }
}

