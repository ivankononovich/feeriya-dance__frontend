import fetch from 'isomorphic-unfetch'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Header from 'components/Header/Header'
import Container from 'components/Container/Container'
import ProductPreview from 'components/ProductPreview/ProductPreview'
import Loader from 'components/Loader/Loader'
import Footer from 'components/Footer/Footer'

import { saveProducts } from 'store/category/actions'
import { initializeStore } from 'store/make-store'

function CategoryPage({ reqProducts, products, saveProducts, adminLogin }) {
  // console.log(products)
  const router = useRouter()
  let renderContent = <Loader />

  if (!products.length) {
    if (reqProducts) {
      saveProducts(reqProducts)
    }
  } else {
    if (router.query.id) {
      const sortOptions = router.query.id.split('-')
      // console.log('###sortOptions ', sortOptions)

      products = products.filter((item) => {
        let result = false
        // console.log('###item: ', item)

        sortOptions.forEach((id) => {
          result = item.categorize.includes(id)
          // console.log('###result: ', result)
        })

        return result ? item : false
      })
    }
    // console.log('#Products ', products)
    // renderContent = products.map((item, index) => {
    //   return <ProductPreview {...item} key={index} />
    //   // return <ProductPreview products={...item} key={index} />
    // })
    // console.log('aaza', renderContent)

    renderContent = <ProductPreview products={products} />
  }

  return (
    <>
      <Header />
      <Container additionalClasses={['container_product-preview-container']}>
        {adminLogin && (
          <Link href={`/creator-products?id=${router.query.id}`}>
            <a
              style={{
                display: 'block',
                borderRadius: '3px',
                border: 'none',
                color: '#ffffff',
                backgroundColor: '#5983f0',
                boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.25)',
                fontWeight: '700',
                fontSize: '14px',
                margin: '5px 0',
                padding: '10px',
                cursor: 'pointer',
                transition: 'margin 0.3s',
                textDecoration: 'none',
              }}
            >
              +
            </a>
          </Link>
        )}
        {renderContent}
      </Container>
      <Footer />
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

    const req = await fetch(`${host}/api/products`)
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
    adminLogin: store.app.adminLogin,
  }
}

export default connect(mapStateToProps, { saveProducts })(CategoryPage)
