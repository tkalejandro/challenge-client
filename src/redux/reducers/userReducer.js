import { DELETE_USER, LOAD_PROFILE, LOGIN_USER, REGISTER_USER } from "../actions/userAction"


const initialState = {
    currentUser: {},
    aString: "",
    aBoolean: true,
    anArray: ["example1"]
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
                currentUser: action.payload,
                anArray: [
                    ...state.anArray,
                    "example2"
                ]
            }
        case REGISTER_USER:
            return {
                ...state,
                aString: "hello",
                currentUser: action.payload
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