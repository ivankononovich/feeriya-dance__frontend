import { connect } from 'react-redux';

import Form from './Form';
import {
    removeProductToBasket,
} from '../../store/product/actions';


function mapStateToProps(store) {
    return {
        listProducts: store.product.basket.listProducts,
        totalPrice: store.product.basket.totalPrice,
    }
}

export default connect(mapStateToProps, { removeProductToBasket })(Form);