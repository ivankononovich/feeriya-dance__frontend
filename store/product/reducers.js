import { 
    ADD_PRODUCT_TO_BASKET,
    REMOVE_PRODUCT_TO_BASKET,
    INIT_PRODUCT_TO_BASKET,
} from './actions';


export default (store, action) => {
    let listProducts, product, price;

    switch(action.type) {
        case INIT_PRODUCT_TO_BASKET:
            const basket = localStorage.getItem('basket');

            if (basket) {
                return {
                    ...store,
                    basket: JSON.parse(basket),
                };
            } else {
                return {
                    ...store,
                }
            }

        case ADD_PRODUCT_TO_BASKET:
            listProducts = store.basket.listProducts;
            product = action.payload.product;
            price = action.payload.price;

            listProducts.push(product);
            store.basket.totalPrice += price;

            localStorage.setItem('basket', JSON.stringify(store.basket));

            return {
                ...store,
            };
        
        case REMOVE_PRODUCT_TO_BASKET:
            listProducts = store.basket.listProducts;
            product = action.payload.product;
            price = action.payload.price;

            const removeProductIndex = listProducts.findIndex((item) => product === item);

            listProducts.splice(removeProductIndex, 1);
            store.basket.totalPrice -= price;

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