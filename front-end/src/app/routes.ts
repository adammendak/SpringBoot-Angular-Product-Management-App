import {LoginComponent} from "./login/login.component";
import {NewProductComponent} from "./products/new-product/new-product.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ProductDetailComponent} from "./products/product-detail/product-detail.component";
import {ProductsComponent} from "./products/products.component";
import {ErrorComponent} from './error/error.component';
import {ProductDetailActivator} from './products/product-detail/product-detail-activator';

export const routes = [
  {path: 'products/new', component: NewProductComponent},
  {path: 'products', component: ProductsComponent },
  {path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductDetailActivator]},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'error', component: ErrorComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', redirectTo: 'error', }
];
