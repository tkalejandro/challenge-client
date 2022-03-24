import { DELETE_USER, LOAD_PROFILE, LOGIN_USER, REGISTER_USER } from "../actions/userAction"


const initialState = {
    currentUser: {}
}

const useReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case LOAD_PROFILE:
            return {
                ...state,
                currentUser: action.payload
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