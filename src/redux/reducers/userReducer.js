import { DELETE_USER, LOGIN_USER, REGISTER_USER } from "../actions/userAction"


const initialState = {
    currentUser: {}
}

const useReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
            }
        case REGISTER_USER:
            return {
                ...state,
            }
        case DELETE_USER:
            return {
                ...state
            }
        default:
            return state
    }
}

export default useReducer