import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {FormsModule} from "@angular/forms";
import { ConvertToSpacesPipe } from './products/convert-to-spaces.pipe';
import { StarComponent } from './products/star/star.component';
import {ProductService} from "./products/product.service";
import {HttpClientModule} from "@angular/common/http";
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {RouterModule} from "@angular/router";
import { NewProductComponent } from './products/new-product/new-product.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
    NewProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductsComponent },
      {path: 'product/:id', component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'products/new', component: NewProductComponent},
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'},
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
