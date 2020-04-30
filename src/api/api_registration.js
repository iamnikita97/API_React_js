import { post } from '../api';

export function registration(first_name, last_name, country_code, user_mobile, email, password) {
    return post('/register', {
        /* Data Of Registration Form (first_name ,last_name, country_code,user_mobile,email,password)  */
        data: {
            first_name,
            last_name,
            country_code,
            user_mobile,
            email,
            password

        }
    })
}