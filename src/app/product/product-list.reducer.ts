import { Product } from "../shared/product.model";
import { ProductListActionTypes, ProductListActions } from "./product-list.actions";

export interface ProductListInterFace {
    products: Product[]
}

const productListInitialState: ProductListInterFace = {
    products: []
    // products: [new Product(1, "https://assets.tendercuts.in/product/C/H/0b2422c9-12d1-4c13-bd96-9948ad114c97.webp", "Chicken Curry Cut", "18 - 20 Pieces", "480 - 500 Gms", 229, 1, "")]
}

export function productListReducer(state = productListInitialState, action: ProductListActions) {
    switch(action.type){
        case (ProductListActionTypes.UPDATE_PRODUCT_LIST):
            return {
                ...state,
                products: [...action.payload]
            }
        default:
            return {...state}
    }
}