import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { postReducers } from "./reducers/postReducers";

const reducers = combineReducers({
  posts: postReducers,
});

const initialState = {};

export const store = createStore(
  postReducers,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
