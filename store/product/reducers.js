import { 
    ADD_PRODUCT_TO_BASKET,
} from './actions';

export default (store, action) => {
    switch(action.type) {
        case ADD_PRODUCT_TO_BASKET:
            const { listProducts } = store.basket;
            const { product, price } = action.payload;

            listProducts.push(product);
            store.basket.totalPrice += price;

            localStorage.setItem('basket', JSON.stringify(store.basket));

            return {
                ...store,
            };
        
        default: 
            return {
                ...store,
            };
    }
}