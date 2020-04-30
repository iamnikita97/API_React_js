import { post } from '../api';

export function authenticate(user_mobile, password) {
    return post('/login', {
        /* Data Of Login Form (userMobile ,password) */
        data: {
            user_mobile,
            password,
            device_type: "2",
            device_token: "12321"
        }
    })
}

// export function logoutuser() {
//     return post('/logout', {
//         /* Data Of Login Form (userMobile ,password) */
//     })
// }


