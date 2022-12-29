export const Plus = (payload) => ({
    type: "PLUS",
    payload
})

export const Minus = (payload) => ({
    type: "MINUS",
    payload
})

export const Asyncthunk = num => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: "Minustunk",
                payload: num
            })
        }, 1000);
    }
}

