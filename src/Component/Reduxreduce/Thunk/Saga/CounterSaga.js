import { put, takeEvery, takeLatest, delay, all } from 'redux-saga/effects';

export function* incWorker() {
    yield delay(1000);
    yield put({ type: 'PLUS' });
}
export function* decWorker() {
    yield delay(1000);
    yield put({ type: 'MINUS' });
}
export function* multWorker() {
    yield delay(1000);
    yield put({ type: 'MULTI' });
}
export function* divWorker() {
    yield delay(1000);
    yield put({ type: 'DIV' });
}

export function* incWatcher() {
    yield takeEvery('Increment', incWorker);
}
export function* decWatcher() {
    yield takeEvery('Decrement', decWorker);
}
export function* multWatcher() {
    yield takeEvery('Multiplication', multWorker);
}
export function* divWatcher() {
    yield takeEvery('Division', divWorker);
}

