import rootReducers from './reducers';
import { createStore } from "redux";

const initialState = {
    app: {
        sharedContent: {},
    },
    category: {
        products: [],
    },
    product: {
        basket: {
            listProducts: [],
            totalPrice: 0,
        },
    }
};

export default () => createStore(rootReducers, initialState);
