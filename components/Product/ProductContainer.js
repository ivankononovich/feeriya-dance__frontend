import { connect } from 'react-redux'

import Product from './Product'
import {
  addProductToBasket,
  removeProductToBasket,
} from './../../store/product/actions'

function mapStateToProps(store) {
  return {
    listProductsInBasket: store.product.basket.listProducts,
    totalPrice: store.product.basket.totalPrice,
  }
}

export default connect(mapStateToProps, {
  addProductToBasket,
  removeProductToBasket,
})(Product)
