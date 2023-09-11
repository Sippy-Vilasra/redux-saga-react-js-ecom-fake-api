import { combineReducers } from 'redux'
import { cartData } from './reducer'
import { productData, loadingProduct } from './reducer'
export default combineReducers({
    cartData,
    productData,
    loadingProduct
})