import rootReducers from './reducers';
import { createStore } from "redux";

const initialState = {
    app: {
        sharedContent: {
            contentUploaded: false,
        },
    }
};

export default () => createStore(rootReducers, initialState);
