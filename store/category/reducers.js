import { SAVE_PRODUCTS } from './actions'

export default (store, action) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return {
        ...store,
        products: [...action.payload],
      }

    default:
      return {
        ...store,
      }
  }
}
