import { put, takeEvery, takeLatest, delay, all } from 'redux-saga/effects';
import { decWatcher, divWatcher, incWatcher, multWatcher } from './CounterSaga';
import { FatchPost } from './PostSaga';


export default function* rootSaga() {
    yield all([incWatcher(), decWatcher(), multWatcher(), divWatcher(), FatchPost()]);
}