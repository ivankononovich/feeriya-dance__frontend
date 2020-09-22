import { connect } from 'react-redux'

import Categories from './Categories'

function mapStateToProps(store) {
  return {
    categories: store.app.sharedContent.categories,
  }
}

export default connect(mapStateToProps)(Categories)
