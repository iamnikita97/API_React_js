import {
    REGISTRATION_ERROR,
    REGISTRATION_START,
    REGISTRATION_SUCCESS,
    REGISTRATION_REDUX_CLEANUP
} from '../actions/action_registration';

const initState = {
    isRegCompleted: false,
    isLoading: false,
    isError: false,
    registerUserData: {},
    errorMessage: '',
    isBtndisabled : false
}

const registrationUser = (prevState = initState, action) => {
    switch (action.type) {
        case REGISTRATION_START: {
            return {
                ...prevState,
                isLoading: true
            }
        }

        case REGISTRATION_SUCCESS: {
            const { registerUserData,message } = action;
            return {
                ...prevState,
                isLoading: false,
                isError: false,
                isRegCompleted: true,
                registerUserData,
                errorMessage: message,
                isBtndisabled : true
            }
        }

        case REGISTRATION_ERROR: {

            const { message } = action;
            return {
                ...prevState,
                isLoading: false,
                isError: true,
                isRegCompleted: false,
                errorMessage: message,
                isBtndisabled : false
            }
        }

        case REGISTRATION_REDUX_CLEANUP : {

         console.log("Redux Clean Up");
            return initState
        }
        default: return prevState
    }
}

export default registrationUser