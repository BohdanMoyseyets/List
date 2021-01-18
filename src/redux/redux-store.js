import { combineReducers, createStore } from "redux";
import listReducer from "./reducers/list-reducer";


let reducers = combineReducers({
    list : listReducer
});

if(typeof(localStorage['redux-store1']) == "undefined" ){
    localStorage['redux-store1']="{}";
}

let store = createStore(reducers, JSON.parse(localStorage['redux-store1']));
store.subscribe(() => {
    localStorage['redux-store1'] = JSON.stringify(store.getState())
})

export default store;