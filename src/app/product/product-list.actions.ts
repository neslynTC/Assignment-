import { Action } from "@ngrx/store";
import { Product } from "../shared/product.model";

export enum ProductListActionTypes {
    UPDATE_PRODUCT_LIST = "UPDATE_PRODUCT_LIST",
    GET_PRODUCT = "GET_PRODUCT"
}

export class UpdateProductListAction implements Action {
    readonly type: string = ProductListActionTypes.UPDATE_PRODUCT_LIST;
    constructor(public payload: Product[]){}
}

export class GetProductAction implements Action {
    readonly type: string = ProductListActionTypes.GET_PRODUCT
    constructor(public payload: string){}
}


export type ProductListActions = UpdateProductListAction | GetProductAction;