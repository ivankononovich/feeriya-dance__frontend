import { connect } from 'react-redux'

import css from 'styles/index.scss'
import Header from 'components/Header/Header'
import Container from 'components/Container/Container'
import ProductPreview from 'components/ProductPreview/ProductPreviewContainer'

const HomePage = ({ adminLogin }) => (
  <>
    <Header adminLogin={adminLogin} />
    <Container>
      <h2 className={css.title}>Лидеры продаж</h2>
      <ProductPreview />
    </Container>
  </>
)

export default connect((store) => ({ adminLogin: store.app.adminLogin }))(
  HomePage,
)
