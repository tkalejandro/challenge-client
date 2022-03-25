export const LOGIN_USER = 'LOGIN_USER'
export const DELETE_USER = 'DELETE_USER'
export const REGISTER_USER = 'REGISTER_USER'
export const LOAD_PROFILE = 'LOAD_PROFILE'

const BASE_URL = "http://localhost:5000"
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
    console.log("register", registerData)
    const {fullName, email, password} = registerData
    return async dispatch => {
        const settings = {
            method: 'POST',
            headers: {
                
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullName,
                email,
                password
            }),
        }
        
        const result = await fetch(`${BASE_URL}/api/users`, settings)
        const resultData = await result.json()
       //console.log("Result Data", resultData)


        dispatch({
            type: REGISTER_USER,
            payload: resultData
        })
        return resultData
    }
}

export const deleteUser = (userId) => {
    return async dispatch => {
        //? Something
        
        dispatch({
            type: DELETE_USER,
            payload: ""
        })
    }
}

export const loadProfile = (userId) => {

    return async dispatch => {
        //? Something
        const result = await fetch(`${BASE_URL}/api/users/${userId}`)
        const resultData = await result.json()
        dispatch({
            type: LOAD_PROFILE,
            payload: resultData
        })
    }
}