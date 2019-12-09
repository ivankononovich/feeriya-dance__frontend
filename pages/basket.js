import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';

import Header from './../components/Header/Header';
import Container from './../components/Container/Container';
import ProductPreview from './../components/ProductPreview/ProductPreview';
import Form from '../components/Form/FormContainer';
import { 
    saveProducts,
 } from "./../store/category/actions";


function BasketPage({ reqProducts, products, saveProducts, listProducts }) {
    let renderContent = <h2>Loading products...</h2>;

    if (!products.length) {
        if (reqProducts) {
            saveProducts(reqProducts);
            renderContent = <h2>reqProducts</h2>;
        }
    } else {
        const sortOptions = listProducts;

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
        <Container >
            <Form />
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
        listProducts: store.product.basket.listProducts,
        totalPrice: store.product.basket.totalPrice,
    }
}

export default connect(mapStateToProps, { saveProducts })(BasketPage);