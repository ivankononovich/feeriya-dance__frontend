import fetch from 'isomorphic-unfetch'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'

import Header from 'components/Header/Header'
import Container from 'components/Container/Container'
import ProductPreview from 'components/ProductPreview/ProductPreview'
import Loader from 'components/Loader/Loader'

import { saveProducts } from 'store/category/actions'
import { initializeStore } from 'store/make-store'

function CategoryPage({ reqProducts, products, saveProducts }) {
  let renderContent = <Loader />

  if (!products.length) {
    if (reqProducts) {
      saveProducts(reqProducts)
    }
  } else {
    const router = useRouter()

    if (router.query.id) {
      const sortOptions = router.query.id.split('-')

      products = products.filter((item) => {
        let result = false

        sortOptions.forEach((id) => {
          result = item.categorize.includes(id)
        })

        return result ? item : false
      })
    }

    renderContent = products.map((item, index) => (
      <ProductPreview {...item} key={index} />
    ))
  }

  return (
    <>
      <Header />
      <Container additionalClasses={['container_product-preview-container']}>
        {renderContent}
      </Container>
    </>
  )
}

CategoryPage.getInitialProps = async (ctx) => {
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

export default connect(mapStateToProps, { saveProducts })(CategoryPage)
