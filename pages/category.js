import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import css from './../styles/category.scss';
import Header from './../components/Header/Header';
import Container from './../components/Container/Container';
import ProductPreview from './../components/ProductPreview/ProductPreview';
import { 
    saveProducts,
 } from "./../store/category/actions";


function CategoryPage({ reqProducts, products, saveProducts }) {
    let renderContent = <h2>Loading products...</h2>;
    
    if (!products.length) {
        if (reqProducts) {
            saveProducts(reqProducts);
            renderContent = <h2>reqProducts</h2>;
        }
    } else {
        const router = useRouter();

        if(router.query.id) {
            const sortOptions = router.query.id.split('-');

            products = products.filter((item) => {
                let result = false;
    
                sortOptions.forEach((id) => {
                    result = item.categorize.includes(id);
                });
        
                return result ? item : false;
            });
        }

        renderContent = products.map((item, index) => 
            <ProductPreview {...item} key={ index }/>
        );
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