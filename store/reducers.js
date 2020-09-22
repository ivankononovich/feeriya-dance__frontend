import { combineReducers } from 'redux'

import appReducers from './app/reducers'
import categoryReducers from './category/reducers'
import productReducers from './product/reducers'

export default combineReducers({
  app: appReducers,
  category: categoryReducers,
  product: productReducers,
})
