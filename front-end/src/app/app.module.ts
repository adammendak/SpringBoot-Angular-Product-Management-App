import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  NewProductComponent,
  ProductsComponent,
  ProductDetailActivator,
  ProductListResolverService,
  ProductDetailComponent,
  ProductService,
  ConvertToSpacesPipe,
  StarComponent
} from './products/index'

import { UserModule } from './user/user.module';

import { WelcomeComponent } from './welcome/index';

import { ToastrServiceProxy } from "./shared/index";
import { ToastrModule } from "ngx-toastr";
import { ErrorComponent } from './error/index';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
    NewProductComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
    UserModule
  ],
  providers: [ProductService, ToastrServiceProxy, ProductDetailActivator, ProductListResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
