import { connect } from 'react-redux'

import CreatorCategories from './CreatorCategories'

function mapStateToProps(store) {
  return {
    categories: store.app.sharedContent.categories,
    categoriesLength: store.app.sharedContent.categories?.length,
  }
}

export default connect(mapStateToProps)(CreatorCategories)
