import { combineReducers } from 'redux';
import user from './reducers_user'; 
import registrationUser from './reducers_registration_user.js'; 
const rootReducer = combineReducers({
    user,
    registrationUser
});

//use blacklst type of prop only
//it should be at the top level of the prop
// so that it can be blacklisted 

export default rootReducer;