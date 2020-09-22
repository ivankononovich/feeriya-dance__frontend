import fetch from 'isomorphic-unfetch'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'

import Header from 'components/Header/Header'
import Container from 'components/Container/Container'
import Product from 'components/Product/ProductContainer'
import Loader from 'components/Loader/Loader'

import { saveProducts } from 'store/category/actions'
import { initializeStore } from 'store/make-store'

function ProductPage({ reqProducts, products, saveProducts }) {
  let renderContent = <Loader />

  if (!products.length) {
    if (reqProducts) {
      saveProducts(reqProducts)
    }
  } else {
    const router = useRouter()
    let product

    if (router.query.id) {
      const sortOption = router.query.id

      product = products.find((item) => {
        return item.id === sortOption
      })
    }

    if (product) {
      renderContent = <Product {...product} />
    } else {
      renderContent = <h2>Товар не найден</h2>
    }
  }

  return (
    <>
      <Header />
      <Container>{renderContent}</Container>
    </>
  )
}

ProductPage.getInitialProps = async (ctx) => {
  const reduxStore = initializeStore()
  const { products } = reduxStore.getState().category

  if (!products.length) {
    let host = ''
    if (ctx.req) {
      host = `${ctx.req?.connection.encrypted ? 'https://' : 'http://'}${
        ctx.req.headers.host
      }`
    }

    const req = await fetch(`${host}/api/content?name=products`)
    const reqProducts = await req.json()

    return {
      reqProducts,
    }
  } else {
    return {}
  }
}

function mapStateToProps(store) {
  return {
    products: store.category.products,
  }
}

export default connect(mapStateToProps, { saveProducts })(ProductPage)
