import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../shared/product.model';
import { UpdateProductListAction } from './product-list.actions';
import { ProductListInterFace } from './product-list.reducer';
@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnDestroy{
  products$: Observable<ProductListInterFace>;
  products: Product[] = [];
  subscription: Subscription;
  constructor(
    private http: HttpClient,
    private store: Store<{productList: ProductListInterFace}>
  ) { }

  getProduct = (id) => {
    let product: Product;
    this.subscription = this.store.select('productList').subscribe(data=>{
      product = data.products.find(product => product.id == Number(id))
    })
    return product
  }

  async getProducts() {
    if (this.products.length){
      this.products$ = this.store.select('productList')
      return this.products$
    }
    var response = await this.http.get("https://api.tendercuts.in/catalog/product/?store_id=11").toPromise();
    if (Object.keys(response).length > 1) {
      if (response[1]['products']) {
        let list = response[1]['products'];
        if (list.length >= 1) {
          Object.keys(list).forEach(key => {
            let listItem = list[key]
            this.products.push(new Product(Number(key), listItem['thumb'], listItem['name'], listItem['pieces'] ? listItem['pieces'] + " Pieces" : "", `${listItem["weight_from"]} ${listItem['weight_to'] != listItem['weight_from'] ? ' - ' + listItem['weight_to'] : ""} ${listItem['weight_label'] ? listItem['weight_label'] : ""} `, Number(listItem['price']), 0, listItem['short_description']))
          })
        }
      }
    }
    this.store.dispatch(new UpdateProductListAction(this.products));
    this.products$ = this.store.select('productList')
    return this.products$
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
