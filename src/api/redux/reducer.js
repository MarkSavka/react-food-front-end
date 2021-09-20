const LOAD_PRODUCTS = "loadProducts"

const initialState = {
    products: []
}

export default function mainReducer( state = initialState, action ) {
    switch (action.type) {
        case LOAD_PRODUCTS :
            return {
                ...state,
                products: action.payload
            }
        default : return state
    }
}

export const loadProducts = (payload) => ({type: LOAD_PRODUCTS, payload})