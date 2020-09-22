import { connect } from 'react-redux'

import MiniBasket from './MiniBasket'

function mapStateToProps(store) {
  return {
    listProducts: store.product.basket.listProducts,
    totalPrice: store.product.basket.totalPrice,
  }
}

export default connect(mapStateToProps)(MiniBasket)
