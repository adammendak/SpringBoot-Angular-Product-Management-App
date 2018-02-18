import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ProductService} from './product.service';

@Injectable()
export class ProductListResolverService implements Resolve<any>{

  constructor(private _productsService: ProductService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this._productsService.getProducts().map(products => products);
  }
}
