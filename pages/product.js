import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import Header from './../components/Header/Header';
import Container from './../components/Container/Container';
import { 
    saveProducts,
 } from "./../store/category/actions";


function ProductPage({ reqProducts, products, saveProducts }) {
    let renderContent = <h2>Loading product...</h2>;

    if (!products.length) {
        if (reqProducts) {
            saveProducts(reqProducts);
        }
    } else {
        const router = useRouter();

        if(router.query.id) {
            const sortOption = router.query.id;

            const product = products.find((item) => {
                return item.id === sortOption;
            });

            renderContent = <h2>{ product.nameRU }</h2>;
        } else {
            renderContent = <h2>Product not found</h2>;
        }
    }
    
    return <>
        <Header />
        <Container>
            { renderContent }
        </Container>
    </>
}

ProductPage.getInitialProps = async (ctx) => {
    const { products } = ctx.store.getState().category;

    if (!products.length) {
        let host = '';

        if (ctx.isServer) {
            host = ctx.req.connection.encrypted ? 'https://' : 'http://';
            host += ctx.req.headers.host;
        }
    
        const req = await fetch(`${host}/api/content?name=products`);
        const reqProducts = await req.json();
    
        return {
            reqProducts,
        }
    } else {
        return {};
    }
}

function mapStateToProps(store) {
    return {
        products: store.category.products,
    }
}

export default connect(mapStateToProps, { saveProducts })(ProductPage);