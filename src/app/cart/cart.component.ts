import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../shared/product.model';
import { CartListInterface } from './car.reducer';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartEmpty: boolean
  cartList: Product[] = []
  total: number
  constructor(private cartService: CartService, private store: Store<{cartList: CartListInterface}>) { }

  ngOnInit() {
    this.updateCart()
  }

  updateCart = () => {
    let cartItems = {}
    this.store.select('cartList').subscribe(data=>{
      cartItems = data.cartItems
    })
    let keys = Object.keys(cartItems)
    this.cartList = []
    this.total = 0
    keys.forEach((key)=>{
      let item = cartItems[key]
      this.cartList.push(item)
      this.total += item.price * item.count
    })
    this.cartEmpty = this.cartList.length > 0 ? false : true
  }
}
