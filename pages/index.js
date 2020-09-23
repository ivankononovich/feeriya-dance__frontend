import { connect } from 'react-redux'

import css from 'styles/index.scss'
import Header from 'components/Header/Header'

const HomePage = ({ adminLogin }) => (
  <>
    <Header adminLogin={adminLogin} />
    <h1 className={css.title}>Main page</h1>
  </>
)

export default connect((store) => ({ adminLogin: store.app.adminLogin }))(
  HomePage,
)
