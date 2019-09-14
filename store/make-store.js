import rootReducers from './reducers';
import { createStore } from "redux";

const initialState = {
    app: {
        sharedContent: {},
    },
    category: {
        products: [],
    },
};

export default () => createStore(rootReducers, initialState);
