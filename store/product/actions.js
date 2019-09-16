const ADD_PRODUCT_TO_BASKET = 'ADD_PRODUCT_TO_BASKET';

function addProductToBasket({ product, price }) {
    return {
        type: ADD_PRODUCT_TO_BASKET,
        payload: {
            product,
            price,
        },
    }
}

export {
    addProductToBasket,
    ADD_PRODUCT_TO_BASKET,
}