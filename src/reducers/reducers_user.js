import {
    START_AUTHENTICATE, 
    SUCCESS_AUTHENTICATE,
    ERROR_AUTHENTICATE, 
    LOGOUT,
    SET_STATE_FROM_LOCAL_STORAGE
} from '../actions/action_index'

import { getDataInLocalStorageByKey} from '../api';

const initState = {
    isLoggedIn : false,
    access_token : '',
    isLoading : false,
    isError : false,
    loggedInUserData : {},
    errorMessage : '',
    set_state_from_local_storage : false
}

const user = (prevState = initState, action) => {
    console.log(`checking for actions`)
    switch(action.type){
        case START_AUTHENTICATE : {
            return {
                ...prevState,
                isLoading : true,
                isError : false
            }
        }
        case SUCCESS_AUTHENTICATE : {
            const { loggedInUserData } = action;
            return {
                ...prevState,
                isLoading : false,
                isError : false,
                isLoggedIn : true,
                loggedInUserData,
                set_state_from_local_storage : false
            }
        }
        case ERROR_AUTHENTICATE : {
            const { message } = action;
            return {
                ...prevState,
                isLoading : false,
                isError:  true,
                isLoggedIn : false,
                errorMessage : message,
                set_state_from_local_storage : false
            }
        }
        case LOGOUT : {
            return initState 
        }
        case SET_STATE_FROM_LOCAL_STORAGE : {
            return {
                ...prevState,
                loggedInUserData : getDataInLocalStorageByKey('cesan_obike'),
                access_token : getDataInLocalStorageByKey('cesan_obike_token'),
                set_state_from_local_storage : true
            }
        }
        default : return prevState
    }
}


export default user