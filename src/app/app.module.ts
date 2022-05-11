import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { ProductListItemComponent } from './product/product-list-item/product-list-item.component';
import { ProductsListComponent } from './product/products-list/products-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http'
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { CartButtonsComponent } from './cart/cart-buttons/cart-buttons.component';
import { FooterComponent } from './shared/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { productListReducer } from './product/product-list.reducer';
import { cartListReducer } from './cart/car.reducer';

const appRoutes: Routes = [
  {path: "", component: ProductsListComponent},
  {path: "cart", component: CartComponent},
  {path: ":id", component: ProductDetailComponent},
  {path: "404/not-found",  component: PageNotFoundComponent},
  {path: "**", pathMatch: "full", redirectTo: "404/not-found"}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListItemComponent,
    ProductsListComponent,
    CartComponent,
    ProductDetailComponent,
    PageNotFoundComponent,
    CartButtonsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    StoreModule.forRoot({productList: productListReducer, cartList: cartListReducer})
  ],
  providers: [CartComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
