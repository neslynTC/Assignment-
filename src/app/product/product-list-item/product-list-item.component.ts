import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  // count: number
  id: number
  img: string
  title: string
  description: string
  weight: string
  price: number
  @Input() product: Product
  constructor(private cartService: CartService, private router: Router) { 
  }

  ngOnInit() {
  }
  
  goToProductPage = () => {
    this.router.navigate([this.product.id])
  }
}
