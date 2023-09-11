import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST, LOAD_USERS_LOADING, LOAD_USERS_ERROR, LOAD_USERS_SUCCESS } from './constant';

function* getProducts() {
    let data = yield fetch('https://fakestoreapi.com/products');
    data = yield data.json();
    console.warn("action is calledZZZ", data)
    yield put({ type: SET_PRODUCT_LIST, data })
}

function* searchProducts(data) {
    let result = yield fetch(`https://fakestoreapi.com/products?q=${data.query}`);
    result = yield result.json();
    console.warn("action is calledAAA", result)
    yield put({ type: SET_PRODUCT_LIST, data: result })
}

function* fetchUser() {
    try {
        let users = yield fetch('https://fakestoreapi.com/products');
        users = yield users.json();
        console.log("action is called jjjjjj", users)
        yield put({ type: SET_PRODUCT_LIST, users });
    } catch (e) {
        yield put({ type: SET_PRODUCT_LIST, error: e.message })
    }
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)
    yield takeEvery(SET_PRODUCT_LIST, fetchUser)
}

export default productSaga;