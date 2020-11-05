import { connect } from 'react-redux'

import css from 'styles/index.scss'
import Header from 'components/Header/Header'
import Container from 'components/Container/Container'
import ProductPreview from 'components/ProductPreview/ProductPreviewContainer'
import Footer from 'components/Footer/Footer'

const HomePage = ({ adminLogin }) => (
  <>
    <Header adminLogin={adminLogin} />
    <div className={css.image}>Картинка</div>
    <Container>
      <h2 className={css.title}>Лидеры продаж</h2>
      <ProductPreview />
    </Container>
    <Footer />
  </>
)

export default connect((store) => ({ adminLogin: store.app.adminLogin }))(
  HomePage,
)
