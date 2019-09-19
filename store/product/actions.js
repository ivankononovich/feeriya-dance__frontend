const ADD_PRODUCT_TO_BASKET = 'ADD_PRODUCT_TO_BASKET';
const INIT_PRODUCT_TO_BASKET = 'INIT_PRODUCT_TO_BASKET';


function addProductToBasket({ product, price }) {
    return {
        type: ADD_PRODUCT_TO_BASKET,
        payload: {
            product,
            price,
        },
    }
}

function initProductToBasket() {
    return {
        type: INIT_PRODUCT_TO_BASKET,
    }
}

export {
    addProductToBasket,
    ADD_PRODUCT_TO_BASKET,
    INIT_PRODUCT_TO_BASKET,
    initProductToBasket,
}