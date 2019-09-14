import { combineReducers } from 'redux';

import appReducers from './app/reducers';
import categoryReducers from './category/reducers';


export default combineReducers({
    app:  appReducers,
    category: categoryReducers,
})