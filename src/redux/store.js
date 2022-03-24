import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
//? For Debugging
import { composeWithDevTools } from "redux-devtools-extension"
import userReducer from "./reducers/userReducer"

//? To have the ability to combine all reducers.
const rootReducer = combineReducers({
    user: userReducer //? All related to the current session. 
})

//? ComposeWithDevTools is wrapping everything to be able to debug things.
//?  Thunk makes the code async.
const middleWare = composeWithDevTools(applyMiddleware(thunk))

export default createStore(rootReducer, middleWare);

//? NOW PUT IT ON THE APP LEVEL


// These are my notes that im using in the current React Native project. 100 Best.
