export const LOGIN_USER = 'LOGIN_USER'
export const DELETE_USER = 'DELETE_USER'
export const REGISTER_USER = 'REGISTER_USER'


export const loginUser = (loginData) => {
    return async dispatch => {
        //? Something

        dispatch({
            type: LOGIN_USER,
            payload: ""
        })
    }
}
export const registerUser = (registerData) => {
    return async dispatch => {
        //? Something

        dispatch({
            type: REGISTER_USER,
            payload: ""
        })
    }
}

export const deleteUser = (userId) => {
    return async dispatch => {
        //? Something

        dispatch({
            type: LOGIN_USER,
            payload: ""
        })
    }
}