import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';

import Header from './../components/Header/Header';
import Container from './../components/Container/Container';
import ProductPreview from './../components/ProductPreview/ProductPreview';
import Loader from './../components/Loader/Loader';

import { 
    saveProducts,
 } from './../store/category/actions';


function BasketPage({ reqProducts, products, saveProducts, basket }) {
    let renderContent = <Loader />;

    if (!products.length) {
        if (reqProducts) {
            saveProducts(reqProducts);
        }
    } else {
        const sortOptions = basket.listProducts;

        renderContent = products.filter(
            (item) => sortOptions.some((id) => id === item.id)
        )
        .map(
            (item) => <ProductPreview { ...item } key={ item.id } />
        );
    }
    
    return <>
        <Header />
        <Container additionalClasses={ ['container_product-preview-container'] }>
            { renderContent }
        </Container>
    </>
}

BasketPage.getInitialProps = async (ctx) => {
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
        basket: store.product.basket,
    }
}

export default connect(mapStateToProps, { saveProducts })(BasketPage);