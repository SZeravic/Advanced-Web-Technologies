import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";


export default function configureStore(initialState = { }){
    return createStore(
        rootReducer,
        initialState,
        //Extenzija ili neki log sta prati stanja
        applyMiddleware(thunk)
    )
}