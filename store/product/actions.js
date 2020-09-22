const ADD_PRODUCT_TO_BASKET = 'ADD_PRODUCT_TO_BASKET'
const REMOVE_PRODUCT_TO_BASKET = 'REMOVE_PRODUCT_TO_BASKET'
const INIT_PRODUCT_TO_BASKET = 'INIT_PRODUCT_TO_BASKET'

function addProductToBasket({ product, price }) {
  return {
    type: ADD_PRODUCT_TO_BASKET,
    payload: {
      product,
      price,
    },
  }
}

function removeProductToBasket({ product, price }) {
  return {
    type: REMOVE_PRODUCT_TO_BASKET,
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
  removeProductToBasket,
  REMOVE_PRODUCT_TO_BASKET,
  initProductToBasket,
  INIT_PRODUCT_TO_BASKET,
}
