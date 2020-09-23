import { connect } from 'react-redux'

import CreatorCategories from './CreatorCategories'

function mapStateToProps(store) {
  return {
    categories: store.app.sharedContent.categories,
  }
}

export default connect(mapStateToProps)(CreatorCategories)
