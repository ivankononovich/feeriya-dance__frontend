import { connect } from 'react-redux'

import Contacts from './Contacts'

function mapStateToProps(store) {
  return {
    contacts: store.app.sharedContent.contacts,
  }
}

export default connect(mapStateToProps)(Contacts)
