import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

import 'styles/_app.scss'
import 'styles/index.scss'
import { useStore } from 'store/make-store'

import {
  saveSharedContent,
  loadCategories,
  loadProducts,
} from 'store/app/actions'
import { initProductToBasket } from 'store/product/actions'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  const { dispatch } = store

  useEffect(() => {
    const listInitReq = ['contacts']

    dispatch(initProductToBasket())
    dispatch(loadCategories())
    dispatch(loadProducts())

    listInitReq.forEach((item) => {
      const req = fetch(`/api/${item}`)
      req
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          dispatch(
            saveSharedContent({
              [item]: res,
            }),
          )
        })
        .catch((err) => console.log(err))
    })
  }, [])

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700&display=swap&subset=cyrillic"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/static/k.png" type="image/png" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <meta
          name="description"
          content="Магазин детских игрушек в Беларуси Klaksa. В нашем магазине вы найдете настольные и напольные игры, развивающие игры, головоломки, куклы, мозаику, и многое другое для ваших детей."
        />
        <meta
          name="Keywords"
          content="детские игрушки Беларусь, детские игры, настольные и напольные игры, развивающие игры, куклы "
        />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
