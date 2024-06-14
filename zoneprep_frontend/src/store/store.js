import { composeWithDevTools } from "redux-devtools-extension";
import { legacy_createStore as createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";

import authReducer from './reducers/authReducer';
import alertReducer from './reducers/AlertReducer';

const rootReducer = combineReducers({
    auth : authReducer,
    alert : alertReducer,
})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
