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
import {routes} from "./routes";
import {HttpModule} from "@angular/http";
import {ToastrServiceProxy} from "./shared/toastr.service";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

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
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot()
  ],
  providers: [ProductService, ToastrServiceProxy],
  bootstrap: [AppComponent]
})
export class AppModule { }
