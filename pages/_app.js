import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import fetch from 'isomorphic-unfetch'

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
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
