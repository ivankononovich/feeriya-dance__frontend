import React from "react";
import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import fetch from 'isomorphic-unfetch';

import makeStore from './../store/make-store';
import {
    saveSharedContent,
} from './../store/app/actions';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return {
            pageProps,
        };
    }

    componentDidMount() {
        const { dispatch } = this.props.store;
        const listInitReq = ['contacts', 'categories'];

        listInitReq.forEach((item) => {
            const req = fetch(`/api/content?name=${item}`);
            req
                .then((res) => {
                    return res.json();
                })
                .then((res) => {
                    dispatch(saveSharedContent({
                        [item]: res,
                    }));
                })
                .catch((err) => console.log(err));
        });
    }

    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }

}

export default withRedux(makeStore)(MyApp);