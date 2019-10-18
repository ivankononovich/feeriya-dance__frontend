import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';

import css from './../styles/basket.scss';
import Header from './../components/Header/Header';
import Container from './../components/Container/Container';
import ProductPreview from './../components/ProductPreview/ProductPreview';
import Loader from './../components/Loader/Loader';

import { 
    saveProducts,
} from './../store/category/actions';
import {
    removeProductToBasket,
} from './../store/product/actions';


function BasketPage({ reqProducts, products, saveProducts, removeProductToBasket, listProducts }) {
    let renderContent = <Loader />;

    if (!products.length) {
        if (reqProducts) {
            saveProducts(reqProducts);
        }
    } else {
        const sortOptions = listProducts;

        renderContent = products.filter(
            (item) => sortOptions.some((id) => id === item.id)
        )
        .map(
            (item) => {
                return (
                    <div className={ css['product-wrapper'] } key={ item.id } >
                        <button 
                            className={ css.button }
                            onClick={ 
                                () => removeProductToBasket({ product: item.id, price: item.price }) 
                            }
                        >Удалить из корзины &#9587;</button>
                        <ProductPreview { ...item } />
                    </div>
                )
            }
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
        listProducts: store.product.basket.listProducts,
        totalPrice: store.product.basket.totalPrice,
    }
}

export default connect(mapStateToProps, { saveProducts, removeProductToBasket, })(BasketPage);