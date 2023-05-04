import { SHOW_ERROR, DELETE_CART_DETAILS, SHOW_LOADING, SHOW_PRODUCT, SHOW_PRODUCTS, SHOW_CART_DETAILS, UPDATE_CART_DETAILS } from "./Types";

const ShowReducer = (state, action) => {
    switch (action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                loading: true,
            }
        case SHOW_PRODUCTS:
            return {
                ...state,
                loading: false,
                products: action.payload,
            }
        case SHOW_PRODUCT:
            return {
                ...state,
                loading: false,
                product: action.payload,
            }
        case SHOW_CART_DETAILS:
            return {
                ...state,
                loading: false,
                cartLists: action.payload,
            }
        case DELETE_CART_DETAILS:
            return {
                ...state,
                loading: false,
                cartLists: action.payload,
            }
        case UPDATE_CART_DETAILS:
            return {
                ...state,
                loading: false,
                cartLists: action.payload,
            }
        case SHOW_ERROR:
            return {
                ...state,
                isError: true,
            }
        default:
            return state;
    }
}

export default ShowReducer;