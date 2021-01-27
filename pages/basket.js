import fetch from 'isomorphic-unfetch'
import { connect } from 'react-redux'
import Head from 'next/head'

import css from 'styles/basket.scss'
import Header from 'components/Header/Header'
import Container from 'components/Container/Container'
import ProductPreview from 'components/ProductPreview/ProductPreview'
import Form from 'components/Form/FormContainer'
import Loader from 'components/Loader/Loader'
import { saveProducts } from 'store/category/actions'
import { removeProductToBasket } from 'store/product/actions'
import { initializeStore } from 'store/make-store'
import Footer from 'components/Footer/Footer'

function BasketPage({
  reqProducts,
  products,
  saveProducts,
  removeProductToBasket,
  listProducts,
  totalPrice,
}) {
  products = products.sort((a, b) => a.name_en > b.name_en ? 1 : -1)
  listProducts = listProducts.sort()

  let renderContent = <Loader />

  if (!products.length) {
    if (reqProducts) {
      saveProducts(reqProducts)
    }
  } else {
    const sortOptions = listProducts

    const productsAmount = listProducts.reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {})


    // console.log(b)
    const productsIndexes = Object.values(productsAmount)
    // console.log(c)
    // let res

    renderContent = products
      .filter((item) => sortOptions.some((id) => item.name_en === id))
      .map((item, index) => {
        return (
          <div className={css['product-wrapper']} key={item.name_en}>
            <button
              className={css.button}
              onClick={() =>
                removeProductToBasket({
                  product: item.name_en,
                  price: item.price,
                })
              }
            >
              Удалить из корзины &#9587;
            </button>
            <ProductPreview products={[item]} index={productsIndexes[index]} />
            {/* <div>{JSON.stringify(item.name_ru)}</div> */}
          </div>
        )
      })
  }

  return (
    <>
      <Head>
        <title>Клякса | Корзина</title>
      </Head>
      <Header />
      {products.length && renderContent.length ? (
        <Container>
          <h2 className={css['full-price']}>
            Итоговая цена: {totalPrice.toFixed(2)} BYN
          </h2>
        </Container>
      ) : (
          ''
        )}
      <Container additionalClasses={['container_product-preview-container']}>
        {renderContent}
      </Container>
      <Container>
        <Form />
      </Container>
      <Footer />
    </>
  )
}

BasketPage.getInitialProps = async (ctx) => {
  const reduxStore = initializeStore()
  const { products } = reduxStore.getState().category

  if (!products.length) {
    let host = ''
    if (ctx.req) {
      host = `${ctx.req?.connection.encrypted ? 'https://' : 'http://'}${ctx.req.headers.host
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
    listProducts: store.product.basket.listProducts,
    totalPrice: store.product.basket.totalPrice,
  }
}

export default connect(mapStateToProps, {
  saveProducts,
  removeProductToBasket,
})(BasketPage)
