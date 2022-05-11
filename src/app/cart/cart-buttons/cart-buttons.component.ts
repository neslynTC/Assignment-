import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { CartComponent } from '../cart.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-buttons',
  templateUrl: './cart-buttons.component.html',
  styleUrls: ['./cart-buttons.component.css']
})
export class CartButtonsComponent implements OnInit {
  @Input() product: Product;
  constructor(private cartService: CartService, private cartComponent: CartComponent) { }

  ngOnInit() {
  }

  onAddItem() {
    this.product.count += 1
    this.cartService.addItemToCart(this.product)
    this.cartComponent.updateCart()
    return this.product.count
  }

  onRemoveItem() {
    if (this.product.count > 0)
      this.product.count -= 1
    else
      this.product.count = 0
    this.cartService.removeItemFromCart(this.product)
    this.cartComponent.updateCart()
    return this.product.count
  }

}
