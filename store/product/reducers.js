import { 
    ADD_PRODUCT_TO_BASKET,
} from './actions';

export default (store, action) => {
    switch(action.type) {
        case ADD_PRODUCT_TO_BASKET:
            const { listProducts, price } = store.basket;

            listProducts.push(action.payload.product);
            store.basket.price += price;

            localStorage.setItem('basket', store.basket);
            
            return {
                ...store,
            };
        
        default: 
            return {
                ...store,
            };
    }
}