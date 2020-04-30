import { take, call, put } from "redux-saga/effects";
import {
    START_AUTHENTICATE,
    ERROR_AUTHENTICATE,
    SUCCESS_AUTHENTICATE,
    // START_USER_LOGOUT,
    // SUCCESS_USER_LOGOUT,
    // ERROR_USER_LOGOUT,
} from "../actions/action_index";
import {
    authenticate,
} from '../api/user';

export function* authenticatesaga() {
    while (true) {
        const { userMobile, password } = yield take(START_AUTHENTICATE)
        const response = yield call(authenticate, userMobile, password);
        /* Response Status */
        if (response.status) {
            const { data } = response;
            /* Action (yeild put) */
            yield put({
                type: SUCCESS_AUTHENTICATE,
                loggedInUserData: data
            })
        }
        else {
            const { message } = response;
            yield put({
                type: ERROR_AUTHENTICATE,
                message

            })
        }
    }
}

// export function* logoutusersaga() {
//     while (true) {
//        // const { userMobile, password } = yield take(START_AUTHENTICATE)
//         const response = yield call(logoutuser);
//         /* Response Status */
//         if (response.status) {
//             const { data } = response;
//             /* Action (yeild put) */
//             yield put({
//                 type: SUCCESS_USER_LOGOUT,
//                 loggedInUserData: data
//             })
//         }
//         else {
//             const { message } = response;
//             yield put({
//                 type: ERROR_USER_LOGOUT,
//                 message

//             })
//         }
//     }
// }

