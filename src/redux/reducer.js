import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART, SET_PRODUCT_LIST, LOAD_USERS_LOADING, LOAD_USERS_ERROR, LOAD_USERS_SUCCESS } from "./constant"
const initialState = {
    data: [],
    loading: false,
    error: ''
};


export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn("ADD_TO_CART condition ", action)
            return [action.data, ...data]
        case REMOVE_FROM_CART:
            console.warn("REMOVE_FROM_CART condition ", action);
            // data.length= data.length? data.length-1:[]
            const remainingItems = data.filter((item) => item.id !== action.data)
            return [...remainingItems]
        case EMPTY_CART:
            console.warn("EMPTY CART condition ", action);
            data = []
            return [...data]
        default:
            return data
    }
}

export const productData = (data = [], action) => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            console.warn("PRODUCT_LIST conditionqq ", action)
            return [...action.data]
        default:
            return data
    }
}

export const loadingProduct = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USERS_LOADING:
            console.log("LOAD_USERS_LOADING", action)
            return { ...state, loading: true, error: '' }
        case LOAD_USERS_SUCCESS:
            console.log('LOAD_USERS_SUCCESS', action)
            return { ...state, data: action.data, loading: false }
        case LOAD_USERS_ERROR:
            console.log("LOAD_USERS_ERROR", action)
            return { ...state, loading: false, error: action.error }
        default:
            return state
    }
}