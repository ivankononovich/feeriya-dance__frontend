import { connect } from 'react-redux'

import ProductPreview from './ProductPreview'

function mapStateToProps(store) {
  return {
    products: store.app.sharedContent.products,
  }
}

export default connect(mapStateToProps)(ProductPreview)
