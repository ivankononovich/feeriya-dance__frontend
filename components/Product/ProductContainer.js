import { connect } from 'react-redux';

import Product from './Product';
import {
    addProductToBasket,
} from './../../store/product/actions';

export default connect(null, { addProductToBasket })(Product);