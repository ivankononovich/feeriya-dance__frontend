const SAVE_PRODUCTS = 'SAVE_PRODUCTS';

function saveProducts(data) {
    return {
        type: SAVE_PRODUCTS,
        payload: data,
    }
}


export {
    SAVE_PRODUCTS,
    saveProducts,
}