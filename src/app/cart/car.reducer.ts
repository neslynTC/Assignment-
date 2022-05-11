import { Product } from "../shared/product.model";
import { CartActions, CartActionTypes } from "./cart.actions";

export interface CartListInterface {
    cartItems: {[id: number]: Product[]}
}

const cartListInitialState: CartListInterface = {
    cartItems: {}
}

export function cartListReducer (state = cartListInitialState, action: CartActions) {
    switch(action.type) {
        case CartActionTypes.UPDATE_CART_ITEM:
            return {
                ...state,
                cartItems: {
                    ...state.cartItems,
                    [action.payload.key]: action.payload.product
                }
            }
        case CartActionTypes.DELETE_CART_ITEM:
            let data = state.cartItems
            delete data[action.payload.key]
            return {
                ...state,
                cartItems: {
                    ...data
                }
            }
        default:
            return state
    }
}