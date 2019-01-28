import githubApi from '../apis/githubApi';


export const selectUser = (user) => {
    return {
        type: 'SELECT_USER',
        payload: user
    }
}

export const setLoadingSpinner = (value) => {
    return {
        type: 'SET_LOADING_SPINNER',
        payload: value
    }
}

export const fetchSingleUser = (userId) => async dispatch => {
    const response = await githubApi.get(`user/${userId}`)
    console.log("GET single user res:" , response)
    dispatch({type: 'FETCH_SINGLE_USER', payload: response.data})
}

export const setErrorMessage = (message) => {
    return {
        type: 'SET_ERROR',
        payload: message
    }
}

export const fetchUsers = (name) => async dispatch => {
        if(name === '') {
            dispatch({ type: 'FETCH_USERS', payload: []})
            dispatch(setLoadingSpinner(false));
        } else {
            const response = await githubApi.get(`search/users?q=${name}`);
            dispatch(setLoadingSpinner(false));
            console.log("GET user res: ",response.data.items)
            if(response.data.items.length === 0) {
                dispatch(setErrorMessage('No matching user found!'))
            }
            dispatch({ type: 'FETCH_USERS', payload: response.data.items})
        } 
}