import { all, call } from 'redux-saga/effects';
import UserSaga from '../domains/saga'

export default function* rootSaga() {
    yield all([
        call(UserSaga)
    ]);
}
