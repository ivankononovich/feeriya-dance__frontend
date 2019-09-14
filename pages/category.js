import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';

import css from './../styles/category.scss';
import Header from './../components/Header/Header';
import Container from './../components/Container/Container';
import { 
    saveProducts,
 } from "./../store/category/actions";


function CategoryPage({ reqProducts, products }) {
    let renderContent = <h2>Loading products...</h2>;
    
    if (!products.length) {
        if (reqProducts) {
            saveProducts(reqProducts);
            renderContent = <h2>reqProducts</h2>;
        }
    }
    
    return <>
        <Header />
        <Container>
            { renderContent }
        </Container>
    </>
}

CategoryPage.getInitialProps = async (ctx) => {
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
}

function mapStateToProps(store) {
    return {
        products: store.category.products,
    }
}

export default connect(mapStateToProps, { saveProducts })(CategoryPage);