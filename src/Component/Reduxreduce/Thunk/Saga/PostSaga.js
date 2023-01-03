import { put, takeEvery, takeLatest, delay, all, call } from 'redux-saga/effects';
import axios from 'axios'

export function* WatchPost() {
    yield takeEvery("FETCH_REQUEST", FatchPost)
}

export function* FatchPost() {
    try {
        const url = "https://jsonplaceholder.typicode.com/posts"
        const responce = yield call(axios.get, url)

        yield put({
            type: "FETCH_SUCCESS",
            payload: responce.data
        })
    } catch (error) {
        yield put({
            type: "FETCH_FAILED",
            payload: error
        })

    }
}
