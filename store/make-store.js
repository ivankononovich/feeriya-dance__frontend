import rootReducer from './reducer';
import { createStore } from "redux";

const initialState = {};

export default () => createStore(rootReducer, initialState);
