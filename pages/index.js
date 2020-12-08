import { connect } from 'react-redux'
import Head from 'next/head'

import css from 'styles/index.scss'
import Header from 'components/Header/Header'
import Container from 'components/Container/Container'
import ProductPreview from 'components/ProductPreview/ProductPreviewContainer'
import Footer from 'components/Footer/Footer'

const HomePage = ({ adminLogin }) => (
  <>
    <Head>
      <title>Клякса | Главная страница</title>
    </Head>
    <Header adminLogin={adminLogin} />
    <div className={css.image}></div>
    <Container>
      <h2 className={css.title}>О нас</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta hic nam
        provident sed repudiandae dolorum illum odit non dignissimos voluptates,
        est temporibus reprehenderit, ratione delectus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta hic nam
        provident sed repudiandae dolorum illum odit non dignissimos voluptates,
        est temporibus reprehenderit, ratione delectus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta hic nam
        provident sed repudiandae dolorum illum odit non dignissimos voluptates,
        est temporibus reprehenderit, ratione delectus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta hic nam
        provident sed repudiandae dolorum illum odit non dignissimos voluptates,
        est temporibus reprehenderit, ratione delectus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta hic nam
        provident sed repudiandae dolorum illum odit non dignissimos voluptates,
        est temporibus reprehenderit, ratione delectus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta hic nam
        provident sed repudiandae dolorum illum odit non dignissimos voluptates,
        est temporibus reprehenderit, ratione delectus!
      </p>
    </Container>
    <Footer />
  </>
)

export default connect((store) => ({ adminLogin: store.app.adminLogin }))(
  HomePage,
)
