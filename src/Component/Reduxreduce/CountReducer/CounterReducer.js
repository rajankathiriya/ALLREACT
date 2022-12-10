export default (state = 0, { type, payload }) => {
    switch (type) {

        case "Increment":
            return state + 1;
        case "Decrement":
            return state - 1;
        case "Multiplication":
            return state * 2;
        case "Division":
            return state / 2;

        default:
            return state
    }
}

