import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductListInterFace } from '../product-list.reducer';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  
  products$: Observable<ProductListInterFace>;

  constructor(
    private store: Store<{productList: ProductListInterFace}>
  ) { }

  ngOnInit() {
    this.products$ = this.store.select('productList')
  }

}
