import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {ProductService} from '../product.service';
import {Subscription} from 'rxjs/Subscription';
import {IProduct} from '../product';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductDetailActivator implements CanActivate {

  private product: IProduct;

  constructor(private productService: ProductService, private _router: Router) {
    console.log("inside router guard")
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //TODO authentication of user
    return true;
  }
}
