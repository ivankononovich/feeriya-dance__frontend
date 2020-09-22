import React, { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

import 'styles/_app.scss'
import { useStore } from 'store/make-store'

import { saveSharedContent } from 'store/app/actions'
import { initProductToBasket } from 'store/product/actions'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  const { dispatch } = store

  useEffect(() => {
    const listInitReq = ['contacts', 'categories']

    dispatch(initProductToBasket())

    listInitReq.forEach((item) => {
      const req = fetch(`/api/content?name=${item}`)
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
  })

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700&display=swap&subset=cyrillic"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
