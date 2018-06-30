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
// import { ToastrModule } from "ngx-toastr";
// export const ToastrModule;
import { ErrorComponent } from './error/index';
import { UserAuthService } from './user/user-auth.service';
import { NavbarComponent } from './navbar/index';
// import { TOASTR_TOKEN } from "./shared";

declare let toastr: any;

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
    NewProductComponent,
    ErrorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes),
    // ToastrModule.forRoot(),
    UserModule
  ],
  providers: [ProductService,
    // {provide: TOASTR_TOKEN, useValue: toastr },
    ProductDetailActivator,
    ProductListResolverService,
    UserAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
