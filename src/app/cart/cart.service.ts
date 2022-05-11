import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../shared/product.model';
import { CartListInterface } from './car.reducer';
import { DeleteItemFromCart, UpdateItemToCart } from './cart.actions';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: {[id: number]: Product} = {};
  
  constructor(private store: Store<CartListInterface>) { }
  
  addItemToCart = (product: Product) => {
    this.store.dispatch(new UpdateItemToCart({key: ""+product.id, product: product}))
  }
  removeItemFromCart = (product: Product) => {
    if (product.count == 0) {
      delete this.cartItems[product.id]
      this.store.dispatch(new DeleteItemFromCart({key: ""+product.id, product: product}))
    } else {
      this.store.dispatch(new UpdateItemToCart({key: ""+product.id, product: product}))
    }
  }
}
