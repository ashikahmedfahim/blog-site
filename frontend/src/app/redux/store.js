import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { postReducers } from "./reducers/postReducers";
import { tagReducers } from "./reducers/tagReducers";
import { authReducers } from "./reducers/authReducers";
import { helperReducer } from "./reducers/helperReducer";

const reducers = combineReducers({
  postStore: postReducers,
  tagStore: tagReducers,
  authStore: authReducers,
  helperStore: helperReducer,
});

const initialState = {};

export const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
