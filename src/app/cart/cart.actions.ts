import { Action } from "@ngrx/store";
import { Product } from "../shared/product.model";

export enum CartActionTypes {
    UPDATE_CART_ITEM = "UPDATE_CART_ITEM",
    DELETE_CART_ITEM = "DELETE_CART_ITEM"
}

export class UpdateItemToCart implements Action {
    readonly type: string = CartActionTypes.UPDATE_CART_ITEM;
    constructor(public payload: {key: string, product: Product}){}
}

export class DeleteItemFromCart implements Action {
    readonly type: string = CartActionTypes.DELETE_CART_ITEM;
    constructor(public payload: {key: string, product: Product}){}
}

export type CartActions = UpdateItemToCart | DeleteItemFromCart