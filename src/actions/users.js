const getUsers = () => {
    return (dispatch) => {

    }
}

const selectUser = (user) => ({ type: types.SELECT_USER, payload: user });

module.exports = {
    getUsers,
    selectUser
}