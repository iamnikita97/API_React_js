import { all } from "redux-saga/effects";
import {
    authenticatesaga,
} from './sagas_user';
import {
    registrationsaga,
} from './saga_registration_user';


export default function* rootSaga() {
    yield all([
        authenticatesaga(),
        registrationsaga()
    ])
}
