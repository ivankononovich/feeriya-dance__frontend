import React from 'react'
import { Provider } from 'react-redux'
import App from 'next/app'
import withRedux from 'next-redux-wrapper'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

import './../styles/_app.scss'
import makeStore from './../store/make-store'

import { saveSharedContent } from './../store/app/actions'
import { initProductToBasket } from './../store/product/actions'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    return {
      pageProps,
    }
  }

  componentDidMount() {
    const { dispatch } = this.props.store
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
  }

  render() {
    const { Component, pageProps, store } = this.props

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
}

export default withRedux(makeStore)(MyApp)
