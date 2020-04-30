import { take, call, put } from "redux-saga/effects";
import {
    REGISTRATION_START,
    REGISTRATION_ERROR,
    REGISTRATION_SUCCESS
} from "../actions/action_registration";
import {
    registration
} from '../api/api_registration';

export function* registrationsaga() {
    while (true) {
        const { first_name, last_name, country_code, user_mobile, email, password } = yield take(REGISTRATION_START)
        const response = yield call(registration, first_name, last_name, country_code, user_mobile, email, password);

        /* Response Status */
        if (response.status) {

            /*  Without File Of Directly Submit From  */
            // const response = {
            //     message : 'Hi fake, registration',
            //     data : {}
            // }
            // if (1) {

            //     const response = {
            //         message : 'Hi fake, registration',
            //         data : {}
            //     }

            const { data, message } = response;
            /* Action (yeild put) */
            yield put({
                type: REGISTRATION_SUCCESS,
                registerUserData: data,
                message
            })
        }
        else {
            const { message } = response;
            yield put({
                type: REGISTRATION_ERROR,
                message

            })
        }
    }
}