export const Plus = (payload) => ({
    type: "PLUS",
    payload
})

export const Minus = (payload) => ({
    type: "MINUS",
    payload
})
export const Multi = (payload) => ({
    type: "MULTI",
    payload
})
export const Div = (payload) => ({
    type: "DIV",
    payload
})

export const getUserListStarted = () => ({
    type: "Started"
})

export const getUserListSuccess = (payload) => ({
    type: 'USER_SUCCESS',
    payload
})

export const getUserListError = (payload) => ({
    type: "USER_FAIL",
    payload
})
export const getCommentListStarted = () => ({
    type: "Comment_Started"
})

export const getCommentListSuccess = (payload) => ({
    type: 'Comment_SUCCESS',
    payload
})

export const getCommentListError = (payload) => ({
    type: "Comment_FAIL",
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

export const Userasync = (page = 1) => async dispatch => {
    dispatch(getUserListStarted())
    try {
        const responce = await fetch("https://reqres.in/api/users?page=$%7Bpage%7D")
        const data = await responce.json()
        dispatch(getUserListSuccess(data))
    } catch (error) {
        dispatch(getUserListError(error.message))
    }
}
export const Commentasync = (page = 1) => async dispatch => {
    dispatch(getCommentListStarted())
    try {
        const responce = await fetch("https://jsonplaceholder.typicode.com/comments")
        const data = await responce.json()
        dispatch(getCommentListSuccess(data))
    } catch (error) {
        dispatch(getCommentListError(error.message))
    }
}

