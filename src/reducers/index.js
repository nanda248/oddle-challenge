import { combineReducers } from 'redux';
import usersReducer from './usersReducer';

const selectedUserReducer = (selectUser = null, action) => {
    if(action.type === 'USER_SELECTED') {
        return action.payload;
    }
    return selectUser;
}

const loadingSpinnerReducer = (status = false, action) => {
    if(action.type === 'SET_LOADING_SPINNER') {
        return action.payload;
    }
    return status;
}

const errorReducer = (message = null, action) => {
    if(action.type === 'SET_ERROR') {
        return action.payload
    }
    return message;
}

const singleUserReducer = (user=null, action) => {
    if(action.type === 'FETCH_SINGLE_USER') {
        return action.payload;
    }
    return user;
}

export default combineReducers({
    users: usersReducer,
    selectedUser: selectedUserReducer,
    loadingSpinnerStatus: loadingSpinnerReducer,
    errorMessage: errorReducer,
    singleUser: singleUserReducer
})